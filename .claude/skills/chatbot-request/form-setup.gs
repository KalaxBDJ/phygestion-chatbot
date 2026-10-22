/**
 * Updates the EXISTING "Configuración del chatbot" Google Form in place.
 * The form link and its linked response sheet stay the same.
 *
 * What it does:
 *   1. Adds the "Tipo de solicitud" dropdown right after the unit name.
 *   2. Extends the option pages up to MAX_OPTIONS (adds options past 20, and
 *      the "¿Desea agregar otra opción al menú?" question to option 20).
 *   3. Re-points every "No, ya terminé el menú" answer to the Confirmación page.
 *   4. Adds the ELIMINAR instruction to the option pages' help text.
 *
 * How to run: script.google.com > New project > paste this file, set FORM_ID.
 *   FORM_ID is in the form's edit link: docs.google.com/forms/d/<FORM_ID>/edit
 *   Run inspectForm to look at the form, then run updateForm.
 *
 * Safe to run again: every step checks what already exists and continues from
 * there, and temporary Google errors ("No se pudieron recuperar los datos del
 * formulario") are retried. Set MAKE_BACKUP to false on a re-run to avoid
 * another backup copy.
 *
 * New questions add new columns at the right end of the response sheet, after
 * "Confirmación"; existing columns and answers are not moved.
 */
var FORM_ID = 'PASTE_THE_FORM_ID_HERE';
var MAX_OPTIONS = 40;
var MAKE_BACKUP = true;

var REQUEST_TYPES = ['Nueva unidad', 'Actualizar opciones', 'Reemplazar todo'];
var CONFIRM_PAGE_TITLE = 'Confirmación y envío';
var CONFIRM_TITLE = 'Confirmación';
var ANOTHER_TITLE = '¿Desea agregar otra opción al menú?';
var DELETE_NOTE =
  'Para ELIMINAR una opción existente: escriba su título tal como aparece hoy en el menú ' +
  'y en la respuesta escriba ELIMINAR.';
var ATTEMPTS = 8;

/** Logs the structure of the form so it can be checked. */
function inspectForm() {
  var form = FormApp.openById(FORM_ID);
  Logger.log('Ítems: ' + form.getItems().length);
  form.getItems().forEach(function (item, i) {
    var line = i + ' | ' + item.getType() + ' | ' + item.getTitle();
    if (item.getType() === FormApp.ItemType.MULTIPLE_CHOICE) {
      line += ' | ' + item.asMultipleChoiceItem().getChoices().map(function (c) {
        var goTo = c.getGotoPage();
        return c.getValue() + ' -> ' + (goTo ? goTo.getTitle() : c.getPageNavigationType());
      }).join(' ; ');
    }
    Logger.log(line);
  });
}

/** Applies the changes; retries and resumes on temporary Google errors. */
function updateForm() {
  if (MAKE_BACKUP) {
    DriveApp.getFileById(FORM_ID).makeCopy('COPIA DE SEGURIDAD - Configuración del chatbot - ' + new Date().toISOString());
  }
  for (var attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      runUpdate_();
      Logger.log('Listo. Ejecute inspectForm para verificar.');
      return;
    } catch (e) {
      Logger.log('Intento ' + attempt + ' falló: ' + e.message);
      if (attempt === ATTEMPTS) throw e;
      Utilities.sleep(attempt * 4000);
    }
  }
}

function runUpdate_() {
  var form = FormApp.openById(FORM_ID);

  var confirmPage = findByTitle_(form, CONFIRM_PAGE_TITLE, FormApp.ItemType.PAGE_BREAK);
  var confirmCheck = findByTitle_(form, CONFIRM_TITLE, FormApp.ItemType.CHECKBOX);
  if (!confirmPage || !confirmCheck) {
    throw new Error('No encontré "' + CONFIRM_PAGE_TITLE + '" o la pregunta "' + CONFIRM_TITLE + '". Ejecute inspectForm.');
  }
  var confirmPageId = confirmPage.getId();
  var confirmCheckId = confirmCheck.getId();

  // 1. "Tipo de solicitud" dropdown, right after the unit name
  var unit = findByPrefix_(form, 'Nombre de la unidad');
  if (!unit) throw new Error('No encontré la pregunta del nombre de la unidad.');
  var dropdown = findByTitle_(form, 'Tipo de solicitud');
  if (!dropdown) {
    dropdown = form.addListItem()
      .setTitle('Tipo de solicitud')
      .setHelpText(
        'Nueva unidad: el chatbot de mi unidad no existe todavía.\n' +
        'Actualizar opciones: solo cambia, agrega o elimina las opciones que escriba aquí; el resto queda igual.\n' +
        'Reemplazar todo: el menú queda exactamente con las opciones de este formulario; las que no escriba se eliminan.'
      )
      .setChoiceValues(REQUEST_TYPES)
      .setRequired(true);
  }
  if (dropdown.getIndex() !== unit.getIndex() + 1) {
    form.moveItem(dropdown.getIndex(), unit.getIndex() + 1);
  }

  // 2. Option 20's "add another?" question and options 21..MAX_OPTIONS, appended
  //    after the confirmation items and moved back in front of them afterwards.
  var lastNotes = findByTitle_(form, 'Opción ' + MAX_OPTIONS + ': notas adicionales');
  if (!lastNotes) {
    appendSpecs_(form, buildSpecs_(), form.getItemById(confirmCheckId).getIndex());
  }

  // Put the confirmation page and question back at the end if they are not there
  form = FormApp.openById(FORM_ID);
  lastNotes = findByTitle_(form, 'Opción ' + MAX_OPTIONS + ': notas adicionales');
  var pageIdx = form.getItemById(confirmPageId).getIndex();
  var checkIdx = form.getItemById(confirmCheckId).getIndex();
  if (pageIdx < lastNotes.getIndex() || checkIdx < lastNotes.getIndex() || pageIdx > checkIdx) {
    form.moveItem(form.getItemById(confirmPageId).getIndex(), form.getItems().length - 1);
    form.moveItem(form.getItemById(confirmCheckId).getIndex(), form.getItems().length - 1);
  }

  // 3. Every "another option?" question: Sí -> next page, No -> Confirmación y envío
  findAllByTitle_(form, ANOTHER_TITLE).forEach(function (item) {
    var mc = item.asMultipleChoiceItem();
    mc.setChoices([
      mc.createChoice('Sí, agregar otra opción', FormApp.PageNavigationType.CONTINUE),
      mc.createChoice('No, ya terminé el menú', form.getItemById(confirmPageId).asPageBreakItem())
    ]);
  });

  // 4. ELIMINAR instruction on the option pages
  form.getItems(FormApp.ItemType.PAGE_BREAK).forEach(function (page) {
    if (/^Opción \d+ del menú$/.test(page.getTitle())) {
      var pb = page.asPageBreakItem();
      var help = pb.getHelpText() || '';
      if (help.indexOf('ELIMINAR') === -1) {
        pb.setHelpText(help ? help + '\n\n' + DELETE_NOTE : DELETE_NOTE);
      }
    }
  });
}

/** The items to append, in order: [{type, title, configure(typedItem)}]. */
function buildSpecs_() {
  var T = FormApp.ItemType;
  var specs = [];
  function add(type, title, configure) { specs.push({ type: type, title: title, configure: configure || function () {} }); }
  function required(item) { item.setRequired(true); }

  add(T.MULTIPLE_CHOICE, ANOTHER_TITLE, required);          // after option 20
  for (var i = 21; i <= MAX_OPTIONS; i++) {
    add(T.PAGE_BREAK, 'Opción ' + i + ' del menú', function (item) { item.setHelpText(DELETE_NOTE); });
    add(T.TEXT, 'Opción ' + i + ': texto que aparece en el menú', required);
    add(T.PARAGRAPH_TEXT, 'Opción ' + i + ': respuesta completa del chatbot', function (item) {
      item.setHelpText('Escriba exactamente lo que debe responder el chatbot. Para eliminar esta opción escriba ELIMINAR.');
      item.setRequired(true);
    });
    add(T.TEXT, 'Opción ' + i + ': enlace público (si aplica)', function (item) {
      item.setValidation(FormApp.createTextValidation().requireTextIsUrl().build());
    });
    add(T.TEXT, 'Opción ' + i + ': correo electrónico (si aplica)', function (item) {
      item.setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
    });
    add(T.PARAGRAPH_TEXT, 'Opción ' + i + ': notas adicionales', function (item) {
      item.setHelpText('Por ejemplo, si necesita una imagen, pegue aquí el enlace para descargarla.');
    });
    if (i < MAX_OPTIONS) add(T.MULTIPLE_CHOICE, ANOTHER_TITLE, required);
  }
  return specs;
}

/**
 * Brings what follows the confirmation question in line with the specs, so a run that
 * stopped halfway (or ran twice) is repaired instead of duplicated:
 *   - an item that matches the next spec is kept;
 *   - a stray "¿Desea agregar otra opción?" question where something else belongs is deleted;
 *   - a missing item is created and moved into its place;
 *   - anything missing at the end is appended.
 */
function appendSpecs_(form, specs, confirmCheckIndex) {
  var T = FormApp.ItemType;
  var base = confirmCheckIndex + 1;
  var tail = form.getItems().slice(base);
  var j = 0;
  while (j < specs.length) {
    var spec = specs[j];
    var actual = tail[j];
    if (!actual) {
      var added = addByType_(form, spec.type);
      configure_(added, spec);
      tail.push(added);
      j++;
      Utilities.sleep(150);
      continue;
    }
    var untitled = actual.getTitle() === '';        // stopped right after creating it
    if (actual.getType() === spec.type && (actual.getTitle() === spec.title || untitled)) {
      if (untitled || j === tail.length - 1) configure_(actual, spec);
      j++;
      continue;
    }
    if (actual.getType() === T.MULTIPLE_CHOICE && actual.getTitle() === ANOTHER_TITLE) {
      form.deleteItem(actual);                       // stray duplicate
      tail.splice(j, 1);
      continue;
    }
    var created = addByType_(form, spec.type);       // missing: create it and move it here
    configure_(created, spec);
    form.moveItem(created.getIndex(), base + j);
    tail.splice(j, 0, created);
    j++;
    Utilities.sleep(150);
  }
  for (var k = tail.length - 1; k >= specs.length; k--) {
    var extra = tail[k];
    if ((extra.getType() === T.MULTIPLE_CHOICE && extra.getTitle() === ANOTHER_TITLE) || extra.getTitle() === '') {
      form.deleteItem(extra);
    } else {
      throw new Error('Sobra un ítem inesperado después de "Confirmación": ' + extra.getTitle() + '. Ejecute inspectForm y envíe el resultado.');
    }
  }
}

function addByType_(form, type) {
  var T = FormApp.ItemType;
  switch (type) {
    case T.TEXT: return form.addTextItem();
    case T.PARAGRAPH_TEXT: return form.addParagraphTextItem();
    case T.MULTIPLE_CHOICE: return form.addMultipleChoiceItem();
    case T.PAGE_BREAK: return form.addPageBreakItem();
  }
  throw new Error('Tipo no soportado: ' + type);
}

function configure_(item, spec) {
  var T = FormApp.ItemType;
  var cast;
  switch (spec.type) {
    case T.TEXT: cast = 'asTextItem'; break;
    case T.PARAGRAPH_TEXT: cast = 'asParagraphTextItem'; break;
    case T.MULTIPLE_CHOICE: cast = 'asMultipleChoiceItem'; break;
    case T.PAGE_BREAK: cast = 'asPageBreakItem'; break;
  }
  // Items read from the form are generic and need the cast; items just created are already typed.
  var typed = typeof item[cast] === 'function' ? item[cast]() : item;
  typed.setTitle(spec.title);
  spec.configure(typed);
}

function findByTitle_(form, title, type) {
  var items = type ? form.getItems(type) : form.getItems();
  for (var i = 0; i < items.length; i++) if (items[i].getTitle() === title) return items[i];
  return null;
}

function findAllByTitle_(form, title) {
  return form.getItems().filter(function (it) { return it.getTitle() === title; });
}

function findByPrefix_(form, prefix) {
  var items = form.getItems();
  for (var i = 0; i < items.length; i++) if (items[i].getTitle().indexOf(prefix) === 0) return items[i];
  return null;
}

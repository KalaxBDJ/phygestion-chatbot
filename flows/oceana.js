const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');
const fs = require('fs');

const flowOceana = addKeyword(['NUEVOMILENIO'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de Oceana! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '*Estados de Cuenta:* 📑',
        '*1.* Consulta factura y estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        '*2.* Reportar novedad de facturación.',
        '*3.* ¿Cuándo es mi fecha límite de pago?',
        '*4.* Enviar soporte de pago',
        '*5.* Medios de pago administración.',
        '*6.* Medios de pago zonas comunes.',


        '\nℹ️ *Información sobre ENDOSOS*',
        '*7.* Solicitar el endoso del seguro para su crédito hipotecario.',

        '\n*Información General:* ℹ️',
        '*8.* Paz y salvo.',
        '*9.* Información de mudanza.',
        '*10.* Información SALÓN SOCIAL.',
        '*11.* Información teatro',
        '*12.* Información billar',
        '*13.* Información BBQ',
        '*14.* Información salón de videojuegos',
        '*15.* Información canchas',
        '*16.* Horarios de atención administrativa.',
        '*17.* Solicitar Reglamento de propiedad horizontal.',
        '*18.* Enviar Manual de Convivencia.',
        '*19.* Diligenciamiento censo poblacional.',
        '*20.* Radicar derechos de petición.',
        '*21.* PQRSF.',
        '*22.* Contactar con un asesor.',
        '*23.* Contacto porteria.',
        '*24.* Número para solicitar retiro de escombros.',

        '\n*Opciones de Navegación:* 🧭',
        '*25.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
        const option = ctx.body.trim();
        switch (option) {
            case '1':
                await flowDynamic(`Solicita tu factura y estado de cuenta aquí: https://www.phenlinea.info/ 🧾
Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
                break;
            case '2':
                await flowDynamic(`💸 *NOVEDAD de Facturación* 💸

Por favor, envía tu solicitud a través del aplicativo “PROPIEDATA” 📲. Se te dará solución a la brevedad posible ⏳. Especifica la novedad de facturación para la corrección, si corresponde ✅.

Sugerencia: Adjuntar soportes donde se evidencie:
fecha, destinatario, valor pagado referencia: # de apto.

Nota: Si su pago lo realizó por fuera de la fecha límite, este se verá reflejado en la siguiente factura.
Si su pago se encuentra por fuera de la fecha límite, deberá restar el valor pagado a su factura del mes actual y la diferencia será su valor a pagar.
`);
                break;
            case '3':
                await flowDynamic([
                    {
                        body: "fecha_pago-oceana.png",
                        media: 'https://raw.githubusercontent.com/KalaxBDJ/phygestion-chatbot/refs/heads/main/media/fecha_pago-oceana.png'
                    },
                    {
                        body: "Los pagos que se realicen después de la fecha de vencimiento, generan  facturas dobles e intereses y el pago se ve reflejado al mes siguiente."
                    }
                ]);
                break;
            case '4':
                await flowDynamic(
                    `📧 Por favor, envía un correo a *conjuntooceana@gmail.com* adjuntando el soporte de pago, indicando el número de tu apartamento 🏢`);
                break;
            case '5':
                await flowDynamic(`💳 *MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN* 💳

1️⃣ *Pago por PSE*: Usa el siguiente enlace para realizar el pago 👉 https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00017824&origen=buscar
Al ingresar en el buscador, escribe *"conj inmobiliario oceana et 1 t 1 y 2 cl 39 52 95"*. En la casilla de referencia, coloca el *número de tu apartamento* 🏢.

2️⃣ *Pago en Oficina Bancaria*: Realiza el pago directamente en una oficina del *Banco AV Villas*, cuenta corriente *502221401*, con referencia el *número de tu apartamento*.

3️⃣ *Pago con Datáfono*: Puedes pagar con datáfono directamente en la oficina de administración 💳.`);
                break;
            case '6':
                await flowDynamic(
                    `💼 *MEDIOS DE PAGO ZONAS COMUNES* 💼

🏛️ *SALÓN SOCIAL*

1️⃣ *Pago por PSE*: Realiza el pago mediante el siguiente enlace 👉 https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00017824&origen=buscar
En el buscador, ingresa *"conj inmobiliario oceana et 1 t 1 y 2 cl 39 52 95"* y en la casilla de referencia coloca *4040*.

2️⃣ *Pago en Oficina Bancaria*: Dirígete a cualquier oficina del *Banco AV Villas*, cuenta corriente *502221401*, referencia *4040*.

3️⃣ *Pago con Datáfono*: Puedes pagar con datáfono directamente en la oficina de administración 💳.

🍖 *BBQ*

1️⃣ *Pago por PSE*: Realiza el pago mediante el siguiente enlace 👉 https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00017824&origen=buscar
En el buscador, ingresa *"conj inmobiliario oceana et 1 t 1 y 2 cl 39 52 95"* y en la casilla de referencia coloca *4040*.

2️⃣ *Pago en Oficina Bancaria*: Dirígete a cualquier oficina del *Banco AV Villas*, cuenta corriente *502221401*, referencia *4040*.

3️⃣ *Pago con Datáfono*: Puedes pagar con datáfono directamente en la oficina de administración 💳.`);
                break;
            case '7':
                await flowDynamic(
                    `📄 *Circular Informativa para Solicitar el Endoso del Seguro para Crédito Hipotecario* 📄

Por favor, revisa la circular informativa en el siguiente enlace:
https://drive.google.com/file/d/1pQP7ArafxQOmJk-3jd452yRzpPHSSOSX/view?usp=sharing

Para cualquier consulta, puedes comunicarte al correo *consultorvivaseguros@gmail.com* 📧.`);
                break;
            case '8':
                await flowDynamic(
                    `📧 *Solicitud de PAZ Y SALVO*

Para solicitar el *PAZ Y SALVO*, envía un correo a *conjuntooceana@gmail.com* con la siguiente información:

- *Nombre Completo* 👤
- *Número de Celda de Parqueadero* 🚗
- *Número de Cuarto Útil* 📦
- *Cédula* 🆔
- *Soporte de pago del mes en curso* 📄

🕒 Ten en cuenta que el PAZ Y SALVO será remitido después de cumplirse *3 días hábiles* desde la solicitud.`);
                break;
            case '9':
                await flowDynamic([
                    {
                        body: "mudanza-oceana.png",
                        media: 'https://raw.githubusercontent.com/KalaxBDJ/phygestion-chatbot/refs/heads/main/media/mudanza-ocena.png'
                    },
                    {
                        body: `Después de programada la mudanza, recuerda diligenciar el censo para actualización de datos: 
                        https://docs.google.com/forms/d/e/1FAIpQLSeZONqRXfszpaDIEwMJ2I7mLDy2gPOOdcwWHgzexrfMCnd-5g/viewform?usp=dialog`
                    }
                ])
                break;
            case '10':
                await flowDynamic(
                    `🎉 Información SALÓN SOCIAL 🎉

    La reserva debe hacerse por la APP PROPIEDATA; en caso de no tener la APP, por favor acercarse a la administración y realizar el registro.

    Alquiler del salón social:
    - # 1 $ 150.000 * Dotación: 6 mesas y 30 sillas aforo 30 personas aprox.
    - # 2 $ 150.000 * Dotación: 6 mesas y 30 sillas aforo 30 personas aprox.
    - # 3 $ 250.000 * Dotación, 12 mesas y 60 sillas, aforo: 60 Personas aprox.

    1. El salón social es de uso exclusivo para residentes.
    Horarios: El horario de uso del salón social será de lunes a domingo de 9:00 a.m. hasta las 12:00 p.m.
    Condiciones para el alquiler:
    - El apartamento debe encontrarse al día con la administración.
    - El comprobante de pago lo debe enviarse a la administración por lo menos con 3 días de anterioridad.
    - Se debe dejar la lista de invitados un día antes en portería para permitir su ingreso, incluyendo la placa de vehículos.

    NOTA IMPORTANTE:
    - Está prohibido realizar algún tipo de asados fuera del salón social. No se permite el uso de inflables.
    - No se permite juegos pirotécnicos, bengalas.
    - No se permite afuera del salón social sillas u otros objetos (carrito de perros, carrito de mango, entre otros).
    - La entrega del salón social debe ser al día siguiente antes de las 8:00 am para poder entregárselo a la siguiente persona que reserva y debe entregarse limpio (con el respectivo aseo).
    - El dueño del evento se hace responsable de los daños que causen sus invitados (dar claridad sobre el buen uso del parqueadero y el comportamiento en las zonas comunes cerca a los salones sociales; no se permite mascotas).
    - El volumen de la música debe ser moderado; no es una discoteca. Recuerda que estás dentro de una unidad residencial y tus vecinos merecen descansar.
    - No explotar las bombas de tu decoración; utiliza tijeras para estirar la bomba y cortar
`);
                break;
            case '11':
                await flowDynamic(
                    `🎭 *Información para el Uso del TEATRO* 🎭

La reserva debe hacerse por la APP PROPIEDATA; en caso de no tener la APP, por favor acercarse a la administración y realizar el registro.

- *Responsable*: El teatro solo puede ser utilizado bajo la responsabilidad de una persona mayor de edad, propietario o residente, previa solicitud.
- *Pagos al Día*: Es necesario estar al día con los pagos de las cuotas de administración.
- *Ingreso*: Solo se permite el ingreso de personas acompañadas por el solicitante del teatro.
- *Responsabilidad por Daños*: Cualquier daño ocasionado será facturado al propietario que solicitó la reserva.
- *Aforo*: El aforo máximo permitido es de 15 personas.
- *Prohibición de Mascotas*: No se permite el ingreso de mascotas.
- *Entrega y Condiciones*: El teatro se entregará con un acta al solicitante, quien debe devolverlo en las mismas condiciones en que se le entregó.
- *Uso de Equipos*: Ningún dispositivo o elemento del teatro debe ser retirado de esta área.

Asegúrate de seguir estas normas para un uso adecuado del teatro. 🎬`);
                break;
            case '12':
                await flowDynamic(
                    `🎱 *Información para el Uso de la Zona de BILLAR* 🎱

La reserva debe hacerse por la APP PROPIEDATA; en caso de no tener la APP, por favor acercarse a la administración y realizar el registro.

- *Elementos de Juego*: Los elementos deben reclamarse y entregarse en la portería principal, presentando un documento de identidad.
- *Normas de Cuidado*:
  - No te apoyes en la mesa mientras juegas.
  - Prohibido fumar en la zona de juegos.
  - Evita usar joyas que puedan engancharse o dañar la tela de la mesa.
  - Al poner tiza al taco, hazlo fuera de la mesa para evitar residuos sobre la tela.
  - No consumas licor ni alimentos sobre la mesa.
- *Supervisión*: Los menores de edad deben estar acompañados de un adulto responsable.
- *Tiempo de Uso*: La mesa de billar pool se presta por un máximo de una hora por apartamento.
- *Devolución*: Al finalizar, devuelve los elementos en buen estado en la portería principal.

Recuerda respetar estas normas para el cuidado y disfrute de todos. 😊`);
                break;
            case '13':
                await flowDynamic(
                    `🍖 *Información para el Uso de la Zona de BBQ* 🍖

La reserva debe hacerse por la APP PROPIEDATA; en caso de no tener la APP, por favor acercarse a la administración y realizar el registro.

- *Frecuencia de Uso*: La zona de BBQ puede ser utilizada una vez al día por cada familia para permitir la adecuada preparación del espacio entre turnos.

- *Horario*:
  - *Lunes a Jueves*: 10:00 am - 10:00 pm

- *Exclusividad para Residentes*: Solo residentes y sus invitados pueden utilizar la zona, acompañados por el solicitante; no se permite el acceso a personas externas.

- *Reservas*:
  - Cada apartamento puede reservar un espacio de BBQ con un cupo máximo de 10 personas (incluyendo menores de edad).
  - La reserva debe realizarse con al menos *3 días hábiles de anticipación* y previo pago de una tarifa de *$10,000* para cubrir consumos de energía, agua y reposición de elementos.
  - Mantener las obligaciones al día con la administración es requisito.

- *Comportamiento y Respeto*:
  - Mantener un ambiente de urbanidad y respeto, evitando gritos y equipos de sonido a alto volumen.
  - No se permite el uso de la zona para eventos con ánimo de lucro, salvo eventos organizados por la administración.

- *Condiciones de Entrega*:
  - La zona debe entregarse limpia y en condiciones funcionales. De no ser así, se aplicará una sanción de *$50,000* por falta de aseo evidente.
  - Preaviso de cancelación es necesario para permitir la reserva de otros residentes; no se realizan reembolsos a menos que exista una causa de fuerza mayor comprobable.

- *Reglas Adicionales*:
  - *Consumo de Alcohol*: Permitido con moderación.
  - *Sustancias Psicoactivas*: Prohibidas. Aplican multas según el Manual de Convivencia.
  - *Mascotas*: Permitidas, pero deben llevar correa.
  - *Responsabilidad por Daños*: El residente que reserva es responsable de cualquier daño y el costo de reparación se incluirá en la cuenta de administración.

- *Intervención de Vigilancia*: La empresa de vigilancia puede dar por finalizado el evento en caso de actos violentos, ruido excesivo, incumplimiento del horario o riesgo a la integridad física o la propiedad.

- *Sanciones*: El residente que realiza la reserva será responsable de las sanciones por comportamientos inadecuados de sus invitados.

Este reglamento tiene como objetivo promover un ambiente armonioso y seguro en la zona de BBQ del conjunto residencial.`);
                break;
            case '14':
                await flowDynamic(
                    `🎮 *Información del SALÓN DE VIDEOJUEGOS* 🎮

La reserva debe hacerse por la APP PROPIEDATA; en caso de no tener la APP, por favor acercarse a la administración y realizar el registro.

*Ubicación*: El salón de videojuegos se encuentra en el piso principal de la torre tres y está equipado con mobiliario, sonido, televisor, conexión a Internet y dos consolas Xbox. Es de uso exclusivo para los residentes de *OCEANA P.H.*, dedicado al encuentro, esparcimiento y entretenimiento.

*Reglamento*:

1. *Uso Exclusivo para Residentes*: Solo residentes del Conjunto Inmobiliario Oceana P.H. pueden acceder.
2. *Menores Acompañados*: Los menores de edad deben estar acompañados por un adulto responsable.
3. *Pagos al Día*: Los usuarios deben estar al día en el pago de las cuotas de administración.
4. *Reserva*: Las reservas deben ser realizadas por un adulto responsable registrado en el censo del apartamento.
5. *Uso Adecuado de Equipos*: Los equipos deben ser utilizados de manera responsable.
6. *Prohibido Retirar Equipos*: Ningún elemento puede ser retirado del salón.
7. *Sin Alimentos ni Bebidas*: No se permite el ingreso de alimentos o bebidas.
8. *Sin Mascotas*: No está permitido el ingreso de mascotas.
9. *Inventario y Revisión*: El salón debe ser recibido y entregado con inventario y revisión de equipos, supervisado por el personal de administración o vigilancia.
10. *Turnos Limitados*: Los turnos serán de máximo dos horas por persona.
11. *Responsabilidad por Daños*: Cualquier daño deberá ser asumido por la persona que reservó el turno.
12. *Horario de Uso*: 10:00 am a 10:00 pm.
13. *Prohibido Remover Elementos*: No se puede sacar ningún elemento del salón.
14. *Prohibiciones Específicas*: Está prohibido el consumo de cigarrillos, tabaco, bebidas alcohólicas, sustancias alucinógenas, alimentos y el ingreso de mascotas.
15. *Sustancias Peligrosas*: No se pueden ingresar sustancias inflamables o corrosivas.
16. *Contenido Apropiado*: Solo está permitido contenido adecuado para todos los públicos. Hay supervisión mediante circuito cerrado de TV.

*Conductas Sancionables*: Incluyen daños a los equipos, consumo de licor, no entrega de controles, obstrucción de cámaras de seguridad, lanzar objetos o basura, y cualquier conducta inapropiada que afecte el salón. Las sanciones y multas están regidas por el Manual de Convivencia.

Este reglamento tiene como objetivo mantener el orden y el buen uso del salón de videojuegos, garantizando un espacio seguro y agradable para todos los residentes.`);
                break;
            case '15':
                await flowDynamic(
                    `🏟️ Reservas canchas

CANCHA MULTIFUNCIONAL 🏀⚽🏐

📜 NORMAS PARA EL USO DE LAS CANCHAS DEPORTIVAS

1️⃣ HORARIO 🕒: El uso de las instalaciones será para los residentes del Conjunto Inmobiliario Oceana 🏢 y se permitirá el acceso de invitados 👥. Se puede reservar la cancha por medio de PROPIEDATA 📲. El horario de la cancha será el asignado por la Administración 📑 y el Consejo de Administración, el cual podrá ser modificado mediante circular 🔄.

2️⃣ NÚMERO DE USUARIOS 👥: El número máximo de jugadores para la práctica deportiva es de diez (10) personas 🏃‍♂️🏃‍♀️, es decir, cinco (5) personas por equipo ⚽ incluido el arquero 🥅. Como mínimo, deberá estar un residente y/o propietario en la cancha reservada, siendo este el responsable de los daños y perjuicios que generen las personas externas invitadas 🚨. Se deberá firmar un acta ✍️ en la que el propietario o residente se responsabilice del uso de este espacio.

3️⃣ DURACIÓN DE TURNOS ⏳: Los turnos tendrán una duración de 60 minutos ⏰. Es obligación y acto de cortesía desalojar las canchas cuando otro usuario llegue para su turno. Si un usuario se retrasa ⏳ en el uso de su turno, perderá ese tiempo sin derecho a prolongación ❌.

4️⃣ SOLICITUD DE TURNOS 📆: No se asignarán más de dos turnos por día a la misma persona ❌. Tampoco se puede reservar la misma cancha por dos horas continuas ⏳⏳, a menos que otro integrante del equipo propietario o residente realice la reserva 📝.

5️⃣ RESERVA DE TURNOS 📅: Se deberá reservar con 2 días de antelación 📆. Si hay disponibilidad, se puede hacer uso el mismo día realizando la reserva 🔄.

6️⃣ CALZADO E INDUMENTARIA APROPIADA 👟👕: Se debe usar calzado adecuado como tenis o guayos de tache corto ⚽. Además, por higiene, se debe llevar siempre puesta la indumentaria 👕.

7️⃣ SEGURIDAD 🚫🍔🚬: No está permitido el ingreso de alimentos, chicles, envases de vidrio 🥤🚯, ni el ingreso de personas en estado de embriaguez 🍻❌ o bajo efectos de sustancias psicoactivas 🚫.

8️⃣ UTILIZACIÓN 🏀⚽🏐: En la cancha múltiple se podrá practicar microfútbol ⚽, básquetbol 🏀, voleibol 🏐 y otras actividades deportivas que no alteren la estructura de la cancha.

9️⃣ MANTENIMIENTO 🛠️: Cuando las canchas estén en mantenimiento, no se permitirá la presencia de personas ajenas a esta función ⚠️.

🔟 CUIDADOS Y DEBERES DE LOS USUARIOS 🧹: Quien haga uso de las canchas se compromete a cuidarlas y mantenerlas limpias 🧼.

⚠️ PASADOS 20 MINUTOS ⏳, si no se hace uso de la reserva, se dará por cancelada y se cederá el espacio 🔄.


CANCHA SINTÉTICA ⚽🌱

📜 NORMAS PARA EL USO DE LAS CANCHAS DEPORTIVAS

1️⃣ HORARIO 🕒: El uso de las instalaciones será para los residentes del Conjunto Inmobiliario Oceana 🏢 y se permitirá el acceso de invitados 👥. Se puede reservar la cancha por medio de PROPIEDATA 📲. El horario de la cancha será el asignado por la Administración 📑 y el Consejo de Administración, el cual podrá ser modificado mediante circular 🔄.

2️⃣ NÚMERO DE USUARIOS 👥: El número máximo de jugadores es de diez (10) personas 🏃‍♂️🏃‍♀️, cinco (5) por equipo ⚽ incluyendo el arquero 🥅. Como mínimo, deberá estar un residente y/o propietario en la cancha reservada, siendo este el responsable de los daños y perjuicios que generen las personas externas invitadas 🚨. Se deberá firmar un acta ✍️ en la que el propietario o residente se responsabilice del uso de este espacio.

3️⃣ DURACIÓN DE TURNOS ⏳: Los turnos tendrán una duración de 60 minutos ⏰. Es obligación y acto de cortesía desalojar las canchas cuando otro usuario llegue para su turno. Si un usuario se retrasa ⏳ en el uso de su turno, perderá ese tiempo sin derecho a prolongación ❌.

4️⃣ SOLICITUD DE TURNOS 📆: No se asignarán más de dos turnos por día a la misma persona ❌. Tampoco se puede reservar la misma cancha por dos horas continuas ⏳⏳, a menos que otro integrante del equipo propietario o residente realice la reserva 📝.

5️⃣ RESERVA DE TURNOS 📅: Se deberá reservar con 2 días de antelación 📆. Si hay disponibilidad, se puede hacer uso el mismo día realizando la reserva 🔄.

6️⃣ CALZADO E INDUMENTARIA APROPIADA 👟👕: Se debe usar calzado adecuado como tenis o guayos de tache corto ⚽. Además, por higiene, se debe llevar siempre puesta la indumentaria 👕.

7️⃣ SEGURIDAD 🚫🍔🚬: No está permitido el ingreso de alimentos, chicles, envases de vidrio 🥤🚯, ni el ingreso de personas en estado de embriaguez 🍻❌ o bajo efectos de sustancias psicoactivas 🚫.

8️⃣ UTILIZACIÓN ⚽🌱: En la cancha sintética solo se podrá practicar fútbol ⚽ y actividades relacionadas.

9️⃣ MANTENIMIENTO 🛠️: Cuando las canchas estén en mantenimiento, no se permitirá la presencia de personas ajenas a esta función ⚠️.

🔟 CUIDADOS Y DEBERES DE LOS USUARIOS 🧹: Quien haga uso de las canchas se compromete a cuidarlas y mantenerlas limpias 🧼.

⚠️ PASADOS 20 MINUTOS ⏳, si no se hace uso de la reserva, se dará por cancelada y se cederá el espacio 🔄.

📌 Nota legal ⚖️: Los usuarios conocen y voluntariamente asumen los riesgos inherentes a la práctica del deporte 🏃‍♂️, y ante daños o lesiones que puedan sufrir en las canchas sintéticas del Conjunto Oceana 🏢, sin que medie negligencia por parte de la copropiedad, no habrá lugar a reclamaciones ante la persona jurídica ⚖️.`);
                break;
            case '16':
                await flowDynamic(
                    `🏢 *Horario Administración* 🏢

- *Lunes, Martes, Miércoles y Viernes*
  - 8:00 am a 1:00 pm
  - 2:00 pm a 5:00 pm

- *Jueves*
  - 12:00 pm a 8:00 pm

- *Sábado*
  - 8:00 am a 12:00 pm`);
                break;
            case '17':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/file/d/1YD2S1WaUyFXoZiEI3WA5s0C0F4mOnsrB/view?usp=sharing 📘');
                break;
            case '18':
                await flowDynamic('Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/1h-xNvKKqBIZNhXrQ2EK64inE0eHrkhBP/view?usp=sharing 📘')
                break;
            case '19':
                await flowDynamic('Diligencia el censo poblacional aquí: https://docs.google.com/forms/d/14nrogLBiM3cx_aB1xe5ICor7ovrksqGZnYVBHg1SDDw/edit 📝');
                break;
            case '20':
                await flowDynamic(`📧 Por favor, envía un correo a *conjuntooceana@gmail.com* indicando el *número de tu apartamento* 🏢.`);
                break;

            case '21':
                await flowDynamic(`Si tienes una PQR relacionada con temas locativos, de administración o de convivencia, por favor gestionarla exclusivamente a través de la plataforma PROPIEDATA => https://www.propiedata.com/ . Si no tienes un correo registrado, acércate a la oficina de la administración para realizar el registro.`);
                break;
            case '22':
                await flowDynamic(`📞 *Comunicarse con un Asesor*

Para asistencia, puedes comunicarte con nuestra asistente administrativa:
*Estefanía Villa*
📲 *3108947160*`);
                break;
            case '23':
                await flowDynamic(`📞 *Números de Portería*

- *Portería Principal*:
  📲 3053356531
  📲 3166381488

- *Portería Peatonal*:
  📲 3044546613`);
                break;
            case '24':
                await flowDynamic(`📞 *Número para Solicitar Retiro de Escombros*

*INTERASEO* (Madera, escombros, muebles, electrodomésticos):
📲 *3012655557*`);
                break;
            case '25':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        lastFlow = flowOceana;
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowOceana;
const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');
const { setLastFlow } = require('./last-flow');


const flowRoterdam = addKeyword(['ROTERDAM'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de Roterdam! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '*Estados de Cuenta:* 📑',
        '*1.* Consulta de estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        '*2.* Solicitud de factura.',
        '*3.* Día de pago.',
        '*4.* Soporte de meses anteriores.',
        '*5.* Revisión estados de cuenta',
        '*6.* Enviar soporte de pago mes actual',
        '*7.* Medios de Pago de administración',
        '*8.* Medios de pago otros servicios',

        '\n*Información General:* ℹ️',
        '*9.* Paz y salvo.',
        '*10.* Horarios zonas comunes.',
        '*11.* Horarios atención administración.',
        '*12.* Ver RPH drive.',
        '*13.* Ver Manual de Convivencia DRIVE .',
        '*14.* Diligenciamiento censo poblacional.',
        '*15.* Solicitud sobre los endosos de su apartamento.',
        '*16.* Radicar derechos de petición CORREO.',
        '*17.* Reservas, entrega y normas de las zonas comunes.',
        '*18.* Información MUDANZA.',
        '*19.* Información SANCIONES DE PARQUEADERO .',
        '*20.* PQRSF CORREO.',
        '*21.* Reporte novedades (locativas) CORREO.',
        '*22.* Comunicarse con un asesor.',
        '*23.* Comunicarse con Portería.',

        '\n*Opciones de Navegación:* 🧭',
        '*24.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
        const option = ctx.body.trim();
        switch (option) {
            case '1':
                await flowDynamic(`Consulta tus estados de cuenta aquí: https://www.phenlinea.info/ 📊

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtjToG-BGmGgxJq8A?e=1KjneI `);
                break;
            case '2':
                await flowDynamic(`Solicita tu factura aquí: https://www.phenlinea.info/ 🧾

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
                break;
            case '3':
                await flowDynamic(`Si paga después de la fecha de vencimiento de la factura (28 o 30 de cada mes)  el pago se verá reflejado al siguiente mes y se generarán intereses.`);
                break;
            case '4':
                await flowDynamic(`Por favor enviar un correo a roterdamph@gmail.com, con el número de apartamento y el mes de pago que se efectuó.`);
                break;
            case '5':
                await flowDynamic(`Por favor enviar un correo a roterdamph@gmail.com, con el número de apartamento. Especificar la novedad de facturación para la debida corrección si es el caso.`);
                break;
            case '6':
                await flowDynamic(`Por favor enviar un correo a roterdamph@gmail.com, con el número de apartamento y el día de pago que se efectuó.`);
                break;
            case '7':
                await flowDynamic(`MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN

1.Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Urbanizacion Roterdam Ph Av 26 52140” EN LA CASILLA DE REFERENCIA NUMERO DE APTO
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00010326&origen=buscar&bancaEmpresarial=false&login=temporal 

2.Directamente en oficina bancario AV VILLAS cuenta corriente
512171596 referencia número del apartamento.
`);
            case '8':
                await flowDynamic(`MEDIOS DE PAGO OTROS SERVICIOS 
*SALON SOCIAL*
1.Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Urbanizacion Roterdam Ph Av 26 52140” EN LA CASILLA DE REFERENCIA NUMERO DE APTO
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00010326&origen=buscar&bancaEmpresarial=false&login=temporal 


2.Directamente en oficina bancario AV VILLAS cuenta corriente
512171596 número de referencia 7777.

*BBQ*
1.Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Urbanizacion Roterdam Ph Av 26 52140” EN LA CASILLA DE REFERENCIA NUMERO DE APTO
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00010326&origen=buscar&bancaEmpresarial=false&login=temporal 

2.Directamente en oficina bancario AV VILLAS cuenta corriente
512171596 número de referencia 8888

*CANCHA*
1.Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Urbanizacion Roterdam Ph Av 26 52140” EN LA CASILLA DE REFERENCIA NUMERO DE APTO
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00010326&origen=buscar&bancaEmpresarial=false&login=temporal 

2.Directamente en oficina bancario AV VILLAS cuenta corriente
512171596 número de referencia 6666
`);
                break;
            case '9':
                await flowDynamic(`Deben enviar un correo a roterdamph@gmail.com, con la siguiente información para solicitar el PAZ Y SALVO. Deberá tener en cuenta que el PAZ Y SALVO después de solicitarlo se le remitirá cuando hayan cumplido 3 días hábiles.
-	Nombre Completo
-	Número de Celda de Parqueadero
-	Número de Cuarto Útil
-	Cédula
- Ultimo comprobante de pago
`);
                break;
            case '10':
                await flowDynamic(`*HORARIO GIMNASIO*
24HRS
Se cierra el gimnasio por 2 horas, de 1:00 PM a 3:00 PM, para limpieza de la misma.

Nota: Después de las 10:00 PM se reducirá el volumen del equipo de sonido.

*HORARIO PISCINA*
Miércoles y viernes
1:00 PM A 8:00 PM 
Martes, jueves, sábado, Domingo y lunes 
10:00 AM A 5:00 PM  
LUNES FESTIVO
10:00 AM A 5:00 PM

NOTA: Los días lunes se realiza la limpieza profunda de la piscina, si el lunes es festivo esta limpieza para a realizarse los días martes

*HORARIO TURCO*
Miércoles y viernes
1:00 PM A 8:00 PM 
Martes, jueves, sábado, Domingo y lunes 
10:00 AM A 5:00 PM  
LUNES FESTIVO
10:00 AM A 5:00 PM

NOTA: Los días lunes se realiza la limpieza profunda de la piscina, si el lunes es festivo esta limpieza para a realizarse los días martes

*HORARIO SALON SOCIAL*
Domingo a jueves 
10:00 AM A 10:00 PM 
viernes y sábados
10:00 AM A 12:00 AM.

*HORARIO SALON JOVENES*
Lunes a jueves
10:00 AM A 11:00 PM

Viernes, sábado y domingo – lunes si es festivo
10:00 AM A 11:00 PM 

*HORARIO SALON ADULTOS*
Lunes a jueves
9:00 AM A 10:00 PM

Viernes, sábado y domingo – lunes si es festivo
9:00 AM A 12:00 PM 

*HORARIO SALON INFANTIL*
Lunes a jueves
9:00 AM A 8:00 PM

Viernes, sábado y domingo – lunes si es festivo
9:00 AM A 9:00 PM 

*HORARIO CANCHA*
Lunes a jueves
6:00 AM A 10:00 PM

Viernes, sábado y domingo – lunes si es festivo
8:00 AM A 12:00 PM 

*HORARIO BBQ*
Lunes a jueves
10:00 AM A 10:00 PM

Viernes, sábado y domingo – lunes si es festivo
10:00 AM A 12:00 PM 
`);
                break;
            case '11':
                await flowDynamic(`*HORARIO ADMINISTRACIÓN*
*LUNES*
11:00 AM A 07:00 PM
*NOTA:* Cuando es lunes festivo se traslada el horario al dia miercoles.

*MARTES, MIERCOLES, JUEVES Y VIERNES*
08:00 AM A 1:00 PM Y 2:00 PM A 5:00 PM

*SABADO*
8:00 AM A 12:00 PM
`);
                break;
            case '12':
                await flowDynamic(`https://drive.google.com/drive/folders/1WSN8T6Dej3ynoleu3L4O9qwuyhUuLOL3?usp=drive_link`);
                break;
            case '13':
                await flowDynamic(`https://drive.google.com/file/d/1HVcZza8Kc5oAtru7PaqqRsM-j7oBU9om/view?usp=drive_link`);
                break;
            case '14':
                await flowDynamic(`https://docs.google.com/forms/d/1AXn8iRFoJb1z1Hmpk9Omi6N25hbbd9T9bCD3pQzjj3w/preview`);
                break;
            case '15':
                await flowDynamic(`https://www.hemisferica.co/endosos`);
                break;
            case '16':
                await flowDynamic(`roterdamph@gmail.com`);
                break;
            case '17':
                await flowDynamic([`*RESERVAS, ENTREGA Y NORMAS DE LAS ZONAS COMUNES*
*Salón social de adultos reserva y entrega:*
•	Podrán ser utilizados por los propietarios o residentes.
•	Se deberá reservar en portería.
•	Solo se reservará el uso de cada mesa, el espacio del salón es de libre tránsito para los residentes.
•	Se deberá tener conductas responsables que no perturben la tranquilidad de los demás usuarios.
•	No se permite el ingreso de mascotas y animales al área.
•	El horario de disfrute será de domingo a jueves será desde las 09:00 am hasta las10:00 pm y los viernes, sábado y domingo si el día siguiente es festivo será desde las 09:00 am hasta las 12:00 pm.
•	Quien haga mal uso o cause deterioro de las instalaciones se hará responsable de los costos económicos que conllevan las reparaciones.
•	Queda prohibido el consumo de cigarrillos y sustancias psicoactivas al interior.
•	Se podrá consumir moderadamente bebidas alcohólicas.
•	Se prohíbe la realización de eventos sociales, al igual que pegar bombas, carteles ydemás elementos que deterioren las paredes, para dicha función existe el salón social.
•	Los vigilantes entregarán el salón de adultos en óptimas condiciones y en las mismas deberá ser entregado por parte del residente, aplica también para las mesas de billar, el espacio utilizado, sillas, mesas, cocina y demás elementos que hicieran de su uso durante la reserva.
•	Los daños ocasionados deberán ser asumidos por el propietario o residente que reservó.
•	Solo se podrá usar por un máximo de 60 minutos, si no hay reserva siguiente se podrá usar otros 60 minutos más.
•	No se puede disponer las mesas de billar como mesas para comida, para sentarse
•	sobre ellas, para las bebidas o elementos que dañen o deterioren las mesas, cualquier daño deberá ser asumido por el residente o propietario.
•	Se prohíbe el ingreso de menores de edad.
*Salón social de jovenes reserva y entrega:*
•	Podrán ser utilizados por los propietarios o residentes.
•	El horario de disfrute será de domingo a jueves desde las 09:00 am hasta las 09:00 pm y los viernes, sábado y domingo si el día siguiente es festivo será desde las 09:00 am hasta las 11:00 pm.
•	Se deberá reservar en portería.
•	Solo se reservará el uso de cada mesa, el espacio del salón es de libre tránsito para los
•	residentes.
•	Se deberá tener conductas responsables que no perturben la tranquilidad de los demás usuarios.
•	No se permite el ingreso de mascotas y animales al área.
•	El horario será definido por la administración.
•	Quien haga mal uso o cause deterioro de las instalaciones se hará responsable de los
•	costos económicos que conllevan las reparaciones.
•	Queda prohibido el consumo de cigarrillos, bebidas alcohólicas y sustancias
•	psicoactivas al interior.
•	Se prohíbe la realización de eventos sociales, para dicha función existe el salón social.
•	Los vigilantes entregarán el salón de jóvenes en óptimas condiciones y en las mismas deberá ser entregado por parte del propietario.
•	Los daños ocasionados deberán ser asumidos por el propietario o residente que separe el cupo.
•	Solo se podrá usar por un máximo de 60 minutos, si no hay reserva siguiente se podrá usar otros 60 minutos más.
•	No se puede disponer las mesas de billar como mesas para comida, para sentarse sobre ellas, bebidas o elementos que dañen o deterioren las mesas, cualquier daño deberá ser asumido por el residente o propietario.
•	Los jóvenes menores de 14 años deberán estar acompañados del adulto responsable que reservó el espacio.
•	No se puede disponer las mesas de juegos como mesas para comida, para sentarse
•	sobre ellas, para las bebidas o elementos que dañen o deterioren las mesas, cualquier daño deberá ser asumido por el residente o propietario.
•	Se podrá escuchar y hacer uso de dispositivos de sonido en un volumen moderado 
`, `*BBQ:*

El BBQ abrirá sus puertas desde las 10:00 am y deberá ser terminada a las 12:00 am. (sin excepción) viernes, sábados y domingos si el día siguiente es festivo. Los demás días deberá finalizar a las 10 pm del mismo día.  

•	La reserva de este espacio se debe hacer, sin excepción PH en Línea y confirmarse con el comprobante del pago enviado o presentado en la administración. El préstamo de esta zona estará sujeta a la disponibilidad que muestre el aplicativo.

•	El uso del BBQ tendrá un valor de 40.000 COP, una tasa de aseo de 20.000 COP que se deberán dejar en administración días antes de la actividad. Es de tener en cuenta que la tasa de aseo es barrer, limpiar el asador y trapear, deberá ser entregado sin adornos, comida, basuras y organizado.
•	Para el uso del BBQ se deberá estar al día en los pagos de administración.
•	El alquiler del BBQ solo incluye la zona respectiva y numero de BBQ, no se deberán usar ni las sillas, ni el espacio de la sala libre, la cual se encuentra al lado posterior, ya que hace parte de la zona común y es de libre tránsito.
•	El aforo permitido por cada BBQ será de 15 personas como máximo por cada uno.
•	El BBQ o asador se entregará inventariado y el usuario deberá devolver todos los implementos en el mismo estado que los recibe. (Sin carbón)
•	No se permite el ingreso de mascotas y animales al área
•	Cualquier daño ocasionado deberá ser cancelado por el usuario responsable.
•	Si un copropietario y/o residente hiciere una reserva y no utilizare el BBQ en la fecha reservada, el valor de alquiler respectivo no se le devolverá, exceptuando los casos de fuerza mayor debidamente comprobados.
•	Quien reserve el BBQ en ningún caso lo podrá subarrendar, si lo hiciere, se sancionará con un año de suspensión del servicio de alquiler y una multa grave.
•	Los equipos de sonido o la música a utilizar en la reunión deberán estar a un volumen moderado, para que no perturbe la tranquilidad de los demás residentes, además debe estar siempre presente el propietario o residente que lo reservo.
•	El BBQ no será prestado para reuniones de tipo político y étnico de ninguna índole, solo se permitirán actos que no atenten contra la moral y las buenas costumbres de los residentes.
•	La administración y el Consejo de Administración se reservan el derecho de prestar el BBQ a quienes hayan incurrido en conductas escandalosas o no hayan cumplido con el Reglamento.
•	El cuidado y devolución en buen estado de los implementos que se encuentran en el BBQ será del propietario o residente que alquiló, también será el responsable de pagar cualquier daño o ausencia de elementos que se presente.
•	Se deberá estar al día en la cuota de administración.`
                    , `
•	*PRECAUCIONES*
•	*ANTES:*

•	Compruebe que no existan escapes, agrietamientos o fragilidad en la parrilla.
•	Mantenga los niños lejos de las parillas, es una buena idea establecer una zona de seguridad e informar a los niños que no pueden pasar esos límites.
•	Tenga presente la ubicación del extintor más cercano. 

•	*DURANTE:*
•	Utilice los cubiertos especiales de BBQ (mango largo).
•	Nunca utilice líquidos inflamables para empezar o refrescar el fuego. 
•	Guarde las bebidas alcohólicas lejos de la parrilla, ya que son inflamables.
•	Nunca deje la parrilla desatendida.  

•	*SE PROHÍBE:*

•	El uso del BBQ para eventos en los cuales se cobre ingreso. 
•	El alquiler del BBQ a cualquier residente que tenga una deuda pendiente con la copropiedad y/o tienen sanciones pendientes por convivencia.
•	Que los invitados deambulen por las zonas comunes de la copropiedad.  
•	La presencia de orquestas, o el uso de sistemas o plantas de sonido de cualquier índole que superen los niveles de ruido máximos permitidos establecidos por la ley. 
•	No se permite ningún tipo de decoración en ninguna zona del BBQ
•	Es obligatorio el cuidado de los elementos que hacen parte del BBQ, por los usuarios que reservaron el espacio; la persona asignada por la administración para el control de ingreso y comportamiento en esta área tiene la facultad y obligación de exigir el estricto cumplimiento de este reglamento y debe notificar a la administración oportunamente toda irregularidad que se presente.  
`, `*GIMNASIO*
El gimnasio será 24 horas. Se cerrará todos los días 2 horas (1:00 pm a 3:00 pm) para realizar aseo general, y recordando que este espacio es exclusivo para residentes o propietarios. 


•	Se deberá tener conductas responsables que no perturben la tranquilidad de los demás usuarios.
•	Se deberá ingresar con ropa adecuada.
•	No se permite el ingreso de mascotas y animales al área.
•	Los daños ocasionados será responsabilidad del propietario o residentes el arreglo o compra del elemento afectado.
•	Para ingresar deberás registrarte en portería y dejar el carnet de uso de zonas comunes.
•	Las máquinas no pueden utilizarse por más de 45 minutos consecutivos.
•	Las máquinas deben dejarse en perfecto estado de aseo una vez se hayan utilizado.
•	El gimnasio es de uso exclusivo para residentes de URBANIZACIÓN ROTERDAM P.H.
•	Solo se permite el consumo de agua o bebidas hidratantes. El consumo de alimentos sólidos y cualquier otra bebida dentro del perímetro demandado para este servicio están prohibidos.
•	Personas en estado de embriaguez no se permitirá su entrada.
•	Todos los reproductores de música personales deben utilizarse única y exclusivamente con audífonos.
•	Usar paño para uso personal y limpiar el sudor.
•	Los equipos no podrán ser utilizados fuera del área del gimnasio.
•	Los equipos no se podrán alquilar.
•	Los daños causados por el uso indebido de alguno de los equipos de dotación del gimnasio deberán ser pagados por quien los haya generado.
•	Las lesiones ocasionadas por una práctica incorrecta de ejercicios serán responsabilidad de cada usuario.
•	En los horarios que esté el personal de mantenimiento o de aseo no se podrá hacer uso de la maquinaria o zona de limpieza hasta que finalice, es importante estos procedimientos en el gimnasio con el fin de mantener la zona en óptimas condiciones para todos los residentes. Se les pide a los residentes que hagan uso de este espacio el correcto depósito de las basuras o desperdicios.`
                    , `*PISCINA*

Las piscina abrirán sus puertas de martes, jueves, sábados y domingos de 10:00 am a 5:00 pm, miércoles y  viernes desde la 1:00 pm hasta las 8.00 pm y festivos de 10:00 am a 5:00 pm; los lunes se cierra por mantenimiento o el martes si el lunes es festivo. 


•	Es requisito estar a Paz y Salvo con la administración para hacer uso de la piscina.
•	Se debe presentar al ingresar el carnet al encargado de la piscina, siendo este personal e intransferible o el ingreso por medios tecnológicos que sean implementados por la Unidad como biométrico, dactilar, chip, entre otros.
•	Para ingresar se debe usar el lava pies y la ducha. De caso contrario no podrá ingresar y se deberá retirar.
•	Es indispensable saber nadar, en caso contrario debe estar acompañado en la piscina por un adulto responsable.
•	El ingreso de menores de edad es bajo responsabilidad de los padres.
•	Los menores de 12 años serán admitidos sólo si lo hacen en compañía de sus padres o un adulto.
•	Es obligatorio a los bañistas, el uso de traje de baño de lycra o telas sintéticas y gorro de lycra o tela sintética. No será obligatorio el gorro en la zona de turco.
•	No se podrá transitar con calzado que esté sucio o pueda contaminar tanto la piscina como los alrededores.
•	No se deberá ingresar con ropa sucia o sudada.
•	Prohibido el uso de bronceadores o cremas dentro de la piscina.
•	No ingresan mascotas y animales al área de la piscina.
•	No se permite el ingreso a personas en estado de embriaguez o bajo efectos de sustancias alucinógenas, tampoco el ingreso de comidas o bebidas ni el consumo de cigarrillo
•	No correr en los alrededores de la piscina, áreas de duchas y servicios sanitarios.
•	Se evitará el uso de malas palabras, lenguaje obsceno, o conducta indeseable; los juegos bruscos, entradas violentas en la piscina, o cualquier actividad física que atente contra la seguridad de los demás
•	Evitar ensuciar el agua con prácticas antihigiénicas como escupir, sonarse, orinar o contaminar de alguna forma el agua de la piscina.
•	No se debe ingresar materiales de vidrio o elementos corto punzantes.
•	Prohibido el uso de balones, flotadores de icopor o fibras similares que por su tamaño o uso obstaculicen o molesten a los demás bañistas.
•	Prohibido el ingreso a la piscina de personas con heridas, laceraciones o afecciones a la piel, vías respiratorias o enfermedades infectocontagiosas como gripe, conjuntivitis, eruptivas u otras.
•	No se permite nadar en la noche sin luz o cuando la piscina está cerrada.
•	Se prohíbe el ingreso de bicicletas, patines o elementos similares.
•	Se prohíbe el tránsito fuera de las zonas húmedas con prendas mojadas, destilando agua o sin camisa, especialmente en ascensores.`
                    , `
*SALÓN SOCIAL*

El salón social será reservado por el residente del apartamento con mínimo cinco (5) días de anterioridad al evento por la plataforma de PH en línea, observando las siguientes condiciones:


•	Para recibir las llaves del Salón se debe tener cancelado el valor de préstamo de este, al igual que estar a Paz y Salvo con la Administración por todo concepto.
•	El cupo máximo para el Salón Social será de 60 personas.
•	El uso del salón tendrá un valor de 150.000 COP, tasa de aseo de un valor de 30.000 COP y un depósito de 100.000 COP. Es de tener en cuenta que la tasa de aseo es barrer, limpiar mesas, sillas y trapear, deberá ser entregado sin adornos, comida y organizado.
•	La reunión que se haga en él podrá iniciar desde las 10:00 am y debe ser terminada a la 1:00 am. (sin excepción) viernes, sábados y domingos si el día siguiente es festivo. Los demás días deberá finalizar a las 10 pm del mismo día.
•	El salón se entregará inventariado y el usuario deberá devolver todos los implementos en el mismo estado que los recibió.
•	Cualquier daño ocasionado deberá ser cancelado por el usuario responsable.
•	No se podrán perforar las paredes o utilizar silicona, cintas o cualquier tipo de pegante que dañe la pintura, en caso de realizarlo se realizará pintura de la pared completa y será cargada a cargo del residente responsable en la cuenta de administración.
•	No se podrán usar aleluyas o confetis de papel tipo globo o celofán de colores fuertes, toda vez que manchan irreversiblemente el piso, en caso de utilizarlo y manchar el piso su reparación incluso reemplazo de piezas en caso de ser necesario serán por cuenta del responsable de la reserva.
•	El material del piso de los salones sociales es delicado y muy susceptible al derramamiento de líquidos, especialmente si son de color, por lo cual se solicita que en caso de derramamientos de líquidos se proceda a limpiar inmediatamente para evitar manchas. En caso de presentarse manchas su reparación e incluso su reemplazo serán de responsabilidad del residente responsable.
•	Los equipos de sonido o la música para utilizar en la reunión deberán estar a un volumen moderado, para que no perturbe la tranquilidad de los demás residentes, además debe estar siempre presente el propietario o residente que lo reservo.
•	El salón no será prestado para reuniones de tipo político y étnico de ninguna índole, solo se permitirán actos que no atenten contra la moral y las buenas costumbres de los residentes.
•	No se permite el ingreso de mascotas y animales al área.
•	Si un copropietario y/o residente hiciere una reserva y no utilizare el salón social en la fecha reservada, el valor de alquiler respectivo no se le devolverá la cuota, exceptuando los casos de fuerza mayor debidamente comprobados.
•	El salón social no podrá ser utilizado como sala de velación.
•	Debe permanecer cerrado si no está en uso.`
                    , `
*CANCHA*

La cancha sintética abrirá sus puertas  8:00 Am a 10:00 Pm de domingo a jueves, los viernes y sábado hasta las 11 pm y deberá ser reservadas por los residentes de la copropiedad en portería con turnos de uso de máximo 1 hora. 


•	La cancha es de uso exclusivo de los residentes, quien ingrese más de 2 invitados tendrá que hacer un pago previo fijado por el Consejo de Administración y la Administración para cada vigencia; dichos invitados deberán cumplir con el registro exigido por administración y estar acompañados en todo momento por el residente responsable.
•	Cualquier daño o avería en la cancha sintética será responsabilidad del usuario y será facturado al inmueble cuyos residentes generaron la reserva del espacio, es importante validar con vigilancia el estado de esta al momento del recibo y la entrega. 
•	Solo está permitido el uso de calzado deportivo apropiado para este espacio, como es el teniguayo; bajo ninguna causal está autorizado jugar con guayos de tache amplios u otro tipo de calzado.
•	Se debe jugar con ropa deportiva adecuada, está prohibido jugar sin camiseta. 
•	Solo se permite el consumo de agua o bebidas hidratantes. Está prohibido el consumo de bebidas embriagantes y alimentos en este espacio, así como el uso del mismo bajo efectos de sustancias alucinógenas.	
•	Está prohibido jugar bajos los efectos del alcohol o narcóticos, en caso de identificarse esta conducta se negará acceso a la cancha. 
•	Los jugadores deberán demostrar un comportamiento de respeto en todo el juego, no están permitidos los juegos bruscos o el uso de lenguaje soez en este espacio; esto será causal de cancelación de la reserva y no habrá devolución de dineros en caso de haber pagado por invitados. 	
•	El número máximo de jugadores será de 10 personas, lo cual corresponde a 5 personas por equipo contando entre estas el arquero. 
•	No está permitido el ingreso de ningún dispositivo de sonido a las canchas.

*SANCIONES POR INCUMPLIMIENTO*

•	Retiro de la cancha y cancelación de las reservas.
•	Multa, según lo dispuesto en el manual de convivencia del valor equivalente a una cuota de administración o suspensión de derecho a la reserva para los residentes hasta por 3 meses. 
•	Los apartamentos en mora de administración no podrán hacer uso del espacio; si de otro apartamento se hiciere la reserva para favorecer a los residentes de un apartamento en mora, se aplicará sanción de multa o suspensión de derecho a la reserva para los residentes hasta por 3 meses.
`]);
                break;
            case '18':
                await flowDynamic(`*Información MUDANZA*
1. Autorización: Si eres inquilino, la agencia o propietario debe enviar la carta de autorización para ingreso o salida.
2. Depósito: Se requiere un depósito de $150,000 en efectivo, directamente en la administración, mínimo 5 días hábiles antes de la mudanza.
3. Programación del Espacio: La disponibilidad es de 2 horas por apartamento.

*Horarios de Mudanza:*
   - Lunes a Viernes: 8:00 am a 5:00 pm
   - Sábados: 8:00 am a 2:00 pm
*Pasos para realizar la MUDANZA*
- Solicitar autorización: Pide la autorización de mudanza al propietario o a la agencia del inmueble.
- Estar a paz y salvo con la administración 
Nota: Recuerda que el envío del correo con la inmobiliaria debe realizarse con 3 días de antelación, al igual que la programación del día de la mudanza.
- Notificar a la Administración: Envía la notificación al correo ROTERDAMPH@GMAIL.COM, mínimo 3 días antes de la mudanza.
- Registro de Ingreso: Si es inquilino nuevo, por favor adjuntar el link del censo poblacional:
https://forms.gle/y6Kgvie5nzKHYhB96 

Nota: Para solicitar la devolución del depósito deberá haber llenado el censo poblacional
`);
                break;
            case '19':
                await flowDynamic(`Deben enviar un correo roterdamph@gmail.com con la siguiente información para solicitar las evidencias.
-	Nombre Completo
-	APARTAMENTO
`);
                break;
            case '20':
                await flowDynamic(`Por favor enviar un correo a roterdamph@gmail.com, con el número de apartamento, la situación presentada en la copropiedad y la evidencia de dicho suceso.`);
                break;
            case '21':
                await flowDynamic(`Por favor enviar un correo a roterdamph@gmail.com, con el número de apartamento, la novedad vista por su parte y la evidencia de dicho daño.`);
                break;
            case '22':
                await flowDynamic(`3017410741 Asistente administrativa `);
                break;
            case '23':
                await flowDynamic(`3103282775`);
                break;
            case '24':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        setLastFlow(ctx, flowRoterdam);
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowRoterdam;

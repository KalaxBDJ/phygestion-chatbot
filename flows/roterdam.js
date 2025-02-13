const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');


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
        '*.* .',
        

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
                await flowDynamic(`Si paga después de la fecha de vencimiento de la factura el pago se verá reflejado al siguiente mes y se generarán intereses.`);
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
                await flowDynamic(`*SALON SOCIAL*
1.Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Urbanizacion Roterdam Ph Av 26 52140” EN LA CASILLA DE REFERENCIA NUMERO DE APTO
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00010326&origen=buscar&bancaEmpresarial=false&login=temporal 

2.Directamente en oficina bancario AV VILLAS cuenta corriente
512171596 referencia número del apartamento.

*BBQ*
1.Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Urbanizacion Roterdam Ph Av 26 52140” EN LA CASILLA DE REFERENCIA NUMERO DE APTO
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00010326&origen=buscar&bancaEmpresarial=false&login=temporal 

2.Directamente en oficina bancario AV VILLAS cuenta corriente
512171596 referencia número del apartamento.

*CANCHA*
1.Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Urbanizacion Roterdam Ph Av 26 52140” EN LA CASILLA DE REFERENCIA NUMERO DE APTO
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00010326&origen=buscar&bancaEmpresarial=false&login=temporal 

2.Directamente en oficina bancario AV VILLAS cuenta corriente
512171596 referencia número del apartamento.
`);
                break;
            case '9':
                await flowDynamic(`Deben enviar un correo a roterdamph@gmail.com, con la siguiente información para solicitar el PAZ Y SALVO. Deberá tener en cuenta que el PAZ Y SALVO después de solicitarlo se le remitirá cuando hayan cumplido 3 días hábiles.
-	Nombre Completo
-	Número de Celda de Parqueadero
-	Número de Cuarto Útil
-	Cédula
`);
                break;
            case '10':
                await flowDynamic(`*HORARIO GIMNASIO*
24HRS
Se cierra el gimnasio por 2 horas, de 2:00 PM a 4:00 PM, para limpieza de la misma.

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

*HORARIO TEATRO*
Próximamente
`);
                break;
            case '11':
                await flowDynamic(`*HORARIO ADMINISTRACIÓN*
*LUNES MIERCOLES*,
8:00 AM A 8:00 PM 
*MARTES, JUEVES Y VIERNES*
8:00 AM A 1:00 PM Y 2:00 PM 5:00 PM 
*SABADO (CADA 15 DÍAS)*
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
                await flowDynamic(`*Salón social de adultos reserva y entrega*: 
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

*Salón social de jovenes reserva y entrega*: 
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
`);
                break;
            case '18':
                await flowDynamic(`1. Autorización: Si eres inquilino, la agencia o propietario debe enviar la carta de autorización para ingreso o salida.
2. Depósito: Se requiere un depósito de $150,000 en efectivo, directamente en la administración, mínimo 5 días hábiles antes de la mudanza.
3. Programación del Espacio: La disponibilidad es de 2 horas por apartamento.

Horarios de Mudanza:
   - Lunes a Viernes: 8:00 am a 5:00 pm
   - Sábados: 8:00 am a 2:00 pm

Pasos para realizar la MUDANZA 
- Solicitar autorización: Pide la autorización de mudanza al propietario o a la agencia del inmueble.
- Estar a paz y salvo con la administración 

Nota: Recuerda que el envío del correo con la inmobiliaria debe realizarse con 3 días de antelación, al igual que la programación del día de la mudanza.
- Notificar a la Administración: Envía la notificación al correo roterdamph@gmail.com, mínimo 3 días antes de la mudanza.
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
            case '20':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        lastFlow = flowRoterdam;
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowRoterdam;
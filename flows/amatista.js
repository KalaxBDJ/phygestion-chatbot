const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');
const { setLastFlow } = require('./last-flow');

const flowAmatista = addKeyword(['AMATISTA'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de AMATISTA! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        // '*Estados de Cuenta:* 📑',
        // '*1.* Consulta de estados de cuenta.',
        // '*2.* Reclamación de estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        // '*3.* Solicitud de factura.',
        // '*4.* Reportar novedad de facturación.',
        '*4.* Día de pago.',
        '*5.* Soporte de meses anteriores.',
        '*6.* Revisión estados de cuenta.',
        '*7.* Enviar soporte de pago mes actual.',
        '*8.* Medios de pago administración.',
        '*9.* Medios de pago otros servicios.',


        '\nℹ️ *Información sobre ENDOSOS*',
        '*10.* Solicitar el endoso del seguro para su crédito hipotecario.',
        '*11.* Póliza de seguro LISBOA PH.',
        '*12.* Instructivo para solicitar el seguro.',

        '\n*Información General:* ℹ️',
        '*13.* Paz y salvo.',
        '*14.* Información de mudanza.',
        '*15.* Información Autorización de reformas en bienes privados.',
        '*16.* Horarios de atención administrativa.',
        '*17.* Horarios de zonas comunes.',
        '*18.* Enviar Reglamento de Propiedad Horizontal.',
        '*19.* Enviar Manual de Convivencia.',
        '*20.* Diligenciamiento censo poblacional.',
        '*21.* Radicar derechos de petición.',
        '*22.* Reservar salón social.',
        '*23.* PQRSF.',
        '*24.* Reportar novedades locativas.',
        '*25.* Contactar con un asesor.',
        '*26.* Contacto porteria.',

        '\n*Opciones de Navegación:* 🧭',
        '*27.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
        const option = ctx.body.trim();
        switch (option) {
//             case '1':
//                 await flowDynamic(`Consulta tus estados de cuenta aquí: https://www.phenlinea.info/ 📊

// Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtjToG-BGmGgxJq8A?e=1KjneI `);
//                 break;
            // case '2':
            //     await flowDynamic('Realiza la reclamación de tus estados de cuenta aquí: https://forms.gle/r2nrjaACALUCTuzH9 🕵️‍♂️');
            //     break;
//             case '3':
//                 await flowDynamic(`Solicita tu factura aquí: https://www.phenlinea.info/ 🧾

// Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
//                 break;
            case '4':
                await flowDynamic(`⏳ Si paga después de la fecha de vencimiento de la factura, el pago se verá reflejado al siguiente mes.`);
                    break;
            case '5':
                await flowDynamic(
                    `📧 Por favor enviar un correo a admon.amatista1@gmail.com, con el número de apartamento y el día de pago que se efectuó.`);
                break;
            case '6':
                await flowDynamic(
                    `📧 Por favor enviar un correo a admon.amatista1@gmail.com, con el número de apartamento. Especificar la novedad de facturación para la debida corrección, si es el caso.`);
                break;
            case '7':
                await flowDynamic(
                    `📧 Por favor enviar un correo a admon.amatista1@gmail.com, con el número de apartamento y el día de pago que se efectuó.`);
                break;
            case '8':
                await flowDynamic(`💳 MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN

1.🔗 Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “EDIFICIO AMATISTA LIFE STYLE P” en la casilla de referencia número de apto:
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00023598&origen=buscar

2.🏦 Directamente en oficina bancaria BANCO AV VILLAS cuenta de ahorros
💳 503180838 referencia: número del apartamento.

3.💵 Convenio Efecty 23598 referencia: número del apartamento.`);
                break;
            case '9':
                await flowDynamic(
                    `🏢 SALÓN SOCIAL

1.🔗 Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “EDIFICIO AMATISTA LIFE STYLE P” en la casilla de referencia número de apto:
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00023598&origen=buscar

2.🏦 Directamente en oficina bancaria BANCO AV VILLAS cuenta de ahorros
💳 503180838 referencia: número del apartamento.

3.💵 Convenio Efecty 23598 referencia: número del apartamento.`);
                break;
            case '10':
                await flowDynamic(
                    `📧 Solicite el endoso del seguro para su crédito hipotecario al siguiente correo: endososvivaseguros@gmail.com`);
                break;
            case '11':
                await flowDynamic(
                    `🛡️ Póliza de seguro LISBOA PH: https://drive.google.com/file/d/11lG0VVIo2mYy7PQexBe0JXIrc1OpDRck/view?usp=drive_link`);
                break;
            case '12':
                await flowDynamic(
                    `📄 Instructivo para solicitar el seguro: https://drive.google.com/file/d/1X906-vCTAlYIB9gQGm5TRrIldGdTPBq_/view?usp=drive_link`);
                break;
            case '13':
                await flowDynamic(
                    `📧 Deben enviar un correo a admon.amatista1@gmail.com con la siguiente información para solicitar el PAZ Y SALVO.
🗓️ Deberá tener en cuenta que el PAZ Y SALVO, después de solicitarlo, se le remitirá cuando hayan cumplido 3 días hábiles.

📝 Información requerida:

-👤 Nombre Completo
-🚗 Número de Celda de Parqueadero
-🏠 Número de Cuarto Útil
-🆔 Cédula
-💵 Soporte de pago del mes en curso`);
                break;
            case '14':
                await flowDynamic(
                    `🚛 *INFORMACIÓN DE MUDANZAS*

📋 En este link podrá ver los deberes y el debido protocolo para el movimiento de mudanza:
https://docs.google.com/document/d/1rRy0ItaQYecHyleD2d0AtczPVH2v51vJ/edit?usp=drive_link&ouid=100849039748434120101&rtpof=true&sd=true

✉️ Después de diligenciar el formato deberá enviarlo al correo de la copropiedad: admon.amatista1@gmail.com.`);
                break;
            case '15':
                await flowDynamic(
                    `🏠 INFORMACIONES DE LAS REFORMAS Y/O ADECUACIONES EN LOS APARTAMENTOS
https://docs.google.com/document/d/1dl0yeWULxQ_lMBUOonDQP3R2bEsnLaL6/edit?usp=drive_link&ouid=100849039748434120101&rtpof=true&sd=true`);
                break;
            case '16':
                await flowDynamic(
                    `🕒 HORARIO ADMINISTRACIÓN
📆 LUNES, MIÉRCOLES y VIERNES
🕘 9:00 AM A 1:00 PM`);
                break;
            case '17':
                await flowDynamic(
                    `🏊‍♂️ HORARIO PISCINA
📅 Martes a Domingo (incluye festivos)
🕘 9:00 AM A 8:00 PM
🚧 LUNES DE MANTENIMIENTO

🔔 NOTA: Los días lunes se realiza la limpieza profunda de la piscina, si el lunes es festivo, esta limpieza se realizará el martes.

🧖‍♂️ HORARIO TURCO Y SAUNA
📅 Martes a Viernes
🕘 9:00 AM A 3:00 PM
📅 Sábado, Domingo y festivo
🕘 9:00 AM A 12:00 PM

🔔 NOTA: El turco se extiende por periodos de una hora máximo.

🏢 HORARIO SALÓN SOCIAL
📅 Domingo a Viernes
🕘 9:00 AM A 10:00 PM
📅 Sábado
🕘 9:00 AM A 11:59 PM
📅 Domingo a festivo
🕘 9:00 AM A 11:59 PM

🎠 HORARIO PARQUE INFANTIL
📅 Lunes a Domingo (Incluye festivos)
🕗 8:00 AM A 10:00 PM`);
                break;
            case '18':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/file/d/1umV1T6sYJCFu0yIIub-SZMFmeDxeSwGL/view?usp=drive_link 📘');
                break;
            case '19':
                await flowDynamic('Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/150FsEME7tvpCkoCppHYUCs-87DRAMgoL/view?usp=drive_link 📘')
                break;
            case '20':
                await flowDynamic('Diligencia el censo poblacional aquí: https://forms.gle/tZvuNgz6Zr5sx7jX8 📝');
                break;
            case '21':
                await flowDynamic(`📧 Por favor enviar el derecho de petición al siguiente correo admon.amatista1@gmail.com`);
                break;
            case '22':
                await flowDynamic(
                    `🎉 RESERVA Y COSTO DEL SALÓN SOCIAL
📋* Pasos para Reservar*

* Realiza tu reserva a través de este enlace 👉 https://form.jotform.com/241896093748068

* Realiza el pago de *150.000 pesos* por el uso del salón social una semana antes del evento. El valor debe ser consignado a la cuenta de la copropiedad.
* Envía el soporte de pago al correo electrónico correspondiente 📧.
* *El día del evento*, deposita *150.000 pesos en efectivo* en portería como garantía por si ocurre alguna novedad.

📅 *Entrega del Salón*
* *Domingo a Viernes*: El salón se entrega el día del evento a partir de las *9:00 am* y debe desocuparse antes de las 10:00 pm.
* *Sábados*: El horario se extiende hasta las *11:59 pm*.
* *Excepción*: Los domingos que preceden un día festivo tendrán horario extendido hasta las *11:59 pm* también. 🎉

⚠️ *Condiciones Importantes*:

🏠 *El apartamento debe estar al día en las cuotas de administración* para poder hacer uso del salón.

🧹 *El salón se entrega limpio* y debe devolverse en las mismas condiciones.`);
                break;
            case '23':
                await flowDynamic(`📧 Por favor enviar un correo a admon.amatista1@gmail.com, con el número de apartamento, la situación presentada en la copropiedad y la evidencia de dicho suceso.`);
                break;
            case '24':
                await flowDynamic('📧 Por favor enviar un correo a admon.amatista1@gmail.com, con el número de apartamento, la novedad vista por su parte y la evidencia de dicho daño.');
                break;
            case '25':
                await flowDynamic('Te puedes contactar al número: 300 699 69 27  - Marco Salazar administrador delegado📞');
                break;
            case '26':
                await flowDynamic('Te puedes contactar al número: 304 232 26 25 📞');
                break;
            case '27':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        setLastFlow(ctx, flowAmatista);
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowAmatista;

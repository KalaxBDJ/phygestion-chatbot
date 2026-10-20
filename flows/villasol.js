const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');
const { setLastFlow } = require('./last-flow');


const flowVillasol = addKeyword(['VILLASOL'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de Villasol! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '🏡 *Opciones de Villasol:*',

        '\n📑 *Estados de Cuenta y Facturación:*',
        '*1.* Consulta tus estados de cuenta.',
        '*2.* Solicitud de factura.',
        '*3.* ¿Qué pasa si pago después de la fecha de vencimiento?',
        '*4.* Solicitud de soporte de pago de meses anteriores (correo).',
        '*5.* Corrección de facturación (correo).',
        '*6.* Enviar soporte de pago del mes actual.',
        '*7.* Medios de pago administración.',
        '*8.* Medios de pago otros servicios (TAG, fichos, BBQ, etc.`).',

        '\n📃 *Certificados y Documentos:*',
        '*9.* Solicitud de paz y salvo.',
        '*12.* Reglamento de Propiedad Horizontal (Drive).',
        '*13.* Manual de Convivencia (Drive).',
        '*14.* Diligenciamiento censo poblacional.',
        '*15.* Radicar derecho de petición (correo).',

        '\n🕒 *Horarios y Servicios Comunes:*',
        '*10.* Horarios de zonas comunes (piscinas, gimnasio, BBQ, etc.`).',
        '*11.* Horarios de atención en administración.',
        '*17.* Normas para mudanzas y reformas.',
        '*18.* Información sobre fichos de piscina.',
        '*16.* Reservas y costos del salón social y BBQ.',

        '\n🛠️ *Reportes y Novedades:*',
        '*19.* Información sanciones de parqueadero.',
        '*20.* PQRSF.',
        '*21.* Reporte de daños locativos.',

        '\n📞 *Contactos Directos:*',
        '*22.* Asesor',
        '*23.* Portería.',
        '*24.* Canal y comunidad Villasol.',

        '\n🧭 *Navegación:*',
        '*25.* Volver al menú principal.',
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

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`)
                break;
            case '3':
                await flowDynamic(`Si paga después de la fecha de vencimiento de la factura el pago se verá reflejado al siguiente mes.`)
                break;
            case '4':
                await flowDynamic(`Por favor enviar un correo a admonvillasol@gmail.com , con el número de apartamento y el mes de pago que se efectuó.`)
                break;
            case '5':
                await flowDynamic(`Por favor enviar un correo a admonvillasol@gmail.com, con el número de apartamento. Especificar la novedad de facturación para la debida corrección si es el caso.`)
                break;
            case '6':
                await flowDynamic(`Por favor enviar un correo a admonvillasol@gmail.com, con el número de apartamento y el día de pago que se efectuó.`)
                break;
            case '7':
                await flowDynamic(`*MEDIOS DE PAGO ADMINISTRACIÓN*

💻 *OPCIÓN 1 – PAGO EN LÍNEA POR JELPIT*
🔗 PAGO ADMINISTRACIÓN O ZONAS COMUNES:
https://web-conjuntos.jelpit.com/pagar-mi-administracion#/?id=6aa45e77ff18e91262979a3e

🏦 *OPCIÓN 2 – PAGO PRESENCIAL EN BANCO*
En caso de no realizar el pago por medio del enlace de PSE/JELPIT, también puede dirigirse a un banco en convenio con Davivienda y realizar el pago utilizando:
🔢 Convenio: 1669118
🏠 Referencia: número del apartamento

Por favor, al momento de realizar el pago, verifique que la referencia corresponda al número de su apartamento, para facilitar la correcta identificación y aplicación del pago.`
                )
                break;
            case '8':
                await flowDynamic(`🔗 *PAGO ADMINISTRACIÓN O ZONAS COMUNES:*
https://web-conjuntos.jelpit.com/pagar-mi-administracion#/?id=6aa45e77ff18e91262979a3e

📌 *REFERENCIAS DE PAGO:*
🏠 Administración: ingresar el número del apartamento.
🏛️ Salón Social: 2222
🔥 BBQ: 3333
🏊 Fichos de piscina: 4444
🚗 TAG: 5555

✅ El pago por medio de JELPIT no genera ningún cobro adicional.
🏦 Puede realizar el pago desde diferentes entidades bancarias.

📩 Una vez realizado el pago, solicitamos enviar el comprobante generado por JELPIT al correo *admonvillasol@gmail.com*, el cual será enviado a su correo electrónico.`
                )
                break;
            case '9':
                await flowDynamic(`Deben enviar un correo a admonvillasol@gmail.com con la siguiente información para solicitar el PAZ Y SALVO. Deberá tener en cuenta que el PAZ Y SALVO después de solicitarlo se le remitirá cuando hayan cumplido 3 días hábiles.
-	Nombre Completo
-	Número de Celda de Parqueadero (si se tiene)
-	Cédula
-	Enviar el último soporte de pago`
                )
                break;
            case '10':
                await flowDynamic(`*HORARIO TURCO*
Martes a domingo desde las 10:00 hasta las 5:30 PM
Lunes no se abre

*HORARIOS PISCINA #1*
*LUNES:* 🚫 Cerrada por mantenimiento, si es festivo se pasa para el día martes.
*MARTES Y JUEVES:* De 10:00 a.m. a 1:00 p.m. y de 1:30 p.m. a 5:30 p.m.
*MIÉRCOLES:* 🚫 Cerrada
*VIERNES:* De 9:00 a.m. a 3:00 p.m.
*SÁBADO, DOMINGO Y FESTIVOS:* De 9:00 a.m. a 3:30 p.m.

*HORARIOS PISCINA #2*
*LUNES Y MIÉRCOLES:* De 10:00 a.m. a 1:00 p.m. y de 1:30 p.m. a 5:30 p.m.
*MARTES:* 🚫 Cerrada por mantenimiento general, si es festivo se pasa para el día miércoles.
*JUEVES:* 🚫 Cerrada
*VIERNES:* De 1:00 p.m. a 7:00 p.m.
*SÁBADO, DOMINGO Y FESTIVOS:* De 11:30 a.m. a 7:00 p.m.

*HORARIO SALON SOCIAL* 
Domingo a jueves: 8:00 AM a 10:30 PM
Viernes y sábado: 8:00 AM a 12:00 de la medianoche

*SE ENTREGA EN PORTERIA* - No se entrega antes de las 8:00 am

*HORARIO BBQ* 
Domingo a jueves: 8:00 AM a 10:30 PM
Viernes y sábado: 8:00 AM a 12:00 de la medianoche

*SE ENTREGA EN PORTERIA* - No se entrega antes de las 8:00 am

*HORARIO CANCHA* 
Todos los días desde las
9:00 AM A 10:00 PM 

*HORARIO GIMNASIO*
Todos los días desde las
5:00 AM A 10:00 PM – 12:00 A 1:00 SE HACE ASEO`
                )
                break;
            case '11':
                await flowDynamic(`*HORARIO ADMINISTRACIÓN*
*LUNES, MARTES, JUEVES Y VIERNES*
8:00 AM A 1:00 PM 2:00 PM A 5:00 PM
*MIERCOLES*
12:00 PM A 8:00 PM 
*SABADO*
8:00 AM A 12:00 PM

Para el *registro facial*:
*LUNES A VIERNES* 
9:00 AM a 1:00 PM y de 2:00 PM a 4:00 PM
*SABADO* 
9:00AM A 11:00AM

En la oficina de la administración.`
                )
                break;
            case '12':
                await flowDynamic(`Puede ver el Reglamento de Propiedad Horizontal en el siguiente enlace => https://drive.google.com/file/d/1TRAt8Dww2CkXko8dzwNa6aQNNrqrogOW/view?usp=sharing `)
                break;
            case '13':
                await flowDynamic(`Puede ver el Manual de Convivencia en el siguiente enlace => https://drive.google.com/file/d/1iDfszHqtJszPOG0PP2DYW2uHPt_qB8Wf/view?usp=sharing`)
                break;
            case '14':
                await flowDynamic(`Puedes diligenciar el censo poblacional en el siguiente enlace => https://docs.google.com/forms/d/e/1FAIpQLSdplg4nN_zXnt4hyhQIKdHMzOiRn6BLDA5vmvYTMRKIAlxZQA/viewform?usp=sf_link `)
                break;
            case '15':
                await flowDynamic(`Correo electrónico: admonvillasol@gmail.com`)
                break;
            case '16':
                await flowDynamic(`☀️ *RESERVA BBQ*
Para realizar la reserva del BBQ, tenga en cuenta la siguiente información:

💰 *VALORES DE LA RESERVA*
Valor del alquiler: $150.000
Este valor debe ser transferido a la cuenta de ahorros Davivienda de la copropiedad:
Davivienda:
https://web-conjuntos.jelpit.com/pagar-mi-administracion#/?id=6aa45e77ff18e91262979a3e
REFERENCIA: 3333
COMPARTIR EL COMPROBANTE ENVIADO POR JELPIT

Depósito: $100.000
Debe ser entregado en efectivo en la Administración con mínimo 3 días de anticipación al evento.
El depósito será reembolsable, siempre y cuando no se presenten daños en el BBQ, mobiliario o elementos de la copropiedad.

Tasa de aseo: $30.000
Debe ser entregada en efectivo en la Administración el día del evento.
En caso de no cancelar la tasa de aseo, el espacio deberá ser entregado completamente limpio y en orden, a más tardar a las 12:00 de la medianoche del día del evento o, como máximo, a las 7:00 a. m. del día siguiente.

🪑 *DOTACIÓN DISPONIBLE*
La reserva del BBQ incluye:
1 mesa pequeña
1 tablón
10 sillas

🕐 *HORARIOS DE USO DEL BBQ*
Domingo a jueves: 8:00 a. m. a 10:30 p. m.
Viernes y sábado: 8:00 a. m. a 12:00 de la medianoche.

📅 *DISPONIBILIDAD Y CANCELACIÓN*
Por favor, indíquenos la fecha en la que desea realizar el evento para verificar la disponibilidad del BBQ.
Una vez realizado el pago, si posteriormente se cancela la reserva, no se realizará devolución del dinero. El valor pagado será trasladado como abono a la administración del apartamento.

*Importante:* La reserva quedará confirmada una vez se verifique la disponibilidad y se cumplan las condiciones de pago establecidas.`
                )
                await flowDynamic(`☀️ *RESERVA SALÓN SOCIAL*
Para realizar la reserva del salón social, tenga en cuenta la siguiente información:

💰 *VALORES DE LA RESERVA*
Valor del alquiler: $150.000
Este valor debe ser transferido a la cuenta de ahorros Davivienda de la copropiedad:
Davivienda:
https://web-conjuntos.jelpit.com/pagar-mi-administracion#/?id=6aa45e77ff18e91262979a3e
REFERENCIA PARA EL PAGO: 2222
COMPARTIR EL COMPROBANTE ENVIADO POR JELPIT

Depósito: $100.000
Debe ser entregado en efectivo en Portería con mínimo 3 días de anticipación al evento.
El depósito será reembolsable, siempre y cuando no se presenten daños en el salón, mobiliario o elementos de la copropiedad.

Tasa de aseo: $30.000
Debe ser entregada en efectivo en la Administración el día del evento.
En caso de no cancelar la tasa de aseo, el salón deberá ser entregado completamente limpio y en orden, a más tardar a las 12:00 de la medianoche del día del evento o, como máximo, a las 7:00 a. m. del día siguiente.

🕐 *HORARIOS DE USO*
Domingo a jueves: 8:00 a. m. a 10:30 p. m.
Viernes y sábado: 8:00 a. m. a 12:00 de la medianoche.

🪑 *ELEMENTOS INCLUIDOS*
La reserva del salón social incluye:
4 mesas pequeñas
2 tablones
39 sillas
1 nevera
1 microondas

📅 *DISPONIBILIDAD Y CANCELACIÓN*
Por favor, indíquenos la fecha en la que desea realizar el evento para verificar la disponibilidad del salón social.
Una vez realizado el pago, si posteriormente se cancela la reserva, no se realizará devolución del dinero. El valor pagado será trasladado como abono a la administración del apartamento.

*Importante:* La reserva solo quedará confirmada una vez se verifique la disponibilidad y se cumplan las condiciones de pago establecidas.`
                )
                break;
            case '17':
                await flowDynamic(`*TRASTEOS Y REFORMAS DE APARTAMENTOS:*
NOTA: Se considera trasteo, todo movimiento (entrada o salida) de muebles y enseres, cualquiera que sea su tamaño.
*1.* El horario para trasteos, reformas y adecuaciones donde se utilicen herramientas como taladros, martillos, etc. los cuales perturben la tranquilidad de los residentes, serán permitidos *solo de lunes a viernes de 9:00 a.m. A 4:00 p.m. Los sábados de 9:00 a.m. a 1:00 p.m.* Los domingos y días festivos *NO* están permitidos ningún tipo de estos trabajos y actividades.
*2.* Se debe informar a arrendatarios o compradores del inmueble el horario para la realización de trasteos y cuando se vaya a hacer un trasteo debe informarse por escrito a la administración y con 24 horas de anticipación, para la respectiva verificación.
*3.* Se debe dejar un depósito de 100.000 pesos en efectivo en la oficina de la administración con 1 día de anterioridad.`
                )
                break;
            case '18':
                await flowDynamic(`Para el ingreso a la piscina se debe tener los fichos, para adquirirlos debes hacer el pago de ellos, tienen un *valor de 15.000 pesos* que se transfieren a la cuenta de la copropiedad.`
                )
                break;
            case '19':
                await flowDynamic(`Deben enviar un correo a admonvillasol@gmail.com  con la siguiente información para solicitar las evidencias.
-	Nombre Completo
-	APARTAMENTO`
                )
                break;
            case '20':
                await flowDynamic(`Por favor enviar un correo a admonvillasol@gmail.com, con el número de apartamento, la situación presentada en la copropiedad y la evidencia de dicho suceso.`)
                break;
            case '21':
                await flowDynamic(`Por favor enviar un correo a admonvillasol@gmail.com, con el número de apartamento, la novedad vista por su parte y la evidencia de dicho daño.`)
                break;
            case '22':
                await flowDynamic(`Alexis Jiménez – Asistente administrativo 3194334464`)
                break;
            case '23':
                await flowDynamic(`Portería – 3017774625`)
                break;
            case '24':
                await flowDynamic(`📢 *Canal de WhatsApp Villasol:*
https://whatsapp.com/channel/0029VbA7upuA2pL2kWNXvS3V

👥 *Comunidad de WhatsApp Villasol:*
https://chat.whatsapp.com/DsIz5oJoUP9LIPPPjRrFOI`)
                break;
            case '25':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack();
        }
        setLastFlow(ctx, flowVillasol);
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowVillasol;

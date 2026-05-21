const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');


const flowOporto = addKeyword(['OPORTO'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de OPORTO! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '*Estados de Cuenta:* 📑',
        '*1.* Consulta de estados de cuenta.',
        '*2.* Reclamación de estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        '*3.* Solicitud de factura.',
        '*4.* Reportar novedad de facturación.',
        '*5.* Medios de pago de administración.',
        '*6.* Medios de pago de otros servicios.',
        '*7.* Enviar soporte de pago.',
        '*8.* Enviar soporte de pago de meses anteriores.',
        '*9.* Fecha límite de pago.',

        '\n*Información General:* ℹ️',
        '*10.* Paz y salvo.',
        '*11.* Información de mudanza.',
        '*12.* Horarios de atención administrativa.',
        '*13.* Horarios de zonas comunes.',
        '*14.* Enviar Reglamento de Propiedad Horizontal.',
        '*15.* Enviar Manual de Convivencia.',
        '*16.* Diligenciamiento censo poblacional.',
        '*17.* Radicar derechos de petición.',
        '*18.* Reservar salón social.',
        '*19.* Reservar BBQ.',
        '*20.* PQRSF.',
        '*21.* Información sanciones parqueadero.',
        '*22.* Reportar novedades locativas.',
        '*23.* Contactar con un asesor.',

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
                await flowDynamic(`Por favor, envía un correo a 📧 oportociudadelaph@gmail.com con el número de tu apartamento 🏠.
Asegúrate de especificar la novedad de facturación 📝 para que podamos realizar la corrección correspondiente, si es necesario.`);
                break;
            case '3':
                await flowDynamic(`Solicita tu factura aquí: https://www.phenlinea.info/ 🧾

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
                break;
            case '4':
                await flowDynamic(`Para reportar novedad de facturación, por favor, envía un correo a 📧 oportociudadelaph@gmail.com con el número de tu apartamento 🏠 y asegúrate de especificar la novedad`);
                    break;
            case '5':
                await flowDynamic(
                    `*MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN* 💰

1.https://www.phenlinea.info/

2. Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“OPORTO CIUDADELA PH ETAPA 1”* y, en la casilla de referencia, debes escribir el *Número del Apartamento*. Ingresa aquí para realizar el pago: https://www.jelpit.com/conjuntos/

3. Directamente en oficina bancaria *DAVIVIENDA*, cuenta de ahor*037570395998* referencia número del apartamento.`);
                break;
            case '6':
                await flowDynamic(
                    `*MEDIOS DE PAGO OTROS SERVICIOS* 💳

*CANCHA* ⚽
💡 Nota: El pago aplica solo si traes más de 2 invitados externos.

1. *Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“OPORTO CIUDADELA PH ETAPA 1”* y, en la casilla de referencia, debes escribir el *Número del Apartamento*. Ingresa aquí para realizar el pago: https://www.jelpit.com/conjuntos/

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en *DAVIVIENDA* en la cuenta de ahorros *037570395998*. Asegúrate de colocar el Número del Apartamento como referencia.

*SALÓN SOCIAL* 🎉
1. *Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“OPORTO CIUDADELA PH ETAPA 1”* y, en la casilla de referencia, debes escribir el *Número del Apartamento*. Ingresa aquí para realizar el pago: https://www.jelpit.com/conjuntos/

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en *DAVIVIENDA* en la cuenta de ahorros *037570395998*. Asegúrate de colocar el Número del Apartamento como referencia.

*BBQ * 🎉
1. *Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“OPORTO CIUDADELA PH ETAPA 1”* y, en la casilla de referencia, debes escribir el *Número del Apartamento*. Ingresa aquí para realizar el pago: https://www.jelpit.com/conjuntos/

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en *DAVIVIENDA* en la cuenta de ahorros *037570395998*. Asegúrate de colocar el Número del Apartamento como referencia.
                `);
                break;
            case '7':
                await flowDynamic(
                    `Por favor, envía un correo a 📧 oportociudadelaph@gmail.com con el número de tu apartamento 🏠 y el día en que realizaste el pago 📅.`);
                break;
            case '8':
                await flowDynamic(`Por favor, envía un correo a 📧 oportociudadelaph@gmail.com con el número de tu apartamento 🏠 y el mes de pago que se efectuó.`);
                break;
            case '9':
                await flowDynamic(
                    `Si realizas el pago después de la *fecha de vencimiento* de la factura 📅, este se reflejará en el *estado de cuenta del mes siguiente*. 💸`);
                break;
            case '10':
                await flowDynamic(
                    `Para obtener el paz y salvo, envía un correo a 📧 oportociudadelaph@gmail.com con la siguiente información:

1. Nombre completo 👤
2. Número de Celda de Parqueadero 🚗
3. Número de Cuarto Útil 🔑
4. Número de Cédula 📇

*❗NOTA:* La entrega de los paz y salvo se realizará en un plazo de 3 días hábiles.`);
                break;
            case '11':
                await flowDynamic(
                    `🚛 *INFORMACIÓN DE MUDANZAS*
Las mudanzas son de lunes a viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 4:30 PM - Sábados de 8:00 AM a 2:00 PM
Para realizar mudanzas tanto ingreso como salida, el propietario o  la inmobiliaria debe enviar la autorización vía correo electrónico 3 días hábiles antes de la mudanza ser realizada; en este correo deberá indicarnos la fecha exacta de la mudanza.
Se debe dar un depósito de 200.000 en efectivo en portería `);
                break;
            case '12':
                await flowDynamic(
                    `*HORARIO ADMINISTRACIÓN*
LUNES, MARTES, MIERCOLES, JUEVES Y VIERNES
8:00 AM A 1:00 PM 2:00 PM A 5:00 PM

SABADO (2 al mes)
8:00 AM A 12:00 PM`);
                break;
            case '13':
                await flowDynamic(
                    `*HORARIOS DEL GIMNASIO* 🏋️
*Lunes a Domingo* (Incluye festivos): ⏰ 5:00 AM a 9:00 PM.

*HORARIOS PISCINA* 🏊
*Martes y Jueves*: 12:00PM a 06:00 PM.
*Miercoles y Viernes*: 01:00PM a 07:00 PM.
*Sábado, Domingo y Lunes* (si es festivo): 10:30 AM a 6:00 PM.
📝 *Nota*: Los días lunes se realiza la limpieza profunda. Si el lunes es festivo, esta limpieza se realizará el martes.

*HORARIOS TURCO Y JACUZZI* 🧖
*Martes y Jueves*: 12:00PM a 06:00 PM.
*Miercoles y Viernes*: 01:00PM a 07:00 PM.
*Sábado, Domingo y Lunes* (si es festivo): 10:30 AM a 6:00 PM.
📝 *Nota*: Los días lunes se realiza la limpieza profunda. Si el lunes es festivo, esta limpieza se realizará el martes.

*HORARIOS SALÓN SOCIAL* 🎉
*Domingo a Jueves* (Incluye festivos): 10:00 AM a 11:00 PM.
*Viernes y Sábado*: 10:00 AM a 12:00 AM.

*HORARIO CANCHA* ⚽
*Lunes*: 12 a 8 pm.`);
                break;
            case '14':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/drive/folders/1rZcE1osCx4d6rrWO9V6NcEcWLGP02_NG?usp=sharing📘');
                break;
            case '15':
                await flowDynamic('Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/1K-b5hL_YkAcLUKQM7og7BMfC0W8Kpmj9/view?usp=sharing 📘')
                break;
            case '16':
                await flowDynamic('Diligencia el censo poblacional aquí: https://docs.google.com/document/d/1qxR-UipK6boYK3Rnoyh9QvDO1RX2HeAu/edit?usp=sharing&ouid=116041933802928543009&rtpof=true&sd=true 📝');
                break;
            case '17':
                await flowDynamic('Radica tu derecho de petición en el siguiente correo: oportociudadelaph@gmail.com 📧');
                break;
            case '18':
                await flowDynamic(
                    `*RESERVA Y COSTO DEL SALÓN SOCIAL* 🎉

Puede realizar la reserva en el siguiente enlace => https://www.phenlinea.info/
* 💵 El salón tiene un valor de 150.000 pesos que se debe consignar a la cuenta de la copropiedad una *semana antes del evento*.
* 💰 El día del evento se debe dejar un depósito de *150.000* pesos en efectivo en portería por si ocurre alguna novedad.
* El salón cuenta con 30 sillas, 4 mesas y una cocineta.
* 📲 La reserva se debe realizar a través de *PH en línea*.

*ENTREGA* 📅
Se entrega el mismo día del evento.
* *Domingo a Jueves* (Incluye festivos): 10:00 AM a 11:00 PM
* *Viernes y Sábado*: 10:00 AM hasta las 12:00 AM.

*✅ Requisitos*:
* El apartamento que reside debe estar al *día en las cuotas de administración*.
* El salón se entrega limpio y debe ser devuelto en las mismas condiciones.
* Si el residente no realiza el aseo, puede contratar a nuestros colaboradores por un valor de *50.000* pesos.`);
                break;
            case '19':
                await flowDynamic(`*RESERVA Y COSTO DEL BBQ* 🔥

Puede realizar la reserva en el siguiente enlace => https://www.phenlinea.info/
* 💵 El BBQ tiene un valor de 70.000 pesos que se debe consignar a la cuenta de la copropiedad una *semana antes del evento*.
* 💰 El día del evento se debe dejar un depósito de *100.000* pesos en efectivo en portería por si ocurre alguna novedad.
* El BBQ cuenta con 3 mesas y 15 sillas.
* 📲 La reserva se debe realizar a través de *PH en línea*.

*ENTREGA* 📅
*Viernes y Sabado:* 03:00PM a 11:00PM
*Domingo a Jueves:* 03:00PM A 09:00PM

*✅ Requisitos*:
* El apartamento que reside debe estar al *día en las cuotas de administración*.
* De los 100.000 pesos de depósito, 40.000 pesos serán para la limpieza del BBQ, y este valor es *obligatorio*. Teniendo en cuenta esto, *No se debe limpiar el BBQ al finalizar*.`);
                break;
            case '20':
                await flowDynamic(`PQRS -  ✉️ Por favor, enviar un correo a 📧 oportociudadelaph@gmail.com con la siguiente información:

* 🏠 Número de apartamento
* 📋 Descripción de la situación presentada en la copropiedad
* 📎 Evidencia del suceso (fotos, videos, o documentos)`);
                break;
            case '21':
                await flowDynamic(`✉️ Deben enviar un correo a 📧 oportociudadelaph@gmail.com con la siguiente información para solicitar las evidencias:

* 👤 Nombre Completo
* 🏠 Número de Apartamento`);
                break;
            case '22':
                await flowDynamic('✉️ Por favor, enviar un correo a 📧 oportociudadelaph@gmail.com indicando el *número de apartamento*, una breve *descripción de la novedad observada* y adjuntando la *evidencia correspondiente* (fotos, videos, o documentos que respalden el daño reportado).');
                break;
            case '23':
                await flowDynamic('Te puedes contactar al número: 301 740 12 34 con Sandra Soto - Asistente de Administración📞');
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
        lastFlow = flowOporto;
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowOporto;
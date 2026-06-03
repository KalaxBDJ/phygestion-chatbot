const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');
const { setLastFlow } = require('./last-flow');


const flowMajagua = addKeyword(['MAJAGUA'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de MAJAGUA! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '*Estados de Cuenta:* 📑',
        '*1.* Consulta de estados de cuenta.',
        '*2.* Reclamación de estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        '*3.* Solicitud de factura.',
        '*4.* Enviar soporte de pago.',
        '*5.* Medios de pago de administración.',
        '*6.* Medios de pago para otros servicios.',
        '*7.* Fecha límite de pago.',

        '\n*Información General:* ℹ️',
        '*8.* Paz y salvo.',
        '*9.* Información de mudanza.',
        '*10.* Horarios de zonas comunes.',
        '*11.* Horarios de atención administrativa.',
        '*12.* Enviar Reglamento de Propiedad Horizontal.',
        '*13.* Enviar Manual de Convivencia.',
        '*14.* Diligenciamiento censo poblacional.',
        '*15.* Radicar derechos de petición.',
        '*16.* Reservar salón social.',
        '*17.* PQRSF.',
        '*18.* Reportar novedades locativas.',
        '*19.* Contactar con un asesor.',

        '\n*Opciones de Navegación:* 🧭',
        '*20.* Volver al menú principal.',
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
                await flowDynamic('Realiza la reclamación de tus estados de cuenta aquí: https://forms.gle/bp4y3q85n54aWMu4A 🕵️‍♂️');
                break;
            case '3':
                await flowDynamic(`Solicita tu factura aquí: https://www.phenlinea.info/ 🧾

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
                break;
            case '4':
                await flowDynamic(
                    `Envía tu soporte de pago aquí: https://forms.gle/VfjMwbUJBC9FZdob8 💸`);
                break;
            case '5':
                await flowDynamic(
                    `*MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN* 💰

1. Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“Unidad Residencial Majagua”*: https://www.avalpaycenter.com/wps/portal/portal-de-pagos

2. Directamente en oficina bancaria *BANCO AV VILLAS*, cuenta corriente *512171356*, referencia número del apartamento.

3. Convenio Efecty *10691*, referencia número del apartamento`);
                break;
            case '6':
                await flowDynamic(
                    `*MEDIOS DE PAGO OTROS SERVICIOS* 💳

*MEDIOS DE PAGO PARA CHIP VEHICULAR* 🚗
* Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“Unidad Residencial Majagua”* EN LA CASILLA APARTAMENTO INGRESAR EL *CODIGO 002*: https://www.avalpaycenter.com/wps/portal/portal-de-pagos
* Directamente en oficina bancaria *BANCO AV VILLAS*, cuenta corriente *512171356*, referencia *CODIGO 002*
* Convenio Efecty *10691*, referencia *CODIGO 002*

*MEDIOS DE PAGO PARA SALÓN SOCIAL* 🏛️
* Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“Unidad Residencial Majagua”* EN LA CASILLA APARTAMENTO INGRESAR EL *CODIGO 001*: https://www.avalpaycenter.com/wps/portal/portal-de-pagos
* Directamente en oficina bancaria *BANCO AV VILLAS*, cuenta corriente *512171356*, referencia *CODIGO 001*
* Convenio Efecty *10691*, referencia *CODIGO 001*`
                );
                break;
            case '7':
                await flowDynamic(
                    `El plazo máximo para pagar es el *último día hábil del mes*. 
                    
Se recomienda realizar el pago antes de las 4:00 p.m. para asegurar que se registre correctamente en el banco. 📅`);
                break;
            case '8':
                await flowDynamic(
                    `Para obtener el paz y salvo, envía los soportes de pago de los últimos 2 meses al correo: majaguaph@gmail.com 📧

*❗NOTA:* La entrega de los paz y salvo se realizará en un plazo de 3 días hábiles.`);
                break;
            case '9':
                await flowDynamic(
                    `🚛 *INFORMACIÓN DE MUDANZAS*

*Horarios:*
                    
*Lunes a Viernes:* ⏰ 8:00 a.m. a 4:00 p.m.
*Sábados:* ⏰ 8:00 a.m. a 12:00 p.m.`);
                break;
            case '10':
                await flowDynamic(
                    `*HORARIOS DEL GIMNASIO* 🏋️
Lunes, miércoles, viernes y domingo: 5:00am a 10:00pm
Martes, jueves y sábado: 5:00am a 9:40am y 10:40am a 10:00pm
    
*HORARIOS DE LA PISCINA* 🏊
Martes, jueves, sábado, domingo y lunes (si es festivo): 10:00am a 5:00pm
Miércoles y viernes: 1:00pm a 8:00pm
*❗NOTA:* Los días lunes se realiza la limpieza profunda de la piscina, si el lunes esfestivo, esta limpieza se realiza los días martes.
    
*💡RECUERDA:* Para hacer uso de las zonas comunes, es necesario estar a paz y salvo conel pago de la administración.`);
                break;
            case '11':
                await flowDynamic(
                    `*HORARIOS DE ATENCIÓN ADMINISTRATIVA* 🕒

*Lunes Y Miércoles*: 8:00 a.m. a 1:00 p.m., 2:00 p.m. a 3:00 p.m.
*Martes Y Viernes*: 10:00 a.m. a 1:00 p.m., 3:00 p.m. a 5:00 p.m.
*Jueves*: 3:00 p.m. a 8:00 p.m.
*Sábado (cada 15 días)*: 8:00 a.m. a 12:00 p.m.

*HORARIOS DE ATENCIÓN ADMINISTRATIVA TELEFÓNICA* 🕒

*Lunes a Viernes:* ⏰ 8:00 a.m. a 5:00 p.m.
*Sábados:* ⏰ 8:00 a.m. a 12:00 p.m.`);
                break;
            case '12':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/drive/folders/1iYL53hKtOnrkCC5eRiRxgW2UMfkGdUUE 📘');
                break;
            case '13':
                await flowDynamic('Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/1K1X70HTgeKr14ab4HctBuBKnLfCaddhq/view?usp=sharing 📘')
                break;
            case '14':
                await flowDynamic('Diligencia el censo poblacional aquí: https://docs.google.com/document/d/17Mnrc8bSW7Z8s2t12nv7ypajcBioabzn/edit 📝');
                break;
            case '15':
                await flowDynamic('Radica tu derecho de petición aquí: https://docs.google.com/forms/d/e/1FAIpQLScTluPMs-yhv5HRfWmCOzm2qVC7PTqRmw2mupFEuDxZkPBjDw/viewform 📄');
                break;
            case '16':
                await flowDynamic(
                    `*RESERVA Y COSTO DEL SALÓN SOCIAL* 🎉

* Según la disponibilidad en la fecha que se requiera, se debe pagar el valor de $30.000, según la información de pago.
* Pago de depósito en efectivo en la oficina por valor de $70.000.
* Los pagos se deben realizar a más tardar 3 días antes del evento; de no ser así, se perderá la reserva.

*ENTREGA* 📅
* Se entrega el mismo día del evento a las 10:00 a.m. en la portería, inventariado.
* Se devuelve el salón al día siguiente a las 9:00 a.m. totalmente limpio y aseado.
* Si deseas que el personal de aseo realice el aseo por ti, por favor informa con tiempo. Este aseo tiene un costo de $40.000, los cuales se sacan del depósito y se devuelve el resto.

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMth3cUGLFtCICnPTQ?e=9Inleu`);
                break;
            case '17':
                await flowDynamic('PQRS: https://docs.google.com/forms/d/e/1FAIpQLScOKQidh8PqPccCaJRmWywQjhuEkDGuN8jpl1v2gteFIoJrGA/viewform 📝');
                break;
            case '18':
                await flowDynamic('Reporte de novedades locativas: https://docs.google.com/forms/d/e/1FAIpQLSdbJOKik7IISldFaOjUfWFHWRkI8-VtZOh5oFSHvo1iWKVuFQ/viewform 🛠️');
                break;
            case '19':
                await flowDynamic('Te puedes contactar al número: 302 395 4343 📞');
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
        setLastFlow(ctx, flowMajagua);
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowMajagua;

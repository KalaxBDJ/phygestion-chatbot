const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');


const flowMosaico = addKeyword(['MOSAICO'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de MOSAICO! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '*Estados de Cuenta:* 📑',
        '*1.* Consulta de estados de cuenta.',
        '*2.* Reclamación de estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        '*3.* Solicitud de factura.',
        '*4.* Reportar novedad de facturación.',
        '*5.* Medios de pago de administración.',
        '*6.* Enviar soporte de pago.',
        '*7.* Enviar soporte de pago de meses anteriores.',
        '*8.* Fecha límite de pago.',

        '\n*Reformas en Obra Blanca:* 🏗️',
        '*9.* Información para iniciar obras.',
        '*10.* Horario de reformas.',
        '*11.* Horario de ingreso de materiales.',
        '*12.* Información para pagos.',

        '\n*Información General:* ℹ️',
        '*13.* Paz y salvo.',
        '*14.* Información de mudanza.',
        '*15.* Horarios de atención administrativa.',
        '*16.* Horarios de zonas comunes.',
        '*17.* Enviar Reglamento de Propiedad Horizontal.',
        '*18.* Enviar Manual de Convivencia.',
        '*19.* Diligenciamiento censo poblacional.',
        '*20.* Radicar derechos de petición.',
        '*21.* Reservar salón social.',
        '*22.* PQRSF.',
        '*23.* Reportar novedades locativas.',
        '*24.* Contactar con un asesor.',
        '*25.* Comunícate con portería.',

        '\n*Opciones de Navegación:* 🧭',
        '*26.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
        const option = ctx.body.trim();
        switch (option) {
            case '1':
                await flowDynamic(`Consulta tus estados de cuenta aquí: https://phenlinea.info/ 📊
                    
Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtjToG-BGmGgxJq8A?e=1KjneI `);
                break;
            case '2':
                await flowDynamic('Realiza la reclamación de tus estados de cuenta aquí: https://forms.gle/Aofe2pAKw1a9R8cK6 PENDIENTE PONER VIDEO ) 🕵️‍♂️');
                break;
            case '3':
                await flowDynamic('Solicita tu factura aquí: https://phenlinea.info/ 🧾');
                break;
            case '4':
                await flowDynamic(
                    `Reportar novedad de facturación aquí: https://forms.gle/n533bmk7ShMiKyfw6 💸`);
                break;
            case '5':
                await flowDynamic(
                    `*MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN* 💰

1. Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“MOSAICO PH”*: https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00026166&origen=buscar

2. Directamente en oficina bancaria *BANCO AV VILLAS*, cuenta corriente *780000386*, referencia número del apartamento.

3. Convenio Efecty *26166*, referencia número del apartamento`
                );
                break;
            case '6':
                await flowDynamic('Envía tu soporte de pago aquí: https://forms.gle/qK9VzZzgrknTuBLK6 💸');
                break;
            case '7':
                await flowDynamic('Envía tu soporte de pago de meses anteriores aquí: https://forms.gle/LfHyicP4egFe5wq36 💸');
                break;
            case '8':
                await flowDynamic(`Si el pago se realiza después de la fecha de vencimiento, se reflejará en el estado de cuenta del siguiente mes 📅`);
                break;
            case '9':
                await flowDynamic(
                    `💰 *INFORMACIÓN DE PAGO PARA INICIAR OBRAS*

*- Depósito inicial:* Se debe transferir $1.000.000 a la cuenta de la copropiedad.
*- Reembolso:* Al finalizar la obra, se reembolsarán $600.000.
*Uso de los fondos restantes:* Los $400.000 serán utilizados para gestionar la disposición final de los escombros.

⚠️ *Importante:*
- Las obras deben realizarse solo dentro del apartamento.
- Prohibido dejar suciedad o rastros de obra en los pasillos. ❌
- El incumplimiento puede llevar a la *suspensión de la obra* o a la *imposición de multas*.`);
                break;
            case '10':
                await flowDynamic(
                    `*Lunes a Viernes:* ⏰ 8:00 a.m. a 4:00 p.m.
*Sábados:* ⏰ 8:00 a.m. a 12:00 m.
⚠️ *Importante:* Recuerda *Domingos y Festivos* esta prohibido realizar labores.❌`);
                break;
            case '11':
                await flowDynamic(
                    `*🚚 Horario de Ingreso de Materiales*

*Lunes a Viernes:* ⏰ 8:00 a.m. a 3:00 p.m.

📅 *Importante:* Debes agendar una cita en la oficina de administración en los horarios de atención, presentando el soporte de pago correspondiente.`);
                break;
            case '12':
                await flowDynamic(
                    `1. Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“MOSAICO”* y en la casilla apartamento ingresar el *codigo 3030*: https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00026166&origen=buscar

2. Directamente en oficina bancaria *BANCO AV VILLAS*, cuenta corriente *780000386*, referencia *CODIGO 3030*.
                    
3. Convenio Efecty *26166* referencia *CODIGO 3030*`);
                break;
            case '13':
                await flowDynamic(`La solicitud del paz y salvo debe realizarse a través del sistema PQRS. 

Accede al formulario aquí:: https://docs.google.com/forms/d/1tSABC-0I2YMOkYoFnT0Sib6BuqQi4W0wvm80cHEUP4s/edit#question=1582416976&field=44839799

⏳El tiempo de entrega es de 3 días hábiles.`)
                break;
            case '14':
                await flowDynamic(`🚛 *INFORMACIÓN DE MUDANZAS*

*Horarios:*
                    
*Lunes a Viernes:* ⏰ 8:00 a.m. a 4:00 p.m.
*Sábados:* ⏰ 8:00 a.m. a 12:00 p.m.
*Cita previa:* Debes sacar una cita en la oficina de administración al menos 2 días hábiles antes de la mudanza.

La cita debe realizarse en los horarios de atención de la administración para garantizar la disponibilidad del ascensor y otros espacios.

*Duración de la mudanza:* Se te asignarán 3 horas para realizar el movimiento. El proceso será supervisado por un rondero que verificará el estado de la mudanza.
                    
*Depósito:* Para reservar el espacio de la mudanza, deberás entregar un depósito de $250.000 COP en efectivo.

❗❗Este valor también se aplica en caso de ingreso o salida de enseres.

⚠️ *Importante:* El dinero solo se entrega en la oficina de administración. La empresa de seguridad no está autorizada para recibir pagos en la portería.

*Para inquilinos:* Debes presentar una carta de autorización de la inmobiliaria o propietario para la entrada o salida.`)
                break;
            case '15':
                await flowDynamic(`*HORARIO DE ATENCIÓN PRESENCIAL OFICINA DE ADMINISTRACIÓN*: 

*LUNES*: 2:00 PM A 5:00PM 
*MIERCOLES*: 1:00PM A 8:00PM 
*VIERNES*: 10:00AM A 1:00PM 
*SABADOS*: (2 AL MES) 10 AM A 12:00 AM

*NO HAY ATENCIÓN TELEFÓNICA*

*NOTA*: importante tener presente que, los días que no se tiene atención presencial, igualmente el personal administrativo está en la copropiedad en ejecución de sus funciones.
`);
                break;
            case '16':
                await flowDynamic(`*HORARIOS DE ZONAS COMUNES*

En el momento no tenemos habilitado el Gimnasio, pero estamos en proceso de licitación para la apertura del mismo.  

*HORARIO PISCINA*:

El horario de la piscina es el siguiente:

*Lunes*: sin apertura por mantenimiento 
*Martes- jueves*: 10:00 am a 5:00pm 
*Miércoles- viernes*: 1:00pm a 8:00pm
*Sábado- domingo y festivos*: 10:00 am a 5:30pm
`)
                break;
            case '17':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/file/d/1XpaJ0T_jLyTIz9ZKGSNabALGL5AE2IlO/view?usp=sharing 📘');
                break;
            case '18':
                await flowDynamic(`Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/1Q2a2v5GzQVQfiV50RU_I1PAPPQXMcFCR/view?usp=drive_link 📘
                    
Ten en cuenta que la atención presencial y los medios mencionados son los únicos canales para atender tus solicitudes.
`);
                break;
            case '19':
                await flowDynamic('Diligencia el censo poblacional aquí: https://docs.google.com/document/d/1IOIp1DJ1jo1KEDNf_sb0WgRQi9Hqnhv6/edit?usp=sharing&ouid=111633229810407995742&rtpof=true&sd=true 📝');
                break;
            case '20':
                await flowDynamic('Radica tu derecho de petición aquí: https://forms.gle/6wz4oWBqfdo6c4hq8 📄');
                break;
            case '21':
                await flowDynamic(
                    `*RESERVA SALÓN SOCIAL* 🎉

Con el objetivo de asegurar el uso adecuado, el cuidado y la seguridad de nuestras instalaciones, así como el control eficiente de dotaciones, les informamos sobre las normas establecidas para la utilización del salón social. Para conocer los lineamientos completos, consulte las normas en el siguiente enlace: https://drive.google.com/file/d/1YL6gIEcndx9CQwY9h-z9Kg5iYAzgW1c1/view?usp=sharing 📘`);
                break;
            case '22':
                await flowDynamic(`Gracias por comunicarte con nosotros. 
Para realizar cualquier petición, queja, reclamo, solicitud, consulta sobre facturación, mudanzas o ingreso de material, por favor utiliza nuestro formulario oficial: https://forms.gle/Mm9MKt9uCaqhHAuN8 📝
                    
❗Recuerda que la atención presencial y el formulario mencionado son los únicos canales habilitados para gestionar tus solicitudes.`); //TODO: Pendiente video 
                break;
            case '23':
                await flowDynamic('Reporte de novedades locativas: https://forms.gle/SEiEjYPWNJnwdtLw8  🛠️');
                break;
            case '24':
                await flowDynamic('Te puedes contactar por medio del correo electrónico: crmosaicoph@gmail.com');
                break;
            case '25':
                await flowDynamic('Te puedes contactar al número: 318 360 9724 📞');
                break;
            case '26':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        lastFlow = flowMosaico;
        return gotoFlow(flowRestartFinish);
    });

module.exports = flowMosaico;
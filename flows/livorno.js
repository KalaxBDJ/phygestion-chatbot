const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');
const { setLastFlow } = require('./last-flow');


const flowLivorno = addKeyword(['LIVORNO'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Hola! Soy Livornito, el asistente virtual de Livorno de la Toscana. ¿En qué puedo ayudarle?')
    .addAnswer('Aquí encontrará información general de la copropiedad. Escriba el número de la opción que desea consultar:')
    .addAnswer([
        '*Facturación y Pagos:* 💳',
        '*1.* Pago de administración',
        '*2.* Factura de administración',

        '\n*Información General:* ℹ️',
        '*3.* Atención presencial administración',
        '*4.* Mantenimiento de ascensores',
        '*5.* Proceso de mudanza',
        '*6.* Manual de convivencia',

        '\n*Opciones de Navegación:* 🧭',
        '*7.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
        const option = ctx.body.trim();
        switch (option) {
            case '1':
                await flowDynamic(
                    `Recuerde cancelar su administración máximo hasta el día 28 de cada mes, los bancos realizan cortes y si paga después de esta fecha, su valor puede verse reflejado como si hubiese cancelado al mes siguiente.

Puede pagar su administración al número de cuenta Bancolombia Livorno Ahorros 37900006672 (recuerde poner el número de su apartamento)

Nuevo Convenio Bancolombia -24649

Otros bancos:
https://checkout.wompi.co/l/lPCtQD

Nuevo Link:
https://tu360.bancolombia.com/inmobiliario/pagos-en-linea/pagaradministracion`);
                break;
            case '2':
                await flowDynamic(
                    `Para visualizar su factura por favor ingrese a https://phenlinea.info/
Ingrese su usuario el cual es la palabra LIVORNO seguido del número de su apartamento.
La contraseña es la primera letra en mayúscula del nombre del propietario, seguido del número del apartamento`);
                break;
            case '3':
                await flowDynamic(
                    `La administración no cuenta con oficina en la copropiedad, sin embargo hace presencia los días:
Lunes en la mañana
Jueves todo el día
Viernes en la tarde

Si desea agendar una cita con la administración, por favor escribir al Whatsapp 3053933472`);
                break;
            case '4':
                await flowDynamic(
                    `26-10-2026
13-11-2026
11-12-2026`);
                break;
            case '5':
                await flowDynamic(
                    `La copropiedad cuenta con 3 horarios de agendamientos para mudanzas, salida y/o ingreso de enseres, los cuales son:
De 8:00 am a 11:00am
De 11:00am a 1:00pm
De 1:00 pm a 3:00pm
Sábados:
De 8:00am a 10:00am
De 10:00am a 12:00mm
De 12:00mm a 2:00pm

Domingos y festivos no se autorizan movimientos en la copropiedad

Para agendar una mudanza por favor solicitar el espacio mínimo con 3 días de antelación en el Whatsapp de la administración 3053933472.

Si es propietario solo requiere solicitar el agendamiento de su mudanza y dejar el depósito en efectivo por valor de $400.000 en portería, este valor es devuelto luego de la mudanza si no hay ninguna novedad o daño al momento de la mudanza.

Si es inquilino por favor agendar su espacio con la carta de autorización de ingreso o salida del propietario o inmobiliaria administradora del inmueble y entregar el depósito en efectivo por valor de $400.000 en la portería de la copropiedad.

Recuerde ser muy puntual con su horario elegido de mudanza.`);
                break;
            case '6':
                await flowDynamic(
                    `Este es el Manual de convivencia de Livorno de la Toscana Ph:

https://drive.google.com/file/d/1DHeDna2wA267R1COA_udFV6KtjYQRoPG/view?usp=sharing`);
                break;
            case '7':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        setLastFlow(ctx, flowLivorno);
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowLivorno;

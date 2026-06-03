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
        '*19.* Publicidad en pantalla de anuncios.',
        '*16.* Reservas y costos del salón social y BBQ.',

        '\n🛠️ *Reportes y Novedades:*',
        '*20.* Información sanciones de parqueadero.',
        '*21.* PQRSF.',
        '*22.* Reporte de daños locativos.',

        '\n📞 *Contactos Directos:*',
        '*23.* Asesor',
        '*24.* Portería.',
        '*25.* Canal oficial de WhatsApp.',

        '\n🧭 *Navegación:*',
        '*26.* Volver al menú principal.',
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
                await flowDynamic(`*MEDIO DE PAGO CUOTAS DE ADMINISTRACIÓN*

1.El número de cuenta es AHORROS BANCOLOMBIA 26863798280
VILLA SOL ☀️ EN LA CASILLA DE REFERENCIA NUMERO DE APTO

CONVENIO 65047 O 65072.

2.Directamente en la oficina de administración`
                )
                break;
            case '8':
                await flowDynamic(`*Cuando se envíe el soporte a administración, especificar para qué es el pago.*
*TAG VEHICULAR*
1. El número de cuenta es AHORROS BANCOLOMBIA 26863798280
VILLA SOL ☀️ EN LA CASILLA DE REFERENCIA NUMERO DE APTO

*FICHOS DE PISCINA*
1. El número de cuenta es AHORROS BANCOLOMBIA 26863798280
VILLA SOL ☀️ EN LA CASILLA DE REFERENCIA NUMERO DE APTO

*SALON SOCIAL*
1. El número de cuenta es AHORROS BANCOLOMBIA 26863798280
VILLA SOL ☀️ EN LA CASILLA DE REFERENCIA NUMERO DE APTO

*BBQ*
1. El número de cuenta es AHORROS BANCOLOMBIA 26863798280
VILLA SOL ☀️ EN LA CASILLA DE REFERENCIA NUMERO DE APTO`
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

*HORARIO PISCINA 2*
Martes a domingo desde las 10:00 hasta las 5:30 PM 

*NOTA:* Los días lunes se realiza el mantenimiento de la piscina, si el lunes es festivo esta limpieza para a realizarse los días martes

*HORARIO PISCINA 1*
Martes a domingo desde las 9:00 hasta las 3:30 PM 

*NOTA:* Los días lunes se realiza el mantenimiento de la piscina, si el lunes es festivo esta limpieza para a realizarse los días martes

*HORARIO SALON SOCIAL* 
Todos los días desde las 8:00 AM hasta las 12:00 AM

*SE ENTREGA EN PORTERIA* - No se entrega antes de las 8:00 am

*HORARIO BBQ* 
Todos los días desde las 8:00 AM hasta las 12:00 AM

*SE ENTREGA EN PORTERIA* - No se entrega antes de las 8:00 am

*HORARIO CANCHA* 
Todos los días desde las
9:00 AM A 10:00 PM 

*HORARIO GIMANSIO*
Todos los días desde las
5:00 AM A 10:00 PM – 12:00 A 1:00 SE HACE ASEO`
                )
                break;
            case '11':
                await flowDynamic(`*HORARIO ADMINISTRACIÓN*
*LUNES, MARTES, MIERCOLES Y VIERNES*
8:00 AM A 1:00 PM 2:00 PM A 5:00 PM
*JUEVES*
12:00 PM A 8:00 PM 
*SABADO* (2 al mes presenciales y 2 virtuales)
8:00 AM A 12:00 PM

Para el *registro facial*:
*LUNES A VIERNES* 
9:00 AM a 1:00 PM y de 2:00 PM a 4:00 PM
*SABADO* 
9:00AM A 11:00AM – cuando se esté presencial.

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
                await flowDynamic(`*RESERVA Y COSTO DEL SALON SOCIAL*
•	Valor alquiler 100.000 (transferir a cuenta administración) 
•	Depósito 100.000 (efectivo en administración son reembolsables en caso de no presentar daños)
•	Tasa de aseo 30.000 (efectivo en administración)
•	4 mesas pequeñas
•	2 tablones
•	39 sillas.
•	Me indica fecha para revisar disponibilidad

*RESERVA Y COSTO DEL BBQ*
•	Valor alquiler 100.000 (transferir a cuenta administración) 
•	Depósito 100.000 (efectivo en administración son reembolsables en caso de no presentar daños)
•	Tasa de aseo 30.000 (efectivo en administración)
•	1 mesas pequeñas
•	1 tablones
•	13 sillas.
•	Me indica fecha para revisar disponibilidad`
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
                await flowDynamic(`VALIDAR FECHAS DE PUBLICACION CON ADMINISTRACIÓN
Para el ingreso a la piscina se debe tener los fichos, para adquirirlos debes hacer el pago de ellos, tienen un *valor de 15.000 pesos* que se transfieren a la cuenta de la copropiedad AHORROS BANCOLOMBIA *26863798280* VILLA SOL`
                )
                break;
            case '19':
                await flowDynamic(`Para la publicidad se debe hacer un pago de 15.000 pesos transferido a la cuenta de la copropiedad AHORROS BANCOLOMBIA 26863798280, me envías el comprobante y ponemos su publicidad en el TV de anuncios por 15 días.`)
                break;
            case '20':
                await flowDynamic(`Deben enviar un correo a admonvillasol@gmail.com  con la siguiente información para solicitar las evidencias.
-	Nombre Completo
-	APARTAMENTO`
                )
                break;
            case '21':
                await flowDynamic(`Por favor enviar un correo a admonvillasol@gmail.com, con el número de apartamento, la situación presentada en la copropiedad y la evidencia de dicho suceso.`)
                break;
            case '22':
                await flowDynamic(`Por favor enviar un correo a admonvillasol@gmail.com, con el número de apartamento, la novedad vista por su parte y la evidencia de dicho daño.`)
                break;
            case '23':
                await flowDynamic(`Alexis Jiménez – Asistente administrativo 3194334464`)
                break;
            case '24':
                await flowDynamic(`Portería – 3017774625`)
                break;
            case '25':
                await flowDynamic(`Canal de WhatsApp
https://whatsapp.com/channel/0029VbA7upuA2pL2kWNXvS3V 
`)
                break;
            case '26':
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

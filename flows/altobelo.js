const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');

const flowAltobelo = addKeyword(['ALTOBELO'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de ALTOBELO! 🏡')
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
        '*19.* Reservas de BBQ.',
        '*20.* PQRSF.',
        '*21.* Información chip vehicular.',
        '*22.* Información sanciones parqueadero de visitantes.',
        '*23.* Reportar novedades locativas.',
        '*24.* Contactar con un asesor.',

        '\n*Opciones de Navegación:* 🧭',
        '*25.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
        const option = ctx.body.trim();
        switch (option) {
            case '1':
                await flowDynamic(`Solicita tus estados de cuenta aquí: altobelo.admon@gmail.com 📧`);
                break;
            case '2':
                await flowDynamic('Realiza la reclamación de tus estados de cuenta aquí: https://forms.gle/r2nrjaACALUCTuzH9 🕵️‍♂️');
                break;
            case '3':
                await flowDynamic(`Solicita tu factura aquí: altobelo.admon@gmail.com 📧`);
                break;
            case '4':
                await flowDynamic(`Reportar novedad de facturación aquí: https://forms.gle/SvtxCmv2DhbkTRn69`);
                    break;
            case '5':
                await flowDynamic(
                    `*MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN* 💰

1. Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“Unidad Residencial Altobelo”* y, en la casilla de referencia, debes escribir el *Número del Apartamento*. Ingresa aquí para realizar el pago: https://www.avalpaycenter.com/wps/portal/portal-de-pagos

2. Directamente en oficina bancaria *BANCO AV VILLAS *, cuenta de ahorros 
                *503172231* referencia número del apartamento.
                
3. Convenio Efecty *9533* referencia número del apartamento`);
                break;
            case '6':
                await flowDynamic(
                    `*MEDIOS DE PAGO OTROS SERVICIOS* 💳

*CHIP VEHICULAR*

1. *Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“Conjunto Residencial Altobelo”* y, en la casilla de referencia ingresar el código *003*. Ingresa aquí para realizar el pago: https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en *BANCO AV VILLAS * en la cuenta de corriente *503172231 *. Asegúrate de colocar *003* como referencia.

3. Convenio Efecty *9533* referencia *003*.

*SALÓN SOCIAL* 🎉
1. *Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“Conjunto Residencial Altobelo”* y, en la casilla de referencia ingresar el código *001*. Ingresa aquí para realizar el pago: https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en *BANCO AV VILLAS * en la cuenta de corriente *503172231*. Asegúrate de colocar *001* como referencia.

3. Convenio Efecty *9533* referencia *001*.

*BBQ * 🎉
1. **Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“Conjunto Residencial Altobelo”* y, en la casilla de referencia ingresar el código *002*. Ingresa aquí para realizar el pago: https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en *BANCO AV VILLAS* en la cuenta de corriente *503172231*. Asegúrate de colocar *002* como referencia.

3. Convenio Efecty *9533* referencia *002*.`);
                break;
            case '7':
                await flowDynamic(
                    `Envía tu soporte de pago aquí: https://forms.gle/EFvhEwANkxdgkvFt7 💸`);
                break;
            case '8':
                await flowDynamic('Envía tu soporte de pago de meses anteriores aquí: https://forms.gle/7XQrzqGGqWpaC2ic8 💸');
                break;
            case '9':
                await flowDynamic(
                    `Si realizas el pago después de la *fecha de vencimiento* de la factura 📅, este se reflejará en el *estado de cuenta del mes siguiente*. 💸`);
                break;
            case '10':
                await flowDynamic(
                    `Para obtener el paz y salvo, envía un correo a 📧 altobelo.admon@gmail.com`);
                break;
            case '11':
                await flowDynamic(
                    `🚛 *INFORMACIÓN DE MUDANZAS*

Las mudanzas se pueden realizar de *Lunes a Sábados* de ⏰ *8:00 AM* a *04:00 PM*.

📦 Permiso de Mudanza

1. *Solicitar el permiso con *mínimo 5 días de anticipación* a la fecha de la mudanza.
2. Enviar una *carta del propietario autorizando la salida o ingreso* de la mudanza. Si la mudanza es *dentro de la misma unidad*, se deben enviar *dos cartas*:
    * 📄 Carta del propietario del apartamento de origen
    * 📄 Carta del propietario del apartamento de destino
3. 🏦 *Depositar $150.000* en efectivo en la portería principal como garantía.
4. 🔍 Al finalizar la mudanza, se revisarán las *zonas comunes*. Si no se encuentran afectaciones, se devolverá el depósito.`);
                break;
            case '12':
                await flowDynamic(
                    `*HORARIOS DE ATENCIÓN ADMINISTRATIVA* 🕒
    
*Lunes, Martes, Miercoles y Viernes:* ⏰ 8:00 a.m. a 1:00 p.m. y de 2:00 p.m. a 5:00 p.m.
*Jueves:* ⏰ 9:00 a.m. a 1:00 p.m. y de 2:00 p.m. a 6:00 p.m.
*Sábados:* (1 cada 15 días) ⏰ 8:00 a.m. a 12:00 p.m.`);
                break;
            case '13':
                await flowDynamic(
                    `*HORARIOS DEL GIMNASIO* 🏋️
*Lunes a Domingo* (Incluye festivos): ⏰ 5:00 AM a 10:00 PM.
    
*HORARIOS PISCINA* 🏊
*Martes a Domingo*: 09:00 am a 1:00 PM  | 02:00 PM a 04:00 PM.
📝 *Nota*: Los días lunes se realiza la limpieza profunda. Si el lunes es festivo, esta limpieza se realizará el martes.

*HORARIOS TURCO* 🧖
*Martes a Domingo*: ⏰ 09:00 AM A 11:00 AM – 02:00 PM A 04:00 PM – 06:00 PM A 08:00 PM .
📝 *Nota*: Los días lunes se realiza la limpieza profunda. Si el lunes es festivo, esta limpieza se realizará el martes.

*HORARIOS SALÓN SOCIAL* 🎉
*Lunes a Viernes* (Incluye festivos): 02:00 PM a 12:00 AM.
*Sábados y Domingos*: 12:00 PM a 12:00 AM.`);
                break;
            case '14':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/drive/folders/1J1fOyrFM6HERoYsaLH5sm4ol-7cIDAsR?usp=sharing 📘');
                break;
            case '15':
                await flowDynamic('Consulta el Manual de Convivencia aquí: https://drive.google.com/drive/folders/1isGAUzOhmIvsofjYxy1EhQnLSeTZJ_7w?usp=sharing 📘')
                break;
            case '16':
                await flowDynamic('Diligencia el censo poblacional aquí: https://docs.google.com/forms/d/e/1FAIpQLSeIcEdV8ITZDDOI03q4u8Tt5MORRjhYeJUer1zKXLUM_anNxw/viewform?usp=pp_url 📝');
                break;
            case '17':
                await flowDynamic('Radica tu derecho de petición en el siguiente correo: altobelo.admon@gmail.com 📧');
                break;
            case '18':
                await flowDynamic(
                    `*RESERVA Y COSTO DEL SALÓN SOCIAL* 🎉

* 💵 El valor del salón es de *80.000* pesos y debe pagarse según la información de pago proporcionada, previa *verificación de disponibilidad*.
* 💰 El día del evento se debe dejar un *depósito en efectivo de 100.000* pesos en la oficina como garantía.
* ⏳ Los pagos deben realizarse a más tardar *1 semana antes del evento*. De no ser así, se *perderá la reserva*.

*ENTREGA* 📅
Se entrega el mismo día del evento.
* *Lunes a Viernes*: 02:00 PM
    * *Sábado, Domingos y Festivos*: 12:00 PM.
    * 🏠 *Lugar de entrega*: Portería, con inventario incluido.

*DEVOLUCIÓN 🔄*:
El salón debe devolverse al día siguiente a las 8:00 AM, totalmente limpio y aseado.`);
                break;
            case '19':
                await flowDynamic(`*RESERVA Y COSTO DEL BBQ* 🔥

* 💵 El valor del BBQ es de *35.000* pesos y debe pagarse según la información de pago proporcionada, previa *verificación de disponibilidad*.
* 💰 El día del evento se debe dejar un depósito de *100.000* pesos en la oficina como garantía.
* ⏳ Los pagos deben realizarse a más tardar *1 semana antes del evento*. De no ser así, se *perderá la reserva*.

*ENTREGA* 📅
Se entrega el mismo día del evento a las 8:00 AM en portería, limpio y aseado

*Horario de uso*:
* *Domingo a Jueves*: 10:00 AM a 9:00 PM
* *Viernes, Sábado y Domingo* (si el lunes es festivo): 10:00 AM a 11:00 PM
                
*DEVOLUCIÓN 🔄*:
El BBQ debe devolverse en las mismas condiciones de limpieza.`);
                break; 
            case '20':
                await flowDynamic(`PQRS: https://forms.gle/BuHDipXQFt3GyXQp6`);
                break;
            case '21':
                await flowDynamic(`*COSTO Y ENTREGA DE CHIP VEHICULAR*🚗
                
* 💵 El costo del chip vehicular es de 10.000 pesos. *El primer chip es gratuito*; a partir del segundo se aplicará el costo mencionado.
* 📅 La *entrega se realizará el mismo día* después de corroborar el soporte de pago.
* 📝 Para la entrega, es necesario presentar el *vehículo* y la *matrícula del mismo*.`);
                break;
            case '22':
                await flowDynamic(`*INFORMACIÓN SANCIONES PARQUEADERO DE VISITANTES 🚫🚗*
                    
Para consultar la información completa sobre las sanciones aplicables al parqueadero de visitantes, puedes acceder al siguiente enlace: https://drive.google.com/file/d/1esEPqKO_CHiBDvy6guAKQnvzeJ8EPMqh/view?usp=sharing `);
                break;
            case '23':
                await flowDynamic('Reporte de novedades locativas: https://forms.gle/DPeAYY8BtZ8bnDj5A');
                break;
            case '24':
                await flowDynamic('Te puedes contactar al número: 302 469 44 84 con Yadira - Asistente de Administración📞');
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
        lastFlow = flowAltobelo;
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowAltobelo;
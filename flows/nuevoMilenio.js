const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');
const { setLastFlow } = require('./last-flow');

const flowNuevoMilenio = addKeyword(['NUEVOMILENIO'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de Nuevo Milenio! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '*Estados de Cuenta:* 📑',
        '*1.* Consulta de estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        '*2.* Reportar novedad de facturación.',
        '*3.* Solicitud de factura.',
        '*4.* Día de pago.',
        '*5.* Enviar soporte de pago',
        '*6.* Revisión estados de cuenta.',
        '*7.* Medios de pago administración.',
        '*8.* Medios de pago otros servicios.',


        '\nℹ️ *Información sobre ENDOSOS*',
        '*9.* Solicitar el endoso del seguro para su crédito hipotecario.',

        '\n*Información General:* ℹ️',
        '*10.* Paz y salvo.',
        '*11.* Información de mudanza.',
        '*12.* Horarios de atención administrativa.',
        '*13.* Horarios de zonas comunes.',
        '*14.* Enviar Reglamento de Propiedad Horizontal.',
        '*15.* Enviar Manual de Convivencia.',
        '*16.* Diligenciamiento censo poblacional.',
        '*17.* Radicar derechos de petición.',
        '*18.* Información SALÓN SOCIAL.',
        '*19.* PQRSF.',
        '*20.* Reportar novedades locativas.',
        '*21.* Información sobre los IMPUESTOS PREDIALES.',//aca
        '*22.* Contactar con un asesor.',
        '*23.* Contacto porteria.',
        '*24.* Número para solicitar retiro de escombros.',

        '\n*Opciones de Navegación:* 🧭',
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
                await flowDynamic(`Por favor, envía un correo a *nuevomilenioph@gmail.com* 📧, indicando el número de apartamento 🏢. Especifica cualquier novedad en la facturación 📝 para realizar la corrección correspondiente, si es necesario. ✅`);
                break;
            case '3':
                await flowDynamic(`Solicita tu factura aquí: https://www.phenlinea.info/ 🧾

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
                break;
            case '4':
                await flowDynamic(`⏳ Si paga después de la fecha de vencimiento de la factura, el pago se verá reflejado al siguiente mes.
                    El último día hábil del mes a más tardar las 5:00 de la tarde, deberá ser efectuado el pago.`);
                    break;
            case '5':
                await flowDynamic(
                    `Por favor, envía un correo a *nuevomilenioph@gmail.com* 📧, indicando el número de apartamento 🏢.`);
                break;
            case '6':
                await flowDynamic(
                    `📧 Por favor enviar un correo a nuevomilenioph@gmail.com, con el número de apartamento. Especificar la novedad de facturación para la debida corrección, si es el caso.`);
                break;
            case '7':
                await flowDynamic(`*MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN* 💰

1. *Pago en línea por PSE* 🔗
   Realiza el pago a través del siguiente enlace:
   https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00023353&origen=buscar
   Recuerda ingresar "Urbanización Nuevo Milenio PH" en el buscador y, en la casilla de referencia, escribe el número de tu apartamento 🏢.

2. *Pago en oficina bancaria - Banco AV Villas* 🏦
   Realiza el pago directamente en una oficina del Banco AV Villas, en la cuenta corriente *503180770*.
   *Referencia:* Número de tu apartamento.

3. *Convenio Efecty* 📬
   Utiliza el convenio *23353* para pagar en cualquier punto Efecty.
   *Referencia:* Número de tu apartamento.`);
                break;
            case '8':
                await flowDynamic(
                    `*SALÓN SOCIAL* 🏢

1. *Pago en línea por PSE* 🔗
   Realiza el pago a través del siguiente enlace:
   https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00023353&origen=buscar
   Recuerda ingresar "Urbanización Nuevo Milenio PH" en el buscador y, en la casilla de referencia, escribe el número de tu apartamento 🏠.

2. *Pago en oficina bancaria - Banco AV Villas* 🏦
   Realiza el pago directamente en una oficina del Banco AV Villas, en la cuenta corriente *503180770*.
   *Referencia:* Código *001*.

3. *Convenio Efecty* 📬
   Utiliza el convenio *23353* para pagar en cualquier punto Efecty.
   *Referencia:* Código *001*.`);
                break;
            case '9':
                await flowDynamic(
                    `*CIRCULAR INFORMATIVA* 📝

Para solicitar el endoso del seguro de crédito hipotecario:
📄 https://drive.google.com/file/d/1pQP7ArafxQOmJk-3jd452yRzpPHSSOSX/view?usp=sharing

📧 *Correo:* consultorvivaseguros@gmail.com`);
                break;
            case '10':
                await flowDynamic(
                    `Por favor, envía un correo a *nuevomilenioph@gmail.com* 📧 con la siguiente información para solicitar el *PAZ Y SALVO*. Ten en cuenta que, una vez solicitado, el documento será remitido después de *3 días hábiles* 📆.

*Información requerida:*
- Nombre completo 👤
- Número de celda de parqueadero 🚗
- Cédula 🆔
- Soporte de pago del mes en curso 💵`);
                break;
            case '11':
                await flowDynamic(
                    `*PROTOCOLO DE MUDANZAS* 📦

*Cordial saludo, Propietarios y Residentes:*
A continuación, se presenta el protocolo de mudanzas a seguir a partir de la fecha:

1. *Autorización de Mudanza:* Solicita la autorización de mudanza al propietario o a la agencia del inmueble.

2. *Notificación a la Administración:* Informa a la administración al menos *tres (3) días antes* de la mudanza, enviando un correo a *nuevomilenioph@gmail.com* 📧 o llamando al celular *3014468877* 📱.

3. *Censo de Residentes (Ingreso de Nuevos Residentes):* Si se trata de una mudanza de ingreso, recuerda diligenciar el *Censo de Residentes* para asegurar la comunicación directa y actualizar tus datos.

4. *Depósito de Garantía:* Se solicitará un depósito de *$200,000* (aplicable tanto para mudanzas como para movimientos de enseres de gran volumen). Este depósito será reintegrado después de verificar que las zonas comunes, como paredes y ascensores, estén en adecuadas condiciones. Para nuevos residentes, el reintegro también requiere el censo debidamente diligenciado.

5. *Firma de Planilla de Conocimiento de Normas:* Firma la planilla de entrega, que incluye el conocimiento de normas básicas de la unidad y la *Carta de Bienvenida*.

¡Gracias por su apoyo y colaboración! ✅`);
                break;
            case '12':
                await flowDynamic(
                    `*HORARIO ADMINISTRACIÓN* 🏢

- *Lunes a Viernes:*
  8:00 am a 1:00 pm
  2:00 pm a 5:00 pm

- *Sábado* (cada 15 días) 🗓️
  8:00 am a 12:00 pm`);
                break;
            case '13':
                await flowDynamic(
                    `*HORARIO DE ÁREAS COMUNES*

*GIMNASIO* 🏋️‍♂️
- *Lunes:* Mantenimiento 🔧
- *Martes a viernes:* 6:00 am a 8:30 pm
- *Sábado:* 9:00 am a 5:30 pm
- *Domingos y festivos:* 9:00 am a 4:30 pm

*PISCINAS Y JACUZZI* 🏊‍♂️💦
- *Lunes:* Mantenimiento 🔧
- *Martes a viernes:* 10:00 am a 8:30 pm
- *Sábado:* 6:00 am a 5:30 pm
- *Domingos y festivos:* 6:00 am a 4:30 pm

*NOTA:* Los lunes se realiza una limpieza profunda de la piscina 🧼. Si el lunes es festivo, esta limpieza se realiza el martes.

*TURCO* 🌡️
- *Lunes:* Mantenimiento 🔧
- *Martes a viernes:* 4:00 pm a 8:30 pm
- *Sábado:* 12:00 pm a 5:30 pm
- *Domingos y festivos:* 12:00 pm a 4:30 pm

*SAUNA* 🔥
- *Lunes:* Mantenimiento 🔧
- *Martes a viernes:* 4:00 pm a 8:30 pm
- *Sábado:* 12:00 pm a 5:30 pm
- *Domingos y festivos:* 12:00 pm a 4:30 pm

*CANCHAS* ⚽🏀
- *Lunes:* Mantenimiento 🔧
- *Martes a viernes:* 8:00 am a 8:30 pm
- *Sábado:* 9:00 am a 5:30 pm
- *Domingos y festivos:* 9:00 am a 4:30 pm`);
                break;
            case '14':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/file/d/1bakrjhs1sBauAcn3yDKcD34y7F2iWH50/view?usp=sharing  📘');
                break;
            case '15':
                await flowDynamic('Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/1KacO1jQL3DdJI0ACgYrzzcOmVwIvR-JA/view?usp=sharing 📘')
                break;
            case '16':
                await flowDynamic('Diligencia el censo poblacional aquí: https://forms.gle/SFNoU432QZyaLHir9 📝');
                break;
            case '17':
                await flowDynamic(`📧 Por favor enviar el derecho de petición al siguiente correo nuevomilenioph@gmail.com`);
                break;
            case '18':
                await flowDynamic(
                    `*PROTOCOLO Y REGLAMENTO PARA EL USO DEL SALÓN SOCIAL* 🏢

1. *Uso Exclusivo para Residentes*
   - *Costo:*
     - *Lunes a viernes:* $76,000 (debe consignarse dentro del mes de la reserva del evento)
     - *Sábados, domingos y festivos:* $107,000 (debe consignarse dentro del mes de la reserva del evento)
   - *Depósito:* $200,000 en efectivo, reembolsable tras verificar que no hubo daños en las instalaciones.

2. *Horarios de Uso:*
   - *Lunes a viernes:* 10:00 am a 9:00 pm
   - *Sábados, domingos y festivos:* 10:00 am a 12:00 pm

3. *Dotación del Salón Social:*
   - *Mesas:* 6 (plásticas, cuadradas)
   - *Sillas:* 27 (plásticas)

4. *Condiciones para el Alquiler:*
   - El apartamento debe estar al día en pagos con la administración.
   - El depósito y el comprobante de pago deben entregarse en la oficina de administración *al menos 3 días antes* del evento.

---

*NOTAS IMPORTANTES:*

- *Restricciones de Uso:*
  - No está permitido realizar asados fuera del salón social.
  - Está prohibido el uso de inflables, juegos pirotécnicos, bengalas, y colocar sillas u objetos (como carritos de comida) fuera del salón.

- *Limpieza y Entrega:*
  - La entrega del salón debe hacerse al día siguiente *antes de las 9:30 am*, y el espacio debe estar limpio para el próximo usuario.

- *Lista de Invitados:*
  - Debe entregarse una lista de invitados *al menos 3 días antes* del evento para autorización en portería.

- *Responsabilidad del Dueño del Evento:*
  - El organizador es responsable de los daños causados por sus invitados. Se debe respetar el uso del parqueadero y el comportamiento en zonas comunes cercanas al salón social. *No se permiten mascotas*.

- *Música y Ruido:*
  - El volumen de la música debe ser moderado; no se permite un ambiente de discoteca, ya que es una unidad residencial y los vecinos merecen descansar.

- *Decoración:*
  - Evita reventar globos como parte de la decoración; esto afecta el descanso de los residentes. Usa tijeras para desinflar y retirar los globos de manera silenciosa.`);
                break;
            case '19':
                await flowDynamic(`*PQRSF FORMULARIO* 📝
https://forms.gle/boXWnjekd6z7ZKUV8`);
                break;
            case '20':
                await flowDynamic(`*Reporte de Novedades (Locativas) FORMATO* 🛠️
https://forms.gle/KufCvrShz2y2hD5w8`);
                break;
            case '21':
                await flowDynamic(`Señor Propietario, puede comunicarse a la portería al número 3237855619`);
                break;
            case '22':
                await flowDynamic(`*Comunicación con un Asesor* 📞
*Asistente Administrativa:* Katty Salas
📱 3014468877`);
                break;
            case '23':
                await flowDynamic(`*Número de Portería* 🛡️
📱 3237855619`);
                break;
            case '24':
                await flowDynamic(`*Número para Solicitar Retiro de Escombros* 🗑️
*INTERASEO (Madera, escombros, muebles, electrodomésticos):*
📱 3012655557`);
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
        setLastFlow(ctx, flowNuevoMilenio);
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowNuevoMilenio;

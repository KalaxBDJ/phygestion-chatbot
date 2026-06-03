const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');
const { setLastFlow } = require('./last-flow');


const flowAltea = addKeyword(['ALTEA'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de Altea! 🏡')
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
        '*15.* Radicar derechos de petición CORREO.',
        '*16.* Reglamentos y usos de las zonas comunes.',
        '*17.* Información MUDANZA y REMODELACIONES.',
        '*18.* Información SANCIONES DE PARQUEADERO.',
        '*19.* PQRSF CORREO.',
        '*20.* Reporte novedades (locativas) CORREO.',
        '*21.* Solicitar Endoso del apartamento.',
        '*22.* Comunicarse con un asesor.',
        '*23.* Comunicarse con Portería.',
        

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
                await flowDynamic(`Por favor enviar un correo a alteaplazaph@gmail.com, con el número de apartamento y el mes de pago que se efectuó.`);
                break;
            case '5':
                await flowDynamic(`Por favor enviar un correo a alteaplazaph@gmail.com, con el número de apartamento. Especificar la novedad de facturación para la debida corrección si es el caso.`);
                break;
            case '6':
                await flowDynamic('Por favor enviar un correo a alteaplazaph@gmail.com, con el número de apartamento y el día de pago que se efectuó.');
                break;
            case '7':
                await flowDynamic(`*MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN*

1.Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Altea Plaza Ph” EN LA CASILLA DE REFERENCIA NUMERO DE APTO
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/banco-avvillas/resultado-busqueda/realizar-pago?idConv=00026060&origen=buscar

2.Directamente en oficina bancario AV VILLAS cuenta corriente
502223639 referencia número del apartamento.
`);
                break;
            case '8':
                await flowDynamic(`*COWORKING*
Próximamente

*SALON SOCIAL*
Próximamente

*TEATRO*
Próximamente

*BBQ*
Próximamente

*CANCHA*
Próximamente
`);
                break;
            case '9':
                await flowDynamic(`Deben enviar un correo a alteaplazaph@gmail.com, con la siguiente información para solicitar el PAZ Y SALVO. Deberá tener en cuenta que el PAZ Y SALVO después de solicitarlo se le remitirá cuando hayan cumplido 3 días hábiles.
-	Nombre Completo
-	Número de Celda de Parqueadero
-	Número de Cuarto Útil
-	Cédula
`);
                break;
            case '10':
                await flowDynamic(`*HORARIO GIMNASIO*
Próximamente

*HORARIO PISCINA*
Martes y jueves 
12:00 PM A 7:45 PM 
Miércoles, jueves, sábado, Domingo y lunes (si es festivo)
9:00 AM A 4:00 PM  

NOTA: Los días lunes se realiza la limpieza profunda de la piscina, si el lunes es festivo esta limpieza para a realizarse los días martes

*HORARIO SALON SOCIAL*
Domingo a jueves 
10:00 AM A 11:00 PM 
viernes y sábados
10:00 AM A 12:00 AM.

*HORARIO CANCHA*
Todos los días desde las 
8:00 AM A 8:00 PM 

*HORARIO TURCO *
Martes y jueves 
12:00 PM A 7:45 PM 
Miércoles, jueves, sábado, Domingo y lunes (si es festivo)
9:00 AM A 4:00 PM  

NOTA: Los días lunes se realiza la limpieza profunda de la piscina, si el lunes es festivo esta limpieza para a realizarse los días martes

*HORARIO COWORKING*
Próximamente

*HORARIO BBQ*
Próximamente

*HORARIO TEATRO*
Próximamente
`);
                break;
            case '11':
                await flowDynamic(`*HORARIO ADMINISTRACIÓN*
*LUNES*
8:00 AM A 1:00 PM 2:00 PM A 5:00 PM 
*MARTES, JUEVES Y VIERNES*
8:00 AM A 1:00 PM 
*MIERCOLES,*
1:00 PM A 8:00 PM  
*SABADO (VIRTUAL)*
8:00 AM A 12:00 PM
`);
                break;
            case '12':
                await flowDynamic(`https://drive.google.com/file/d/1_WHd1BzHgMM5wswf17OyCfspQ2S7IrF0/view?usp=drive_link`);
                break;
            case '13':
                await flowDynamic(`PROXIMAMENTE`);
                break;
            case '14':
                await flowDynamic(`https://docs.google.com/document/d/1_VkOw36G0nzpDM8wCLS7jxyq8JX1uqVA/edit?usp=drive_link&ouid=104498260608878733285&rtpof=true&sd=true`);
                break;
            case '15':
                await flowDynamic(`alteaplazaph@gmail.com`);
                break;
            case '16':
                await flowDynamic(`*Salón social reserva y entrega: PROXIMAMENTE MAYOR INFORMACIÓN*
https://docs.google.com/document/d/1VfCccdhafuxl8CWwD_KDfeMrNOYyh9V_/edit?usp=drive_link&ouid=104498260608878733285&rtpof=true&sd=true

*BBQ reserva y entrega: PROXIMAMENTE MAYOR INFORMACIÓN*
https://docs.google.com/document/d/1VfCccdhafuxl8CWwD_KDfeMrNOYyh9V_/edit?usp=drive_link&ouid=104498260608878733285&rtpof=true&sd=true

*Gimnasio*
https://docs.google.com/document/d/1nu8fWQteBpHOgUMwPVFWLNlA-rhn_vzH/edit?usp=drive_link&ouid=104498260608878733285&rtpof=true&sd=true 

*Piscina*
https://docs.google.com/document/d/1kczUee8ZmEwgJrL_cTtMlCahQtJaeBBK/edit?usp=drive_link&ouid=104498260608878733285&rtpof=true&sd=true
`);
                break;
            case '17':
                await flowDynamic(`1. Autorización: Si eres inquilino, la agencia o propietario debe enviar la carta de autorización para ingreso o salida.
2. Depósito: Se requiere un depósito de $300,000 en efectivo, directamente en la administración, mínimo 2 días hábiles antes de la mudanza.
3. Programación del Espacio: La disponibilidad es de 2 horas por apartamento.
Horarios de Mudanza:
   - Lunes a Viernes: 8:00 am a 4:00 pm
   - Sábados: 8:00 am a 1:00 pm
Pasos para realizar la *MUDANZA Y/O REMODELACIÓN:*

- Solicitar autorización: Pide la autorización de mudanza al propietario o a la agencia del inmueble.
Nota: Recuerda que el envío del correo con la inmobiliaria debe realizarse con 3 días de antelación, al igual que la programación del día de la mudanza.
- Notificar a la Administración: Envía la notificación al correo ALTEAPLAZAPH@GMAIL.COM, mínimo 3 días antes de la mudanza.
- Registro de Ingreso: Si es inquilino nuevo, por favor adjuntar el link del censo poblacional:
https://docs.google.com/forms/d/e/1FAIpQLSc9A6Rs9Tx33_yzLz6_QzlSsQ04qbQAd_KmKlZZPX52HQXA4Q/viewform 

Nota: Para solicitar la devolución del depósito deberá haber llenado el censo poblacional
`);
                break;
            case '18':
                await flowDynamic(`Deben enviar un correo a alteaplazaph@gmail.com con la siguiente información para solicitar las evidencias.
-	Nombre Completo
-	APARTAMENTO
`);
                break;
            case '19':
                await flowDynamic(`Por favor enviar un correo a alteaplazaph@gmail.com, con el número de apartamento, la situación presentada en la copropiedad y la evidencia de dicho suceso.`);
                break;
            case '20':
                await flowDynamic(`Por favor enviar un correo a alteaplazaph@gmail.com, con el número de apartamento, la novedad vista por su parte y la evidencia de dicho daño.`);
                break;
            case '21':
                await flowDynamic(`https://drive.google.com/file/d/1kA9HMerr2-mrtVUYDF-K61HaPNWKnUmd/view?usp=drive_link`);
                break;
            case '22':
                await flowDynamic(`VIVIANA RIOS administradora delegada
3114080608
`);
                break;
            case '23':
                await flowDynamic(`3225977263`);
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
        setLastFlow(ctx, flowAltea);
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowAltea;

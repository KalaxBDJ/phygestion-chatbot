const { addKeyword, EVENTS } = require('@builderbot/bot');
const { reset, stop } = require('./idle-custom');
const { getLastFlow, clearLastFlow } = require('./last-flow');

const flowRestartFinish = addKeyword(EVENTS.ACTION)
    .addAction({ capture: true }, async (ctx, { endFlow, gotoFlow, fallBack }) => {
        reset(ctx, gotoFlow, 600000);  //Reinicia el temporizador
        const option = ctx.body.trim();
        switch (option) {
            case '0':
                stop(ctx); //Detener el temporizador cuando el flujo termina
                clearLastFlow(ctx);
                return endFlow('¡Gracias por usar este bot! 🙌 Que tengas un excelente día. 🌟'); //Termina la conversación
            case '8': {
                const lastFlow = getLastFlow(ctx);
                if (!lastFlow) return gotoFlow(require('./welcome'));
                return gotoFlow(lastFlow); //Vuelve al menú anterior
            }
            case '9':
                clearLastFlow(ctx);
                return gotoFlow(require('./welcome')); //Vuelve al menú principal
            default:
                return fallBack('❌ Opción no válida. Escribe *8*, *9* o *0*.'); //Repite solo el aviso, no el menú
        }
});

module.exports = flowRestartFinish;

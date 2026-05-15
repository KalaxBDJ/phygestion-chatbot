const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const { start } = require('./idle-custom');
const flowMosaico = require('./mosaico');
const flowOporto = require('./oporto');
const flowAltobelo = require('./altobelo');
const flowLisboa = require('./lisboa');
const flowNuevoMilenio = require('./nuevoMilenio');
const flowRoterdam = require('./roterdam');
const flowVillasol = require('./villasol');

const flowWelcome = addKeyword(EVENTS.WELCOME)
    .addAction(async (ctx, { gotoFlow }) => {
        start(ctx, gotoFlow, 600000); //Inicia el temporizador al entrar en el flujo
        console.log(`Chatbot iniciado por usuario: ${ctx.from}`)
    })
    .addAnswer('¡Hola! 👋 Bienvenido a este *Chatbot*. ¡Espero que estés teniendo un gran día! 😊')
    .addAnswer([
        'Para empezar, por favor elige la unidad a la que perteneces:',
        '*1.* MOSAICO 🏠',
        '*2.* OPORTO 🏠',
        '*3.* ALTOBELO 🏠',
        '*4.* ROTERDAM 🏠',
        '*5.* LISBOA 🏠',
        '*6.* NUEVO MILENIO 🏠',
        '*7.* VILLASOL 🏠',
    ], { capture: true }, async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
        const option = ctx.body.trim();
        if (option === '1' || option === 'MOSAICO') {
            return gotoFlow(flowMosaico);
        } else if (option === '2' || option === 'OPORTO') {
            return gotoFlow(flowOporto);
        } else if (option === '3' || option === 'ALTOBELO') {
            return gotoFlow(flowAltobelo);
        } else if (option === '4' || option === 'ROTERDAM') {
            return gotoFlow(flowRoterdam);
        } else if (option === '5' || option === 'LISBOA') {
            return gotoFlow(flowLisboa);
        } else if (option === '6' || option === 'NUEVO MILENIO') {
            return gotoFlow(flowNuevoMilenio);
        } else if (option === '7' || option === 'VILLASOL') {
            return gotoFlow(flowVillasol);
        } else {
            await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
            return fallBack();
        }
});

module.exports = flowWelcome;
const { EVENTS, addKeyword } = require('@builderbot/bot');

// Object to store timers for each user
const timers = {};

// Flow for handling inactivity
const idleFlow = addKeyword(EVENTS.ACTION).addAction(
    async (_, { endFlow }) => {
        // Silent on purpose: the timeout message was a billable send that told the user nothing they need.
        return endFlow();
    }
);

// Function to start the inactivity timer for a user
const start = (ctx, gotoFlow, ms) => {
    timers[ctx.from] = setTimeout(() => {
        console.log(`Usuario inactivo: ${ctx.from}`);
        return gotoFlow(idleFlow);
    }, ms);
}

// Function to reset the inactivity timer for a user
const reset = (ctx, gotoFlow, ms) => {
    stop(ctx);
    if (timers[ctx.from]) {
        console.log(`Reiniciando temporizador para el usuario: ${ctx.from}`);
        clearTimeout(timers[ctx.from]);
    }
    start(ctx, gotoFlow, ms);
}

// Function to stop the inactivity timer for a user
const stop = (ctx) => {
    if (timers[ctx.from]) {
        clearTimeout(timers[ctx.from]);
        delete timers[ctx.from];
    }
}

module.exports = {
    start,
    reset,
    stop,
    idleFlow,
}
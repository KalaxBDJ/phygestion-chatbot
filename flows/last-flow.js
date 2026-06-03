const lastFlowsByUser = new Map();

const setLastFlow = (ctx, flow) => {
    lastFlowsByUser.set(ctx.from, flow);
}

const getLastFlow = (ctx) => lastFlowsByUser.get(ctx.from);

const clearLastFlow = (ctx) => {
    lastFlowsByUser.delete(ctx.from);
}

module.exports = {
    setLastFlow,
    getLastFlow,
    clearLastFlow,
}

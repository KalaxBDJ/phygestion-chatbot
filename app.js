require('dotenv').config()

const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')
const MetaProvider = require('@bot-whatsapp/provider/meta')
const MockAdapter = require('@bot-whatsapp/database/mock')

//Dashboard dependencies
const express = require('express')
const path = require('path')
const usage = require('./db/usage')

// flows
const flowWelcome = require('./flows/welcome');
const flowRestartFinish = require('./flows/restart');
const flowMajagua = require('./flows/majagua');
const flowMosaico = require('./flows/mosaico');
const flowOporto = require('./flows/oporto');
const flowAltobelo = require('./flows/altobelo');
const flowLisboa = require('./flows/lisboa');
const flowNuevoMilenio = require('./flows/nuevoMilenio');
const flowOceana = require('./flows/oceana');
const flowParaiso = require('./flows/paraiso');
const flowRoterdam = require('./flows/roterdam');
const flowAltea = require('./flows/altea');
const flowVillasol = require('./flows/villasol');
const { idleFlow } = require('./flows/idle-custom');

// env
const {TOKEN, NUMBER_ID, VERIFY_TOKEN } = process.env

const flows = [
    flowWelcome,
    flowMajagua,
    flowMosaico,
    flowOporto,
    flowAltobelo,
    flowLisboa,
    flowNuevoMilenio,
    flowOceana,
    flowParaiso,
    flowRoterdam,
    flowAltea,
    flowVillasol,
    flowRestartFinish,
    idleFlow
]

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow(flows)

    const adapterProvider = createProvider(MetaProvider, {
        jwtToken: TOKEN,
        numberId: NUMBER_ID,
        verifyToken: VERIFY_TOKEN,
        version: 'v16.0',
    })

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    // --- Dashboard (modular)
    const web = express();
    const dashboard = require('./dashboard');
    const PORT = process.env.DASHBOARD_PORT || 3001;
    const UNITS = ['MOSAICO','OPORTO','ALTOBELO','ROTERDAM','LISBOA','NUEVO MILENIO','VILLASOL'];
    dashboard(web, usage, { port: PORT, units: UNITS });
}

main()
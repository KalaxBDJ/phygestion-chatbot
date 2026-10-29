require('dotenv').config()

const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')
const MetaProvider = require('@bot-whatsapp/provider/meta')
const MockAdapter = require('@bot-whatsapp/database/mock')

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
const flowAltea = require('./flows/altea');
const flowVillasol = require('./flows/villasol');
const flowLivorno = require('./flows/livorno');
const { idleFlow } = require('./flows/idle-custom');

//Deprecated
// const flowAmatista = require('./flows/amatista');
// const flowRoterdam = require('./flows/roterdam');

const axios = require('axios')

// The Meta provider swallows send failures and has no request timeout, so a hung
// call blocks its whole send queue. Log every Graph API call and cap its duration.
axios.defaults.timeout = 15000
axios.interceptors.response.use(
    (res) => {
        console.log(`[graph] ${res.status} ${res.config.method} ${res.config.url}`)
        return res
    },
    (err) => {
        console.error(`[graph] FAILED ${err.config?.url}: ${err.code || ''} ${err.response?.status || ''} ${JSON.stringify(err.response?.data || err.message)}`)
        return Promise.reject(err)
    }
)

const {TOKEN, NUMBER_ID, VERIFY_TOKEN } = process.env

console.log(`[env] TOKEN set: ${!!TOKEN} (len ${TOKEN?.length}), NUMBER_ID: ${NUMBER_ID}, VERIFY_TOKEN set: ${!!VERIFY_TOKEN}`)

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
    flowAltea,
    flowVillasol,
    flowLivorno,
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

    // The provider drops webhook events without `messages`, which includes delivery
    // statuses. Log them so a 200 from the send API that never reaches the phone
    // shows Meta's reason (e.g. 131047, 131026, 131042).
    adapterProvider.metHook.metaServer.use((req, _res, next) => {
        if (req.method === 'POST') {
            const change = req.body?.entry?.[0]?.changes?.[0]
            const kind = change?.value?.statuses ? 'statuses' : change?.value?.messages ? 'messages' : 'other'
            console.log(`[webhook] POST field=${change?.field} kind=${kind}${kind === 'other' ? ' ' + JSON.stringify(change?.value).slice(0, 500) : ''}`)
        }
        const statuses = req.body?.entry?.[0]?.changes?.[0]?.value?.statuses
        statuses?.forEach((s) => {
            console.log(`[status] ${s.status} to ${s.recipient_id} id=${s.id}${s.errors ? ' errors=' + JSON.stringify(s.errors) : ''}`)
        })
        next()
    })

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

}

main()
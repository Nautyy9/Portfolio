import express from 'express';
const app = express();

import {createExpressMiddleware} from '@trpc/server/adapters/express'
import {appRouter} from './router/index'
import cors from 'cors'
import {createContext} from "./context/index"

app.use(cors({origin : ['http://127.0.0.1:5173', 'https://nitinsfolio.vercel.app']}))

app.use('/trpc', createExpressMiddleware({
    router : appRouter
}))

app.listen(3000)
import {inferAsyncReturnType ,initTRPC, TRPCError} from '@trpc/server'
import { createContext } from 'vm'

export const t = initTRPC.create();

const applyMiddleware = t.middleware(({ctx , next}) =>{
    return next ({ctx : ctx})
})


export const publicProcedure = t.procedure.use(applyMiddleware)
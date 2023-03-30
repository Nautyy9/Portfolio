import {initTRPC} from '@trpc/server'


export const t = initTRPC.create();

const applyMiddleware = t.middleware(({ctx , next}) =>{
    return next ({ctx : ctx})
})


export const publicProcedure = t.procedure.use(applyMiddleware)
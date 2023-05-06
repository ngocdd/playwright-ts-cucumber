import * as dotenv from 'dotenv';

// create a function to get env information base on dotenv module
export const getEnv = ()=>{
    dotenv.config({
        override: true,
        // path env files
        path: `src/helper/env/.env.${process.env.ENV}`
    })
}
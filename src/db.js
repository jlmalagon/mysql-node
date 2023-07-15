import {createPool } from 'mysql2/promise';
import {DB_HOST, 
    DB_DATABASE,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
} from './config.js'

//DESARROLLO DE PRODUCCION


export const poll = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
}) 







// DESARROLLO LOCALHOST
/* como se invoca desde el servidor se pasan los archivos con variables no locales
export const poll = createPool({
    host: 'localhost',
    user: 'root',
    password: 'resapi3307',
    port: 3307,
    database: 'companydb'
}) 

*/
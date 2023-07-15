import {config} from 'dotenv' //importa la configuracion para leer variables de entorno

config()   // con estos 2 codigos permite leer variables de entorno


console.log(process.env.PORT) //forma para leer variables de entorno

//"process" de Node.js es un objeto global de node
//"env" almacena todas las variables que tiene el computador
//variable PORT
//console.log(process.env.DB_HOST)
//console.log(process.env.DB_PORT)
//console.log(process.env.DB_USER)
//console.log(process.env.DB_PASSWORD)
//console.log(process.env.DB_DATABASE)

export const PORT = process.env.PORT || 3000  //sino existe usa el puerto 3000
export const DB_USER = process.env.DB_USER || 'root'  // si no hay usuario de la base de datos usa el user 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'resapi3307'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_NAME || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3307

// PORT es el puerto del servidor 
//DB_PORT es el puerto de la base de datos

/*
p/t = %/100


   x/2000  =   20/100

   
x*100  = 2000*20
20*2000/100

400+400+400+400+400
30%





*/
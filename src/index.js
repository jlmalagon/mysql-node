

import app from './app.js'
import { PORT } from './config.js'


/* //corta tod esto 
// en package.json tengo que poner un "type": "module" para que pueda importar y exportar
import express from 'express';  
//import {poll} from './db.js';
import employeesRoutes from './routes/employees.router.js'
import indexRoutes from './routes/index.routers.js'
import {PORT} from './config.js'

const app = express();
app.use(express.json()) //metodos q hace q express convierta los datos en json para porder cargarlos

app.use(indexRoutes)  //carga las rutas de index.routers.js
app.use('/api', employeesRoutes) // hace que se reestablesca la ruta de app cargando las ruta de los empleados

app.use((req, res, next) => {
    res.status(404).json({
      message: 'endpoint not found'
    })
  })    
*/
app.listen(PORT)  // servidor basico
//npm i nodemon -D    //para instalar nodemon para los cambios del proyecto;
console.log('The server is running in port', PORT)
//EL PORT agregado es como se configura los servicios en la nuve y servidores remotos




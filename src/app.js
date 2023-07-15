import express from 'express';  
//import {poll} from './db.js';
import employeesRoutes from './routes/employees.router.js'
import indexRoutes from './routes/index.routers.js'
// import {PORT} from './config.js' ya no es necesario


const app = express();
app.use(express.json()) //metodos q hace q express convierta los datos en json para porder cargarlos

app.use(indexRoutes)  //carga las rutas de index.routers.js
app.use('/api', employeesRoutes) // hace que se reestablesca la ruta de app cargando las ruta de los empleados

app.use((req, res, next) => {
    res.status(404).json({
      message: 'endpoint not found'
    })
  }) 

  export default app;  // exporta "app" a donde estaba antes index.js 
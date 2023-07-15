import { Router  } from "express";
import {getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee} from '../controllers/employees.controller.js'

const router = Router()


//Enpoint para poder ejecutarlos, llamada a la web /employees
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees', createEmployee)

/*router.put('/employees/:id', updateEmployee)
put te hace tener que actualizar todos los datos que de una consulta
*/

//patch te permite actualizar parcialmente los datos de una actualizacion no tienen que ser todos 
router.patch('/employee/:id', updateEmployee)

router.delete('/employees/:id', deleteEmployee)

export default router 


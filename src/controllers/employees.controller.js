import {poll} from '../db.js'



//export const getEmployees = (req,res) => res.send('obteniendo epleado')


export const getEmployees = async (req, res) => {

    //throw new Error('My error')
    //creo un 'try{}catch{}' para manejar el error 
try {
   // throw new Error('My error') //para probar si procesa los errores
    const [rows] = await poll.query('SELECT * FROM employee')
    res.json(rows)
    // dentro del 'try' se pone el codigo correcto.
    
} catch (error) {
    //dentro del catch se maneja el error
    return res.status(500).json({message: 'Something goes wrong'})
    
}

    
}


export const getEmployee = async (req, res) => {
    console.log(req.params.id)
    try {
        
    
    const [rows] = await poll.query('SELECT * FROM employee WHERE id=?', [req.params.id])
    console.log(rows)
    if(rows.length <= 0){
        return res.status(404).json({message: 'Employee not found'})
    }


    res.json(rows[0])
    
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'})  //esto no es necesario solo para la prueba del ejercicio
    }
}








export const createEmployee = async (req, res) => {
    const {name, salary} = req.body
    try {
        
   
    
    //poll.query('INSERT INTO employees (name, salar) VALUES(?,?)')
    const [rows] = await poll.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    //rows son las filas de la tabla
    //console.log(req.body)
    res.send({ 
        id: rows.insertId,
        name,
        salary,
     })
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'}) 
    }
} 


export const updateEmployee = async (req,res) => {
    const {id} = req.params /* extrae el parametro 'id' del objeto 'params' de la solicirud. esto
    significa que el codigo espera que la solicitud incluya un parametro de ruta llamado 'id'*/
   const {name, salary} = req.body /* Extrae las propiedades 'name' y 'salary' del objeto 'body' 
   de la solicitud. Esto significa que el codigo espera que la solicitud incluya un cuerpo JSON con las propiedades 'name' y 'salary'*/
    try {
       

    const [result] = await poll.query('UPDATE employee SET IFNULL(?, name), IFNULL(?, salary) WHERE id = ?', [name,salary,id])
    /*Este codigo tiene el dfecto que en caso de pasar solo el nombre o solo el salirio lo demas lo convierte en indefinido y eso 
    lo pasa a la base de datos como null  */

    /*Mejor forma de hacer que los datos no sean pasados como nul en caso de no actualizar sierto elemento de salary o name */

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Employee not found'  /* si no es afectada la tabla de rows es q no se
         entro ningun dato por tanto se pasa el mensage 'Employee not fount'*/
    })

    const [cambio] = await poll.query('SELECT * FROM employee WHERE id = ?', [id])


    //res.json(cambio) devuelve el areglo con todos los datos
    res.json(cambio[0]) //devuelve solo los datos
    console.log(result, cambio)
    //res.json('received')
    //res.send('actualizando empleado')
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'}) 
        
    }

}



export const deleteEmployee = async (req, res) => {
   try {
     
    const [result] = await poll.query('DELETE FROM employee SET id =?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Employee not found'
    })
         
  //  res.send('eliminado empleado') enviar un mensage al usuario
  res.sendStatus(204) // este codigo de estado es q todo fue bien en la consulta pero no devuelve nada

   } catch (error) {
    return res.status(500).json({message: 'Something goes wrong'}) 
    
   }
}
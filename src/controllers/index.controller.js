import { poll } from "../db.js";

export const ping = async (req, res) => {
    //   await poll.query('SELECT 1 + 1 AS result')  crea una consulta SQL;
    const [result] = await poll.query('SELECT 1 + 1 AS result')   // guarda los datos de la consulta SQL en una variable 'result'
    res.json(result[0]);
   }
import { Sequelize } from "sequelize";

const db = new Sequelize ("carreras_db","root", "42742379",{
    host:"localhost",
    dialect:"mysql"
})
export default db;
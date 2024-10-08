// importar la coneccion a ala bbdd
import db from "../database/db.js";
// nos permite mapear el tipo de datos
import { DataTypes } from "sequelize";
import Institution from "./Institution.js";
//import { career } from "./index.js";

const Career = db.define('Career', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    url_study_plan: {
      type: DataTypes.STRING(255)
    },
    course_mode: {
      type: DataTypes.ENUM('Presencial', 'Virtual', 'Mixta'),
      allowNull: false
    },
    quota: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration_type: {
      type: DataTypes.ENUM('semanas', 'meses', 'anios'),
      allowNull: false
    },
    duration: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: false
    },
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    career_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    institution_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Institution,
        key: 'id'
      }
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    } 
  }, {
   // tableName: 'Careers',
    timestamps: true
  });
  
  export default Career
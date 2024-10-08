import db from '../database/db.js'
import { DataTypes } from "sequelize";
import Institution from './Institution.js';  
//import { Sequelize } from 'sequelize'



const User = db.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_type: {
      type: DataTypes.ENUM('admin', 'director', 'personal'),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    institution_id: {
      type: DataTypes.INTEGER,
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
   // tableName: 'Users',
    timestamps: true
  });

  export default User;
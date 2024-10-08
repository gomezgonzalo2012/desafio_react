import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Institution = db.define('Institution', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    document_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    document_number: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255)
    },
    tel: {
      type: DataTypes.STRING(15)
    },
    location_lat: {
      type: DataTypes.DECIMAL(9, 6)
    },
    location_long: {
      type: DataTypes.DECIMAL(9, 6)
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    web_url: {
      type: DataTypes.STRING(255)
    },
    media_url: {
      type: DataTypes.STRING(255)
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
   // tableName: 'institutions',
    timestamps: true
  });
  
  export default Institution;
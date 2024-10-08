const { Sequelize, DataTypes } = require('sequelize');
const config = require('../database/db.js');  // Archivo de configuración de la base de datos

// Inicializar Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Importar todos los modelos
const institution = require('./Institution.js')(sequelize, DataTypes);
const career = require('./Career.js')(sequelize, DataTypes);
const user = require('./User.js')(sequelize, DataTypes);

// Definir relaciones entre los modelos
career.belongsTo(institution, { foreignKey: 'institucion_id' });
user.belongsTo(institution, { foreignKey: 'institucion_id' });
institution.hasMany(career, { as: 'careers' });
institution.hasMany(user, { as:' users' });

// Exportar los modelos y Sequelize
module.exports = {
  sequelize,
  Sequelize,
  institution,
  career,
  user,
};

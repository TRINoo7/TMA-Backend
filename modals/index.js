const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('task-management', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Task = require('./task')(sequelize);

sequelize.sync();

module.exports = { Task, sequelize };

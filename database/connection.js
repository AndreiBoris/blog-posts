'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.BLOG_DB_NAME,
  process.env.BLOG_DB_USER,
  process.env.BLOG_DB_PASS, {
    host: process.env.BLOG_DB_HOST,
    port: process.env.BLOG_DB_PORT,
    dialect: 'postgres',
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  sequelize,
};

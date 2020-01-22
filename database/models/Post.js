'use strict';

const Sequelize = require('sequelize');
const {
  sequelize,
} = require('../connection');

const Model = Sequelize.Model;
class Post extends Model {}

Post.init({
  // attributes
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'post',
  // options
});

module.exports = Post;

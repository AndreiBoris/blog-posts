'use strict';

const express = require('express');
const _ = require('lodash');
const {
  Post,
} = require('../database/models');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    message: 'The posts will be here',
  });
});

router.get('/:id', (req, res) => {
  const { id: postId } = req.params;

  return Post.findAll({
    attributes: ['id', 'name', 'body'],
    where: {
      id: postId,
    },
  }).then(posts => {
    const thePost = _.first(posts);
    if (!thePost) {
      return res.json({
        message: `No post with the ID ${postId} has been found!`,
      });
    }
    return res.json({
      message: `Post Name: ${thePost.name}`,
    });
  })
});

module.exports = router;

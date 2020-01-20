'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    message: 'The posts will be here',
  });
});

router.get('/:id', (req, res) => {
  const { id: postId } = req.params;

  return res.json({
    message: `The post with the ID ${postId} will be here`,
  });
});

module.exports = router;

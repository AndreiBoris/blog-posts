'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    message: 'The authors will be here',
  });
});

module.exports = router;

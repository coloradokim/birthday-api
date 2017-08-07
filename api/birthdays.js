const express = require('express');
const router = express.Router();
const queries = ('../db/queries');

router.get('/', (req, res) => {
  queries.getAll().then(birthdays => {
    res.json({message:'hi!'})
  })
})

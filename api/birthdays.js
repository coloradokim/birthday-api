const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAll().then(teammates => {
    res.json(teammates);
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  queries.getOne(id).then(teammate => {
    if (teammate) {
      res.json(teammate);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  queries.createTeammate(req.body).then(teammates => {
    res.json({
      message: 'You created a new teammate!',
      teammate: teammates[0]
    });
  });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  queries.deleteOne(id).then(() => {
    res.json({
      message: `You successfully deleted the user with id ${id}`
    });
  });
});


module.exports = router;

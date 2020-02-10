const express = require('express');

let router = express.Router();

let model = require('../models/burger.js');

//creating all routes
router.get('/', (req, res) => {
  model.all( (data) => {
    let object = {
      burgers: data
    };
    // console.log(object);
    res.render('index', object)
  });
});

router.post('/api/burgers', (req, res) => {
  model.insert(
    ['name', 'devoured'],
    [req.body.name, req.body.devoured],
    (result) => {
      res.json( {id: result.insertId} );
    }
  );
});

router.put('/api/burgers/:id', (req,res) => {
  let condition = 'id ' + req.params.id;
  console.log('condition', condition);
  model.update(
    {devoured: req.body.devoured},
    condition,
    (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;

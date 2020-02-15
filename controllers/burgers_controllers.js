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
  model.create(
    ['name', 'devoured'],
    [req.body.name, false],
    (result) => {
      res.json( {id: result.insertId} );
    }
  );
});

router.put('/api/burgers/:id', (req,res) => {
  let condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  model.update(
    {devoured: req.body.devoured},
    condition,
    (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        // console.log(result);
        return res.status(200).end();
      } else {
        res.status(404).end();
      }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  model.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(200).end();
    } else {
      res.status(404).end();
    }
  });
});

module.exports = router;

//importing orm functions
const orm = require('../config/orm.js');

let burgers = {
  all: (cb) => {
    orm.all('burgers', (res) => {
      cb(res);
    });
  },
  insert: (cols, vals, cb) => {
    orm.insert('burgers', cols, vals, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  }
}

module.exports = burgers;

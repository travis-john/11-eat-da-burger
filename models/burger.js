//importing orm functions
const orm = require('../config/orm');

let burgers = {
  all: (cb) => {
    orm.all('burgers', (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
    orm.create('burgers', cols, vals, (res) => {
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

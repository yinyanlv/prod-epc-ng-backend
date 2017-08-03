let MMap = require('mmap-json');

let model = [
  {
    name: 'value',
    mapping: 'code'
  },
  {
    name: 'label',
    mapping: 'name'
  }
];

module.exports = function (data) {

  return new MMap().mapping(model, data);
};
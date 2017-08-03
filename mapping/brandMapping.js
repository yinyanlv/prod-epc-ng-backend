let MMap = require('mmap-json');

let model = [
  {
    name: 'value',
    mapping: 'brandCode'
  },
  {
    name: 'label',
    mapping: 'brandName'
  }
];

module.exports = function (data) {

  return new MMap().mapping(model, data);
};
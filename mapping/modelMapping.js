let MMap = require('mmap-json');

let model = [
  {
    name: 'value',
    mapping: 'modelCode'
  },
  {
    name: 'label',
    mapping: 'modelName'
  }
];

module.exports = function (data) {

  return new MMap().mapping(model, data);
};
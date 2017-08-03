let MMap = require('mmap-json');

let model = [
  {
    name: 'value',
    mapping: 'modelGroupCode'
  },
  {
    name: 'label',
    mapping: 'modelGroupName'
  }
];

module.exports = function (data) {

  return new MMap().mapping(model, data);
};
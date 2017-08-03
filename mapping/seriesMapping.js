let MMap = require('mmap-json');

let model = [
  {
    name: 'value',
    mapping: 'seriesCode'
  },
  {
    name: 'label',
    mapping: 'seriesName'
  }
];

module.exports = function (data) {

  return new MMap().mapping(model, data);
};
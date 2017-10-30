let gu = require('guthrie-js');
let baseController = require('../../../common/baseController');
let selectorController = new gu.controller.inherit(baseController);
let catalogService = require('../../../serivces/catalogService');

selectorController.actions = {
  catalog: {
    GET: function*(req, res) {

      let parentGrade = req.query.parentGrade;
      let parentCode = req.query.parentCode;
      let list;

      switch (parentGrade) {
        case 'g1':
          list = yield catalogService.getGrade2(req, parentCode);
          break;
        case 'g2':
          list = yield catalogService.getGrade3(req, parentCode);
          break;
        case 'g3':
          list = yield catalogService.getGrade4(req, parentCode);
          break;
        case 'g4':
          list = yield catalogService.getGrade5(req, parentCode);
          break;
        default:
          list = yield catalogService.getGrade1(req);
          break;
      }

      res.send({
        success: true,
        list
      });
    }
  }
};

module.exports = selectorController;
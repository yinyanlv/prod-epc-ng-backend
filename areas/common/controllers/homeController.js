let gu = require('guthrie-js');
let baseController = require('../../../common/baseController');
let homeController = new gu.controller.inherit(baseController);

homeController.actions = {
  index: {
    GET: function (req, res) {

      this.viewBag().title = 'prod-epc-ng-server';

      res.render('home/index');
    }
  }
};

module.exports = homeController;

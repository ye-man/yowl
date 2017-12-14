'use strict';

module.exports = function(app, io) {
  var controller = require('../controllers/alertController')(io);

  app.route('/api/alerts')
    .get(controller.list_all_alerts)
    .post(controller.create_an_alert);

  app.route('/api/alerts/:alertId')
    .get(controller.read_an_alert);
};
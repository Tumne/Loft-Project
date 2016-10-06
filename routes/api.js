/*
 * Serve JSON to our AngularJS client
 */
var jsonData = require('../data.json');
var mockData = require('../mock_db_data.json');

exports.getAllUsers = function (req, res) {
  res.send(jsonData);
};

exports.getDataByUserId = function (req, res) {
  console.log("req.params.id", req.params.id);
  res.send(mockData);
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  model: _propTypes2.default.object.isRequired,
  setModel: _propTypes2.default.func.isRequired,
  setProperty: _propTypes2.default.func.isRequired,
  bindInput: _propTypes2.default.func.isRequired,
  bindToChangeEvent: _propTypes2.default.func.isRequired
};
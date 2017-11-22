'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

var _stats = require('./stats');

var _stats2 = _interopRequireDefault(_stats);

var _stats_wrapper = require('./stats_wrapper');

var _stats_wrapper2 = _interopRequireDefault(_stats_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _util.deprecate)(function (app) {
  app.loopback.modelBuilder.mixins.define('Stats', _stats2.default);
  app.loopback.modelBuilder.mixins.define('StatsWrapper', _stats_wrapper2.default);
}, 'DEPRECATED: Use mixinSources, see https://github.com/jonathan-casarrubias/loopback-stats-mixin#mixinsources');
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImFwcCIsImxvb3BiYWNrIiwibW9kZWxCdWlsZGVyIiwibWl4aW5zIiwiZGVmaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUscUJBQ2IsZUFBTztBQUNMQSxNQUFJQyxRQUFKLENBQWFDLFlBQWIsQ0FBMEJDLE1BQTFCLENBQWlDQyxNQUFqQyxDQUF3QyxPQUF4QztBQUNBSixNQUFJQyxRQUFKLENBQWFDLFlBQWIsQ0FBMEJDLE1BQTFCLENBQWlDQyxNQUFqQyxDQUF3QyxjQUF4QztBQUNELENBSlksRUFLYiw2R0FMYSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZXByZWNhdGV9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IFN0YXRzIGZyb20gJy4vc3RhdHMnO1xuaW1wb3J0IFN0YXRzV3JhcHBlciBmcm9tICcuL3N0YXRzX3dyYXBwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZXByZWNhdGUoXG4gIGFwcCA9PiB7XG4gICAgYXBwLmxvb3BiYWNrLm1vZGVsQnVpbGRlci5taXhpbnMuZGVmaW5lKCdTdGF0cycsIFN0YXRzKTtcbiAgICBhcHAubG9vcGJhY2subW9kZWxCdWlsZGVyLm1peGlucy5kZWZpbmUoJ1N0YXRzV3JhcHBlcicsIFN0YXRzV3JhcHBlcik7XG4gIH0sXG4gICdERVBSRUNBVEVEOiBVc2UgbWl4aW5Tb3VyY2VzLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pvbmF0aGFuLWNhc2FycnViaWFzL2xvb3BiYWNrLXN0YXRzLW1peGluI21peGluc291cmNlcydcbik7XG4iXX0=

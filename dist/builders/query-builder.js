'use strict';
/**
 * Query Builder Dependencies
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds Loopback Query
 */
var QueryBuilder = function () {
    /**
     * Setters
     */
    function QueryBuilder(ctx) {
        (0, _classCallCheck3.default)(this, QueryBuilder);
        this.ctx = ctx;
    }

    (0, _createClass3.default)(QueryBuilder, [{
        key: 'onComplete',
        value: function onComplete(next) {
            this.finish = next;return this;
        }
        /**
         * Build Query
         */

    }, {
        key: 'build',
        value: function build() {
            // Build query object in scope
            var query = {};
            // lets add a where statement
            query.where = this.ctx.params.where || {};
            // If stat type is relation, then we set the root id
            if ((this.ctx.type === 'relation' || this.ctx.type === 'nested') && this.ctx.params.id) query.where[this.ctx.params.pk] = this.ctx.params.id;
            // query.where[this.ctx.Model.settings.relations[this.ctx.params.relation].] = this.ctx.params.id;
            // If stat type is relation, then we set the root id
            if (this.ctx.type === 'relation' && this.ctx.params.relation) query.include = this.ctx.params.relation;
            // Set Range
            if (this.ctx.params.range && this.ctx.count.on) {
                query.where[this.ctx.count.on] = {};
                switch (this.ctx.params.range) {
                    case 'hourly':
                        query.where[this.ctx.count.on].gt = (0, _moment2.default)(this.ctx.nowISOString).subtract(24, 'hours').toDate();
                        break;
                    case 'daily':
                        query.where[this.ctx.count.on].gt = (0, _moment2.default)(this.ctx.nowISOString).subtract(7, 'days').toDate();
                        break;
                    case 'weekly':
                        query.where[this.ctx.count.on].gt = (0, _moment2.default)(this.ctx.nowISOString).subtract(4, 'weeks').toDate();
                        break;
                    case 'monthly':
                        query.where[this.ctx.count.on].gt = (0, _moment2.default)(this.ctx.nowISOString).subtract(12, 'months').toDate();
                        break;
                    case 'yearly':
                        query.where[this.ctx.count.on].gt = (0, _moment2.default)(this.ctx.nowISOString).subtract(5, 'years').toDate();
                        break;
                    case 'custom':
                        query.where[this.ctx.count.on].gte = this.ctx.params.custom.start;
                        query.where[this.ctx.count.on].lte = this.ctx.params.custom.end;
                        break;
                }
            }
            // Return result query
            this.finish(null, query);
        }
    }]);
    return QueryBuilder;
}();

exports.default = QueryBuilder;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LWJ1aWxkZXIuanMiXSwibmFtZXMiOlsiUXVlcnlCdWlsZGVyIiwiY3R4IiwibmV4dCIsImZpbmlzaCIsInF1ZXJ5Iiwid2hlcmUiLCJwYXJhbXMiLCJ0eXBlIiwiaWQiLCJwayIsInJlbGF0aW9uIiwiaW5jbHVkZSIsInJhbmdlIiwiY291bnQiLCJvbiIsImd0Iiwibm93SVNPU3RyaW5nIiwic3VidHJhY3QiLCJ0b0RhdGUiLCJndGUiLCJjdXN0b20iLCJzdGFydCIsImx0ZSIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7QUFDQTs7O0lBR3FCQSxZO0FBQ2pCOzs7QUFHQSwwQkFBWUMsR0FBWixFQUFpQjtBQUFBO0FBQUUsYUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQWlCOzs7O21DQUN6QkMsSSxFQUFNO0FBQUUsaUJBQUtDLE1BQUwsR0FBY0QsSUFBZCxDQUFvQixPQUFPLElBQVA7QUFBYztBQUNyRDs7Ozs7O2dDQUdRO0FBQ0o7QUFDQSxnQkFBSUUsUUFBUSxFQUFaO0FBQ0E7QUFDQUEsa0JBQU1DLEtBQU4sR0FBYyxLQUFLSixHQUFMLENBQVNLLE1BQVQsQ0FBZ0JELEtBQWhCLElBQXlCLEVBQXZDO0FBQ0E7QUFDQSxnQkFBSSxDQUFDLEtBQUtKLEdBQUwsQ0FBU00sSUFBVCxLQUFrQixVQUFsQixJQUFnQyxLQUFLTixHQUFMLENBQVNNLElBQVQsS0FBa0IsUUFBbkQsS0FBZ0UsS0FBS04sR0FBTCxDQUFTSyxNQUFULENBQWdCRSxFQUFwRixFQUNJSixNQUFNQyxLQUFOLENBQVksS0FBS0osR0FBTCxDQUFTSyxNQUFULENBQWdCRyxFQUE1QixJQUFrQyxLQUFLUixHQUFMLENBQVNLLE1BQVQsQ0FBZ0JFLEVBQWxEO0FBQ0o7QUFDQTtBQUNBLGdCQUFJLEtBQUtQLEdBQUwsQ0FBU00sSUFBVCxLQUFrQixVQUFsQixJQUFnQyxLQUFLTixHQUFMLENBQVNLLE1BQVQsQ0FBZ0JJLFFBQXBELEVBQ0lOLE1BQU1PLE9BQU4sR0FBZ0IsS0FBS1YsR0FBTCxDQUFTSyxNQUFULENBQWdCSSxRQUFoQztBQUNKO0FBQ0EsZ0JBQUksS0FBS1QsR0FBTCxDQUFTSyxNQUFULENBQWdCTSxLQUFoQixJQUF5QixLQUFLWCxHQUFMLENBQVNZLEtBQVQsQ0FBZUMsRUFBNUMsRUFBZ0Q7QUFDNUNWLHNCQUFNQyxLQUFOLENBQVksS0FBS0osR0FBTCxDQUFTWSxLQUFULENBQWVDLEVBQTNCLElBQWlDLEVBQWpDO0FBQ0Esd0JBQVEsS0FBS2IsR0FBTCxDQUFTSyxNQUFULENBQWdCTSxLQUF4QjtBQUNJLHlCQUFLLFFBQUw7QUFDSVIsOEJBQU1DLEtBQU4sQ0FBWSxLQUFLSixHQUFMLENBQVNZLEtBQVQsQ0FBZUMsRUFBM0IsRUFBK0JDLEVBQS9CLEdBQW9DLHNCQUFPLEtBQUtkLEdBQUwsQ0FBU2UsWUFBaEIsRUFBOEJDLFFBQTlCLENBQXVDLEVBQXZDLEVBQTJDLE9BQTNDLEVBQW9EQyxNQUFwRCxFQUFwQztBQUNBO0FBQ0oseUJBQUssT0FBTDtBQUNJZCw4QkFBTUMsS0FBTixDQUFZLEtBQUtKLEdBQUwsQ0FBU1ksS0FBVCxDQUFlQyxFQUEzQixFQUErQkMsRUFBL0IsR0FBb0Msc0JBQU8sS0FBS2QsR0FBTCxDQUFTZSxZQUFoQixFQUE4QkMsUUFBOUIsQ0FBdUMsQ0FBdkMsRUFBMEMsTUFBMUMsRUFBa0RDLE1BQWxELEVBQXBDO0FBQ0E7QUFDSix5QkFBSyxRQUFMO0FBQ0lkLDhCQUFNQyxLQUFOLENBQVksS0FBS0osR0FBTCxDQUFTWSxLQUFULENBQWVDLEVBQTNCLEVBQStCQyxFQUEvQixHQUFvQyxzQkFBTyxLQUFLZCxHQUFMLENBQVNlLFlBQWhCLEVBQThCQyxRQUE5QixDQUF1QyxDQUF2QyxFQUEwQyxPQUExQyxFQUFtREMsTUFBbkQsRUFBcEM7QUFDQTtBQUNKLHlCQUFLLFNBQUw7QUFDSWQsOEJBQU1DLEtBQU4sQ0FBWSxLQUFLSixHQUFMLENBQVNZLEtBQVQsQ0FBZUMsRUFBM0IsRUFBK0JDLEVBQS9CLEdBQW9DLHNCQUFPLEtBQUtkLEdBQUwsQ0FBU2UsWUFBaEIsRUFBOEJDLFFBQTlCLENBQXVDLEVBQXZDLEVBQTJDLFFBQTNDLEVBQXFEQyxNQUFyRCxFQUFwQztBQUNBO0FBQ0oseUJBQUssUUFBTDtBQUNJZCw4QkFBTUMsS0FBTixDQUFZLEtBQUtKLEdBQUwsQ0FBU1ksS0FBVCxDQUFlQyxFQUEzQixFQUErQkMsRUFBL0IsR0FBb0Msc0JBQU8sS0FBS2QsR0FBTCxDQUFTZSxZQUFoQixFQUE4QkMsUUFBOUIsQ0FBdUMsQ0FBdkMsRUFBMEMsT0FBMUMsRUFBbURDLE1BQW5ELEVBQXBDO0FBQ0E7QUFDSix5QkFBSyxRQUFMO0FBQ0lkLDhCQUFNQyxLQUFOLENBQVksS0FBS0osR0FBTCxDQUFTWSxLQUFULENBQWVDLEVBQTNCLEVBQStCSyxHQUEvQixHQUFxQyxLQUFLbEIsR0FBTCxDQUFTSyxNQUFULENBQWdCYyxNQUFoQixDQUF1QkMsS0FBNUQ7QUFDQWpCLDhCQUFNQyxLQUFOLENBQVksS0FBS0osR0FBTCxDQUFTWSxLQUFULENBQWVDLEVBQTNCLEVBQStCUSxHQUEvQixHQUFxQyxLQUFLckIsR0FBTCxDQUFTSyxNQUFULENBQWdCYyxNQUFoQixDQUF1QkcsR0FBNUQ7QUFDQTtBQW5CUjtBQXFCSDtBQUNEO0FBQ0EsaUJBQUtwQixNQUFMLENBQVksSUFBWixFQUFrQkMsS0FBbEI7QUFDSDs7Ozs7a0JBaERnQkosWSIsImZpbGUiOiJxdWVyeS1idWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBRdWVyeSBCdWlsZGVyIERlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG4vKipcbiAqIEJ1aWxkcyBMb29wYmFjayBRdWVyeVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeUJ1aWxkZXIge1xuICAgIC8qKlxuICAgICAqIFNldHRlcnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjdHgpIHsgdGhpcy5jdHggPSBjdHg7IH1cbiAgICBvbkNvbXBsZXRlKG5leHQpIHsgdGhpcy5maW5pc2ggPSBuZXh0OyByZXR1cm4gdGhpczsgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIFF1ZXJ5XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHF1ZXJ5IG9iamVjdCBpbiBzY29wZVxuICAgICAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICAgICAgLy8gbGV0cyBhZGQgYSB3aGVyZSBzdGF0ZW1lbnRcbiAgICAgICAgcXVlcnkud2hlcmUgPSB0aGlzLmN0eC5wYXJhbXMud2hlcmUgfHwge307XG4gICAgICAgIC8vIElmIHN0YXQgdHlwZSBpcyByZWxhdGlvbiwgdGhlbiB3ZSBzZXQgdGhlIHJvb3QgaWRcbiAgICAgICAgaWYgKCh0aGlzLmN0eC50eXBlID09PSAncmVsYXRpb24nIHx8IHRoaXMuY3R4LnR5cGUgPT09ICduZXN0ZWQnKSAmJiB0aGlzLmN0eC5wYXJhbXMuaWQpXG4gICAgICAgICAgICBxdWVyeS53aGVyZVt0aGlzLmN0eC5wYXJhbXMucGtdID0gdGhpcy5jdHgucGFyYW1zLmlkO1xuICAgICAgICAvLyBxdWVyeS53aGVyZVt0aGlzLmN0eC5Nb2RlbC5zZXR0aW5ncy5yZWxhdGlvbnNbdGhpcy5jdHgucGFyYW1zLnJlbGF0aW9uXS5dID0gdGhpcy5jdHgucGFyYW1zLmlkO1xuICAgICAgICAvLyBJZiBzdGF0IHR5cGUgaXMgcmVsYXRpb24sIHRoZW4gd2Ugc2V0IHRoZSByb290IGlkXG4gICAgICAgIGlmICh0aGlzLmN0eC50eXBlID09PSAncmVsYXRpb24nICYmIHRoaXMuY3R4LnBhcmFtcy5yZWxhdGlvbilcbiAgICAgICAgICAgIHF1ZXJ5LmluY2x1ZGUgPSB0aGlzLmN0eC5wYXJhbXMucmVsYXRpb247XG4gICAgICAgIC8vIFNldCBSYW5nZVxuICAgICAgICBpZiAodGhpcy5jdHgucGFyYW1zLnJhbmdlICYmIHRoaXMuY3R4LmNvdW50Lm9uKSB7XG4gICAgICAgICAgICBxdWVyeS53aGVyZVt0aGlzLmN0eC5jb3VudC5vbl0gPSB7fTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jdHgucGFyYW1zLnJhbmdlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG91cmx5JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmVbdGhpcy5jdHguY291bnQub25dLmd0ID0gbW9tZW50KHRoaXMuY3R4Lm5vd0lTT1N0cmluZykuc3VidHJhY3QoMjQsICdob3VycycpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkYWlseSc6XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlW3RoaXMuY3R4LmNvdW50Lm9uXS5ndCA9IG1vbWVudCh0aGlzLmN0eC5ub3dJU09TdHJpbmcpLnN1YnRyYWN0KDcsICdkYXlzJykudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWtseSc6XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlW3RoaXMuY3R4LmNvdW50Lm9uXS5ndCA9IG1vbWVudCh0aGlzLmN0eC5ub3dJU09TdHJpbmcpLnN1YnRyYWN0KDQsICd3ZWVrcycpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtb250aGx5JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmVbdGhpcy5jdHguY291bnQub25dLmd0ID0gbW9tZW50KHRoaXMuY3R4Lm5vd0lTT1N0cmluZykuc3VidHJhY3QoMTIsICdtb250aHMnKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAneWVhcmx5JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmVbdGhpcy5jdHguY291bnQub25dLmd0ID0gbW9tZW50KHRoaXMuY3R4Lm5vd0lTT1N0cmluZykuc3VidHJhY3QoNSwgJ3llYXJzJykudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlW3RoaXMuY3R4LmNvdW50Lm9uXS5ndGUgPSB0aGlzLmN0eC5wYXJhbXMuY3VzdG9tLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZVt0aGlzLmN0eC5jb3VudC5vbl0ubHRlID0gdGhpcy5jdHgucGFyYW1zLmN1c3RvbS5lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiByZXN1bHQgcXVlcnlcbiAgICAgICAgdGhpcy5maW5pc2gobnVsbCwgcXVlcnkpO1xuICAgIH1cbn0iXX0=

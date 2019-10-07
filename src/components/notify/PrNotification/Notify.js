"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = require("events");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var createUUID = function createUUID() {
  var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

var Constants = {
  CHANGE: 'change',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

var PrNotify =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(PrNotify, _EventEmitter);

  function PrNotify() {
    var _this;

    _classCallCheck(this, PrNotify);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PrNotify).call(this));
    _this.listNotify = [];
    return _this;
  }

  _createClass(PrNotify, [{
    key: "create",
    value: function create(notify) {
      var defaultNotify = {
        id: createUUID(),
        type: 'info',
        title: null,
        message: null,
        timeOut: 5000,
        anchor: {
          horizontal: 'left',
          vertical: 'bottom'
        }
      };

      if (notify.priority) {
        this.listNotify.unshift(Object.assign(defaultNotify, notify));
      } else {
        this.listNotify.push(Object.assign(defaultNotify, notify));
      }

      this.emitChange();
    }
  }, {
    key: "info",
    value: function info(_ref) {
      var message = _ref.message,
          title = _ref.title,
          anchor = _ref.anchor,
          _ref$timeOut = _ref.timeOut,
          timeOut = _ref$timeOut === void 0 ? 3000 : _ref$timeOut,
          priority = _ref.priority,
          behaviour = _ref.behaviour;
      this.create({
        type: Constants.INFO,
        message: message,
        title: title,
        timeOut: timeOut,
        priority: priority,
        anchor: anchor,
        behaviour: behaviour
      });
    }
  }, {
    key: "success",
    value: function success(_ref2) {
      var message = _ref2.message,
          title = _ref2.title,
          anchor = _ref2.anchor,
          _ref2$timeOut = _ref2.timeOut,
          timeOut = _ref2$timeOut === void 0 ? 3000 : _ref2$timeOut,
          priority = _ref2.priority,
          behaviour = _ref2.behaviour;
      this.create({
        type: Constants.SUCCESS,
        message: message,
        title: title,
        timeOut: timeOut,
        priority: priority,
        anchor: anchor,
        behaviour: behaviour
      });
    }
  }, {
    key: "warning",
    value: function warning(_ref3) {
      var message = _ref3.message,
          title = _ref3.title,
          anchor = _ref3.anchor,
          _ref3$timeOut = _ref3.timeOut,
          timeOut = _ref3$timeOut === void 0 ? 3000 : _ref3$timeOut,
          priority = _ref3.priority,
          behaviour = _ref3.behaviour;
      this.create({
        type: Constants.WARNING,
        message: message,
        title: title,
        timeOut: timeOut,
        priority: priority,
        anchor: anchor,
        behaviour: behaviour
      });
    }
  }, {
    key: "error",
    value: function error(_ref4) {
      var message = _ref4.message,
          title = _ref4.title,
          anchor = _ref4.anchor,
          _ref4$timeOut = _ref4.timeOut,
          timeOut = _ref4$timeOut === void 0 ? 3000 : _ref4$timeOut,
          priority = _ref4.priority,
          behaviour = _ref4.behaviour;
      this.create({
        type: Constants.ERROR,
        message: message,
        title: title,
        timeOut: timeOut,
        priority: priority,
        anchor: anchor,
        behaviour: behaviour
      });
    }
  }, {
    key: "remove",
    value: function remove(notification) {
      this.listNotify = this.listNotify.filter(function (n) {
        return notification.id !== n.id;
      });
      this.emitChange();
    }
  }, {
    key: "emitChange",
    value: function emitChange() {
      this.emit(Constants.CHANGE, this.listNotify);
    }
  }, {
    key: "addChangeListener",
    value: function addChangeListener(callback) {
      this.addListener(Constants.CHANGE, callback);
    }
  }, {
    key: "removeChangeListener",
    value: function removeChangeListener(callback) {
      this.removeListener(Constants.CHANGE, callback);
    }
  }]);

  return PrNotify;
}(_events.EventEmitter);

var _default = new PrNotify();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qck5vdGlmaWNhdGlvbi9Ob3RpZnkuanN4Il0sIm5hbWVzIjpbImNyZWF0ZVVVSUQiLCJwYXR0ZXJuIiwicmVwbGFjZSIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsInYiLCJ0b1N0cmluZyIsIkNvbnN0YW50cyIsIkNIQU5HRSIsIklORk8iLCJTVUNDRVNTIiwiV0FSTklORyIsIkVSUk9SIiwiUHJOb3RpZnkiLCJsaXN0Tm90aWZ5Iiwibm90aWZ5IiwiZGVmYXVsdE5vdGlmeSIsImlkIiwidHlwZSIsInRpdGxlIiwibWVzc2FnZSIsInRpbWVPdXQiLCJhbmNob3IiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJwcmlvcml0eSIsInVuc2hpZnQiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIiwiZW1pdENoYW5nZSIsImJlaGF2aW91ciIsImNyZWF0ZSIsIm5vdGlmaWNhdGlvbiIsImZpbHRlciIsIm4iLCJlbWl0IiwiY2FsbGJhY2siLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiRXZlbnRFbWl0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxPQUFPLEdBQUcsc0NBQWhCO0FBQ0EsU0FBT0EsT0FBTyxDQUFDQyxPQUFSLENBQWdCLE9BQWhCLEVBQXlCLFVBQUNDLENBQUQsRUFBTztBQUNyQyxRQUFNQyxDQUFDLEdBQUlDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUFqQixHQUF1QixDQUFqQztBQUNBLFFBQU1DLENBQUMsR0FBR0osQ0FBQyxLQUFLLEdBQU4sR0FBWUMsQ0FBWixHQUFrQkEsQ0FBQyxHQUFHLEdBQUwsR0FBWSxHQUF2QztBQUNBLFdBQU9HLENBQUMsQ0FBQ0MsUUFBRixDQUFXLEVBQVgsQ0FBUDtBQUNELEdBSk0sQ0FBUDtBQUtELENBUEQ7O0FBU0EsSUFBTUMsU0FBUyxHQUFHO0FB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QUFTLENBQUNDLE1BQXBCLEVBQTRCLEtBQUtNLFVBQWpDO0FBQ0Q7OztzQ0FFaUJ1QixRLEVBQVU7QUFDMUIsV0FBS0MsV0FBTCxDQUFpQi9CLFNBQVMsQ0FBQ0MsTUFBM0IsRUFBbUM2QixRQUFuQztBQUNEOzs7eUNBRW9CQSxRLEVBQVU7QUFDN0IsV0FBS0UsY0FBTCxDQUFvQmhDLFNBQVMsQ0FBQ0MsTUFBOUIsRUFBc0M2QixRQUF0QztBQUNEOzs7O0VBbkdvQkcsb0I7O2VBc0dSLElBQUkzQixRQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xyXG5cclxuY29uc3QgY3JlYXRlVVVJRCA9ICgpID0+IHtcclxuICBjb25zdCBwYXR0ZXJuID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCc7XHJcbiAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcclxuICAgIGNvbnN0IHYgPSBjID09PSAneCcgPyByIDogKChyICYgMHgzKSB8IDB4OCk7XHJcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBDb25zdGFudHMgPSB7XHJcbiAgQ0hBTkdFOiAnY2hhbmdlJyxcclxuICBJTkZPOiAnaW5mbycsXHJcbiAgU1VDQ0VTUzogJ3N1Y2Nlc3MnLFxyXG4gIFdBUk5JTkc6ICd3YXJuaW5nJyxcclxuICBFUlJPUjogJ2Vycm9yJyxcclxufTtcclxuXHJcbmNsYXNzIFByTm90aWZ5IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmxpc3ROb3RpZnkgPSBbXTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShub3RpZnkpIHtcclxuICAgIGNvbnN0IGRlZmF1bHROb3RpZnkgPSB7XHJcbiAgICAgIGlkOiBjcmVhdGVVVUlEKCksXHJcbiAgICAgIHR5cGU6ICdpbmZvJyxcclxuICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIHRpbWVPdXQ6IDUwMDAsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIGhvcml6b250YWw6ICdsZWZ0JyxcclxuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgaWYgKG5vdGlmeS5wcmlvcml0eSkge1xyXG4gICAgICB0aGlzLmxpc3ROb3RpZnkudW5zaGlmdChPYmplY3QuYXNzaWduKGRlZmF1bHROb3RpZnksIG5vdGlmeSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5saXN0Tm90aWZ5LnB1c2goT2JqZWN0LmFzc2lnbihkZWZhdWx0Tm90aWZ5LCBub3RpZnkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5mbyh7XHJcbiAgICBtZXNzYWdlLCB0aXRsZSwgYW5jaG9yLCB0aW1lT3V0ID0gMzAwMCwgcHJpb3JpdHksIGJlaGF2aW91cixcclxuICB9KSB7IFxyXG4gICAgdGhpcy5jcmVhdGUoe1xyXG4gICAgICB0eXBlOiBDb25zdGFudHMuSU5GTyxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRpbWVPdXQsXHJcbiAgICAgIHByaW9yaXR5LFxyXG4gICAgICBhbmNob3IsXHJcbiAgICAgIGJlaGF2aW91cixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3VjY2Vzcyh7XHJcbiAgICBtZXNzYWdlLCB0aXRsZSwgYW5jaG9yLCB0aW1lT3V0ID0gMzAwMCwgcHJpb3JpdHksIGJlaGF2aW91cixcclxuICB9KSB7IFxyXG4gICAgdGhpcy5jcmVhdGUoe1xyXG4gICAgICB0eXBlOiBDb25zdGFudHMuU1VDQ0VTUyxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRpbWVPdXQsXHJcbiAgICAgIHByaW9yaXR5LFxyXG4gICAgICBhbmNob3IsXHJcbiAgICAgIGJlaGF2aW91cixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgd2FybmluZyh7XHJcbiAgICBtZXNzYWdlLCB0aXRsZSwgYW5jaG9yLCB0aW1lT3V0ID0gMzAwMCwgcHJpb3JpdHksIGJlaGF2aW91cixcclxuICB9KSB7XHJcblxyXG4gICAgdGhpcy5jcmVhdGUoe1xyXG4gICAgICB0eXBlOiBDb25zdGFudHMuV0FSTklORyxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRpbWVPdXQsXHJcbiAgICAgIHByaW9yaXR5LFxyXG4gICAgICBhbmNob3IsXHJcbiAgICAgIGJlaGF2aW91cixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXJyb3Ioe1xyXG4gICAgbWVzc2FnZSwgdGl0bGUsIGFuY2hvciwgdGltZU91dCA9IDMwMDAsIHByaW9yaXR5LCBiZWhhdmlvdXIsXHJcbiAgfSkgeyBcclxuICAgIHRoaXMuY3JlYXRlKHtcclxuICAgICAgdHlwZTogQ29uc3RhbnRzLkVSUk9SLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGltZU91dCxcclxuICAgICAgcHJpb3JpdHksXHJcbiAgICAgIGFuY2hvcixcclxuICAgICAgYmVoYXZpb3VyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVtb3ZlKG5vdGlmaWNhdGlvbikge1xyXG4gICAgdGhpcy5saXN0Tm90aWZ5ID0gdGhpcy5saXN0Tm90aWZ5LmZpbHRlcihuID0+IG5vdGlmaWNhdGlvbi5pZCAhPT0gbi5pZCk7XHJcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGVtaXRDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmVtaXQoQ29uc3RhbnRzLkNIQU5HRSwgdGhpcy5saXN0Tm90aWZ5KTtcclxuICB9XHJcblxyXG4gIGFkZENoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLmFkZExpc3RlbmVyKENvbnN0YW50cy5DSEFOR0UsIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENvbnN0YW50cy5DSEFOR0UsIGNhbGxiYWNrKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQck5vdGlmeSgpOyJdfQ==
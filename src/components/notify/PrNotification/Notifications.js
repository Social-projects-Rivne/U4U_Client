"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Notify = _interopRequireDefault(require("./Notify"));

var _Notification = _interopRequireDefault(require("./Notification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PrNotifications =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PrNotifications, _React$Component);

  function PrNotifications() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PrNotifications);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PrNotifications)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      notifications: []
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillMount", function () {
      _Notify["default"].addChangeListener(_this.handleStoreChange);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _Notify["default"].removeChangeListener(_this.handleStoreChange);
    });

    _defineProperty(_assertThisInitialized(_this), "handleStoreChange", function (notifications) {
      _this.setState({
        notifications: notifications
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestHide", function (notification) {
      _Notify["default"].remove(notification);
    });

    return _this;
  }

  _createClass(PrNotifications, [{
    key: "render",
    value: function render() {
      var notifications = this.state.notifications;
      return _react["default"].createElement(_Notification["default"], {
        notifications: notifications,
        onRequestHide: this.handleRequestHide
      });
    }
  }]);

  return PrNotifications;
}(_react["default"].Component);

var _default = PrNotifications;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qck5vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25zLmpzeCJdLCJuYW1lcyI6WyJQck5vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwiTm90aWZ5IiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJoYW5kbGVTdG9yZUNoYW5nZSIsInJlbW92ZUNoYW5nZUxpc3RlbmVyIiwic2V0U3RhdGUiLCJub3RpZmljYXRpb24iLCJyZW1vdmUiLCJzdGF0ZSIsImhhbmRsZVJlcXVlc3RIaWRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFFSTtBQUNOQyxNQUFBQSxhQUFhLEVBQUU7QUFEVCxLOzt5RUFJYSxZQUFNO0FBQ3pCQyx5QkFBT0MsaUJBQVAsQ0FBeUIsTUFBS0MsaUJBQTlCO0FBQ0QsSzs7MkVBRXNCLFlBQU07QUFDM0JGLHlCQUFPRyxvQkFBUCxDQUE0QixNQUFLRCxpQkFBakM7QUFDRCxLOzt3RUFFbUIsVUFBQ0gsYUFBRCxFQUFtQjtBQUNyQyxZQUFLSyxRQUFMLENBQWM7QUFDWkwsUUFBQUEsYUFBYSxFQUFiQTtBQURZLE9BQWQ7QUFHRCxLOzt3RUFFbUIsVUFBQ00sWUFBRCxFQUFrQjtBQUNwQ0wseUJBQU9NLE1BQVAsQ0FBY0QsWUFBZDtBQUNELEs7Ozs7Ozs7NkJBR1E7QUFBQSxVQUNDTixhQURELEdBQ21CLEtBQUtRLEtBRHhCLENBQ0NSLGFBREQ7QUFHUCxhQUNFLGdDQUFDLHdCQUFEO0FBQ0UsUUFBQSxhQUFhLEVBQUVBLGFBRGpCO0FBRUUsUUFBQSxhQUFhLEVBQUUsS0FBS1M7QUFGdEIsUUFERjtBQU1EOzs7O0VBbEMyQkMsa0JBQU1DLFM7O2VBcUNyQlosZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOb3RpZnkgZnJvbSAnLi9Ob3RpZnknO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJztcclxuXHJcbmNsYXNzIFByTm90aWZpY2F0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgbm90aWZpY2F0aW9uczogW11cclxuICB9O1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XHJcbiAgICBOb3RpZnkuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5oYW5kbGVTdG9yZUNoYW5nZSk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICBOb3RpZnkucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5oYW5kbGVTdG9yZUNoYW5nZSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU3RvcmVDaGFuZ2UgPSAobm90aWZpY2F0aW9ucykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG5vdGlmaWNhdGlvbnNcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlcXVlc3RIaWRlID0gKG5vdGlmaWNhdGlvbikgPT4ge1xyXG4gICAgTm90aWZ5LnJlbW92ZShub3RpZmljYXRpb24pO1xyXG4gIH07XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5vdGlmaWNhdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5vdGlmaWNhdGlvblxyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM9e25vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgb25SZXF1ZXN0SGlkZT17dGhpcy5oYW5kbGVSZXF1ZXN0SGlkZX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQck5vdGlmaWNhdGlvbnM7Il19
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Notification;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _colors = require("@material-ui/core/colors");

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var variantIcon = {
  success: _CheckCircle["default"],
  warning: _Warning["default"],
  error: _Error["default"],
  info: _Info["default"]
};
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    success: {
      backgroundColor: _colors.green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    warning: {
      backgroundColor: _colors.amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

function Notification(_ref) {
  var notifications = _ref.notifications,
      onRequestHide = _ref.onRequestHide;
  //open
  var classes = useStyles();

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      flag = _React$useState4[0],
      setFlag = _React$useState4[1];

  var timer = (0, _react.useRef)(null);
  var TYPE;
  var ICON;
  var TITLE;
  var MESSAGE;
  var ANCHOR;
  var ONCLOSE;
  var TRANSITION_TYPE;
  var TRANSITION_DETAILS;

  if (notifications[0]) {
    if (notifications[0].behaviour) {
      TRANSITION_TYPE = notifications[0].behaviour.type;
      TRANSITION_DETAILS = notifications[0].behaviour.details;
    }

    ONCLOSE = notifications[0].onClose;
    ANCHOR = notifications[0].anchor;
    TYPE = notifications[0].type;
    ICON = variantIcon[TYPE];
    TITLE = notifications[0].title;
    MESSAGE = notifications[0].message;
  }

  (0, _react.useEffect)(function () {
    if (notifications && notifications[0] && notifications[0].timeOut) {
      if (!flag) {
        handleOpen();
        timer.current = setTimeout(function () {
          handleClose();
        }, notifications[0].timeOut);
      }
    }
  }, [notifications[0]]);

  function handleOpen() {
    setOpen(true);
    setFlag(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setFlag(false);
    var c = setTimeout(function () {
      onRequestHide(notifications[0]);
      clearTimeout(c);
    }, 300);
    setOpen(false);
  }

  var getSlide = function getSlide() {
    if (TRANSITION_TYPE === "slide") {
      return _Slide["default"];
    } else if (TRANSITION_TYPE === "fade") {
      return _Fade["default"];
    } else if (TRANSITION_TYPE === "grow") {
      return _Grow["default"];
    }
  };

  return _react["default"].createElement("div", null, _react["default"].createElement(_Snackbar["default"], {
    TransitionComponent: getSlide(),
    TransitionProps: {
      direction: TRANSITION_DETAILS
    },
    anchorOrigin: ANCHOR,
    open: open,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    action: [_react["default"].createElement(_IconButton["default"], {
      key: "close",
      "aria-label": "close",
      color: "inherit",
      className: classes.close,
      onClick: handleClose,
      onClose: ONCLOSE
    }, _react["default"].createElement(_Close["default"], null))]
  }, _react["default"].createElement(_SnackbarContent["default"], {
    className: (0, _clsx["default"])(classes[TYPE]),
    "aria-describedby": "client-snackbar",
    message: _react["default"].createElement("span", {
      id: "client-snackbar",
      className: classes.message
    }, ICON ? _react["default"].createElement(ICON, {
      className: (0, _clsx["default"])(classes.icon, classes.iconVariant)
    }) : _react["default"].createElement(variantIcon.info, {
      className: (0, _clsx["default"])(classes.icon, classes.iconVariant)
    }), TITLE, _react["default"].createElement("p", null), MESSAGE),
    action: [_react["default"].createElement(_IconButton["default"], {
      key: "close",
      "aria-label": "close",
      color: "inherit",
      onClick: handleClose
    }, _react["default"].createElement(_Close["default"], {
      className: classes.icon
    }))]
  })));
}

Notification.propTypes = {
  notifications: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    anchor: _propTypes["default"].object,
    id: _propTypes["default"].string,
    message: _propTypes["default"].string,
    priority: _propTypes["default"].bool,
    timeOut: _propTypes["default"].number,
    title: _propTypes["default"].string,
    type: _propTypes["default"].string
  })),

  /** Повідомлення сповіщення. */
  message: _propTypes["default"].string,

  /** { horizontal: 'left' | 'right' | 'center', vertical: 'top' | 'bottom' } - Задає позицію сповіщення */
  anchor: _propTypes["default"].objectOf({
    horizontal: _propTypes["default"].oneOf(['left', 'center', 'right']),
    vertical: _propTypes["default"].oneOf(['top', 'bottom'])
  }),

  /** Вказує чи є сповіщення пріоритетним. Якщо true сповіщення стає в чергу першим. */
  priority: _propTypes["default"].bool,

  /** Час в мілісекундах доки сповіщення автоматично закриється.  */
  timeOut: _propTypes["default"].number,

  /** Заголовок Сповіщення. */
  title: _propTypes["default"].string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qck5vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb24uanN4Il0sIm5hbWVzIjpbInZhcmlhbnRJY29uIiwic3VjY2VzcyIsIkNoZWNrQ2lyY2xlSWNvbiIsIndhcm5pbmciLCJXYXJuaW5nSWNvbiIsImVycm9yIiwiRXJyb3JJY29uIiwiaW5mbyIsIkluZm9JY29uIiwidXNlU3R5bGVzIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncmVlbiIsInBhbGV0dGUiLCJkYXJrIiwicHJpbWFyeSIsIm1haW4iLCJhbWJlciIsImljb24iLCJmb250U2l6ZSIsImljb25WYXJpYW50Iiwib3BhY2l0eSIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsIm1lc3NhZ2UiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIk5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJvblJlcXVlc3RIaWRlIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImZsYWciLCJzZXRGbGFnIiwidGltZXIiLCJUWVBFIiwiSUNPTiIsIlRJVExFIiwiTUVTU0FHRSIsIkFOQ0hPUiIsIk9OQ0xPU0UiLCJUUkFOU0lUSU9OX1RZUEUiLCJUUkFOU0lUSU9OX0RFVEFJTFMiLCJiZWhhdmlvdXIiLCJ0eXBlIiwiZGV0YWlscyIsIm9uQ2xvc2UiLCJhbmNob3IiLCJ0aXRsZSIsInRpbWVPdXQiLCJoYW5kbGVPcGVuIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwicmVhc29uIiwiYyIsImNsZWFyVGltZW91dCIsImdldFNsaWRlIiwiU2xpZGUiLCJGYWRlIiwiR3JvdyIsImRpcmVjdGlvbiIsImNsb3NlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwib2JqZWN0IiwiaWQiLCJzdHJpbmciLCJwcmlvcml0eSIsImJvb2wiLCJudW1iZXIiLCJvYmplY3RPZiIsImhvcml6b250YWwiLCJv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LENBQW1CO0FBQ3pCQyxJQUFBQSxVQUFVLEVBQUVWLHNCQUFVVyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBaEIsQ0FEYTtBQUV6QkMsSUFBQUEsUUFBUSxFQUFFWixzQkFBVVcsS0FBVixDQUFnQixDQUFDLEtBQUQsRUFBUSxRQUFSLENBQWhCO0FBRmUsR0FBbkIsQ0FmYTs7QUFtQnJCO0FBQ0FMLEVBQUFBLFFBQVEsRUFBRU4sc0JBQVVPLElBcEJDOztBQXFCckI7QUFDQXZCLEVBQUFBLE9BQU8sRUFBRWdCLHNCQUFVUSxNQXRCRTs7QUF1QnJCO0FBQ0F6QixFQUFBQSxLQUFLLEVBQUVpQixzQkFBVUs7QUF4QkksQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IHsgYW1iZXIsIGdyZWVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuaW1wb3J0IFNuYWNrYmFyQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnQnO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dhcm5pbmcnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XHJcbmltcG9ydCBTbGlkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZSc7XHJcbmltcG9ydCBHcm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyb3cnO1xyXG5cclxuXHJcbmNvbnN0IHZhcmlhbnRJY29uID0ge1xyXG4gIHN1Y2Nlc3M6IENoZWNrQ2lyY2xlSWNvbixcclxuICB3YXJuaW5nOiBXYXJuaW5nSWNvbixcclxuICBlcnJvcjogRXJyb3JJY29uLFxyXG4gIGluZm86IEluZm9JY29uLFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHN1Y2Nlc3M6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JlZW5bNjAwXSxcclxuICB9LFxyXG4gIGVycm9yOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgfSxcclxuICB3YXJuaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGFtYmVyWzcwMF0sXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTogMjAsXHJcbiAgfSxcclxuICBpY29uVmFyaWFudDoge1xyXG4gICAgb3BhY2l0eTogMC45LFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBtZXNzYWdlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90aWZpY2F0aW9uKHsgbm90aWZpY2F0aW9ucywgb25SZXF1ZXN0SGlkZSB9KSB7IC8vb3BlblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCB0aW1lciA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IFRZUEU7XHJcbiAgbGV0IElDT047XHJcbiAgbGV0IFRJVExFO1xyXG4gIGxldCBNRVNTQUdFO1xyXG4gIGxldCBBTkNIT1I7XHJcbiAgbGV0IE9OQ0xPU0U7XHJcbiAgbGV0IFRSQU5TSVRJT05fVFlQRTtcclxuICBsZXQgVFJBTlNJVElPTl9ERVRBSUxTO1xyXG4gIGlmKG5vdGlmaWNhdGlvbnNbMF0pIHtcclxuXHJcbiAgICBpZihub3RpZmljYXRpb25zWzBdLmJlaGF2aW91cikge1xyXG4gICAgICBUUkFOU0lUSU9OX1RZUEUgPSBub3RpZmljYXRpb25zWzBdLmJlaGF2aW91ci50eXBlO1xyXG4gICAgICBUUkFOU0lUSU9OX0RFVEFJTFMgPSBub3RpZmljYXRpb25zWzBdLmJlaGF2aW91ci5kZXRhaWxzO1xyXG4gICAgfVxyXG4gICAgT05DTE9TRSA9IG5vdGlmaWNhdGlvbnNbMF0ub25DbG9zZTtcclxuICAgIEFOQ0hPUiA9IG5vdGlmaWNhdGlvbnNbMF0uYW5jaG9yO1xyXG4gICAgVFlQRSA9IG5vdGlmaWNhdGlvbnNbMF0udHlwZTtcclxuICAgIElDT04gPSB2YXJpYW50SWNvbltUWVBFXTtcclxuICAgIFRJVExFID0gbm90aWZpY2F0aW9uc1swXS50aXRsZTtcclxuICAgIE1FU1NBR0UgPSBub3RpZmljYXRpb25zWzBdLm1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobm90aWZpY2F0aW9ucyAmJiBub3RpZmljYXRpb25zWzBdICYmIG5vdGlmaWNhdGlvbnNbMF0udGltZU91dCkge1xyXG4gICAgICBpZighZmxhZykge1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICB0aW1lci5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgaGFuZGxlQ2xvc2UoKTt9LCBub3RpZmljYXRpb25zWzBdLnRpbWVPdXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW25vdGlmaWNhdGlvbnNbMF1dKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlT3BlbigpIHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRGbGFnKHRydWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZShldmVudCwgcmVhc29uKSB7XHJcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRGbGFnKGZhbHNlKTtcclxuICAgIGxldCBjID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG9uUmVxdWVzdEhpZGUobm90aWZpY2F0aW9uc1swXSk7XHJcbiAgICAgIGNsZWFyVGltZW91dChjKVxyXG4gICAgfSwgMzAwKVxyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoVFJBTlNJVElPTl9UWVBFID09PSBcInNsaWRlXCIpIHtcclxuICAgICAgcmV0dXJuIFNsaWRlXHJcbiAgICB9IGVsc2UgaWYgKFRSQU5TSVRJT05fVFlQRSA9PT0gXCJmYWRlXCIpIHtcclxuICAgICAgcmV0dXJuIEZhZGVcclxuICAgIH0gZWxzZSBpZiAoVFJBTlNJVElPTl9UWVBFID09PSBcImdyb3dcIikge1xyXG4gICAgICByZXR1cm4gR3Jvd1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e2dldFNsaWRlKCl9XHJcbiAgICAgICAgVHJhbnNpdGlvblByb3BzPXt7XHJcbiAgICAgICAgICBkaXJlY3Rpb246IFRSQU5TSVRJT05fREVUQUlMUyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17QU5DSE9SfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgQ29udGVudFByb3BzPXt7XHJcbiAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFjdGlvbj17W1xyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtPTkNMT1NFfVxyXG5cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNuYWNrYmFyQ29udGVudFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzW1RZUEVdKX1cclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY2xpZW50LXNuYWNrYmFyXCJcclxuICAgICAgICBtZXNzYWdlPXtcclxuICAgICAgICAgIDxzcGFuIGlkPVwiY2xpZW50LXNuYWNrYmFyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxyXG4gICAgICAgICAgICB7SUNPTiA/XHJcbiAgICAgICAgICAgICAgPElDT04gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaWNvbiwgY2xhc3Nlcy5pY29uVmFyaWFudCl9IC8+IDpcclxuICAgICAgICAgICAgICA8dmFyaWFudEljb24uaW5mbyAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaWNvbiwgY2xhc3Nlcy5pY29uVmFyaWFudCkgfVxyXG4gICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAge1RJVExFfVxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICB7TUVTU0FHRX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aW9uPXtbXHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBrZXk9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgICAgPC9TbmFja2Jhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbk5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBub3RpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBhbmNob3I6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBwcmlvcml0eTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgdGltZU91dDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB9KVxyXG4gICAgKSxcclxuICAgIC8qKiDQn9C+0LLRltC00L7QvNC70LXQvdC90Y8g0YHQv9C+0LLRltGJ0LXQvdC90Y8uICovXHJcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqIHsgaG9yaXpvbnRhbDogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInLCB2ZXJ0aWNhbDogJ3RvcCcgfCAnYm90dG9tJyB9IC0g0JfQsNC00LDRlCDQv9C+0LfQuNGG0ZbRjiDRgdC/0L7QstGW0YnQtdC90L3RjyAqL1xyXG4gICAgYW5jaG9yOiBQcm9wVHlwZXMub2JqZWN0T2Yoe1xyXG4gICAgICBob3Jpem9udGFsOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddKSxcclxuICAgICAgdmVydGljYWw6IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSlcclxuICAgIH0pLFxyXG4gICAgLyoqINCS0LrQsNC30YPRlCDRh9C4INGUINGB0L/QvtCy0ZbRidC10L3QvdGPINC/0YDRltC+0YDQuNGC0LXRgtC90LjQvC4g0K/QutGJ0L4gdHJ1ZSDRgdC/0L7QstGW0YnQtdC90L3RjyDRgdGC0LDRlCDQsiDRh9C10YDQs9GDINC/0LXRgNGI0LjQvC4gKi9cclxuICAgIHByaW9yaXR5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIC8qKiDQp9Cw0YEg0LIg0LzRltC70ZbRgdC10LrRg9C90LTQsNGFINC00L7QutC4INGB0L/QvtCy0ZbRidC10L3QvdGPINCw0LLRgtC+0LzQsNGC0LjRh9C90L4g0LfQsNC60YDQuNGU0YLRjNGB0Y8uICAqL1xyXG4gICAgdGltZU91dDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIC8qKiDQl9Cw0LPQvtC70L7QstC+0Log0KHQv9C+0LLRltGJ0LXQvdC90Y8uICovXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFxyXG59ICJdfQ==

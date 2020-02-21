
"use strict";

var React = _interopRequireDefault(require("react"));
var ReactDOM = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

class App extends React.Component {
  render() {
    return (
      React.createElement(
        React.Fragment,
        null,
        React.createElement("h1", null, "Test"),
        React.createElement("p", null, "ds")
      )
    )
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

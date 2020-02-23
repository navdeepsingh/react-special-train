
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      React.createElement(
        React.Fragment,
        null,
        React.createElement("h1", null, "Test from Playground Reactjs"),
        React.createElement("p", null, "THis is playground for react"),
        React.createElement("p", null, "This is awesome..")
      )
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

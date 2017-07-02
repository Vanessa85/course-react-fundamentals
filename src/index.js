import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class App extends React.Component {

  render() {
    return (
      <div>{ this.props.message }</div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired
};

ReactDOM.render(
  <App message="Hello world" />,
  document.querySelector('#app')
);

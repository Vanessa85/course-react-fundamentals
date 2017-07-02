import React from 'react';
import PropTypes from 'prop-types';
import Popular from './Popular';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        { this.props.message }
        <Popular />
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired
};

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {
        languages.map(lang =>
          <li key={lang}
            style={lang === props.selectedLanguage? { color: '#d0021b' } : null }
            onClick={props.onSelect.bind(null, lang)}>
            { lang }
          </li>
        )
      }
    </ul>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return { selectedLanguage: lang  };
    });
  }

  render() {

    return (
      <SelectLanguage
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage} />
    );
  }
}

export default Popular;

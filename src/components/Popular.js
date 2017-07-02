import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import RepoGrid from './RepoGrid';

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
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return { selectedLanguage: lang, repos: null  };
    });

    api.fetchPopularRepos(lang).then(repos => {
      this.setState({ repos: repos });
    });
  }

  render() {

    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {
          !this.state.repos?
          <p>Loading...</p>
          :
          <RepoGrid repos={this.state.repos} />
        }
      </div>
    );
  }
}

export default Popular;

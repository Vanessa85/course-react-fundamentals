import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoGrid from './RepoGrid';
import Loading from '../Loading';

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
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.props.selectedLanguage);
  }

  updateLanguage(lang) {
    this.props.fetchPopularRepos(lang);
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.props.selectedLanguage}
          onSelect={this.updateLanguage} />
        {
          !this.props.repos?
          <Loading />
          :
          <RepoGrid repos={this.props.repos} />
        }
      </div>
    );
  }
}

export default Popular;

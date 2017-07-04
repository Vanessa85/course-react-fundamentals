import { connect } from 'react-redux';
import { fetchPopularRepos } from '../../actions';
import Popular from './Popular';

const mapStateToProps = ({ popular }) => ({
  selectedLanguage: popular.selectedLanguage,
  repos: popular.repos
});

export default connect(mapStateToProps, { fetchPopularRepos })(Popular);

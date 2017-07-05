import { connect } from 'react-redux';
import { battle } from '../../actions';
import Results from './Results';

export default connect( ({ results }) => results, { battle } )(Results);

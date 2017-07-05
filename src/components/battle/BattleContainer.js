import { connect } from 'react-redux';
import { selectPlayerBattle, resetPlayerBattle } from '../../actions';
import Battle from './Battle';

export default connect(({ battle }) => {
  return {
    playerOneName: battle.playerOneName,
    playerTwoName: battle.playerTwoName,
    playerOneImage: battle.playerOneImage,
    playerTwoImage: battle.playerTwoImage
  }
}, { selectPlayerBattle, resetPlayerBattle })(Battle);

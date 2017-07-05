var initialState = {
  playerOneName: '',
  playerTwoName: '',
  playerOneImage: null,
  playerTwoImage: null
};

const battle = (state = initialState, action) => {
  var id, username, newState = {};

  switch (action.type) {
    case 'SELECT_PLAYER_BATTLE':
      id = action.payload.id;
      username = action.payload.username;
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;
      return Object.assign({}, state, newState);
    case 'RESET_PLAYER_BATTLE':
      id = action.payload;
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return Object.assign({}, state, newState);
    default:
      return initialState;
  }
}

export default battle;

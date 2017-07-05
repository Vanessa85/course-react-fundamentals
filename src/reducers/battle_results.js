var initialState = {
  winner: null,
  loser: null,
  error: null,
  loading: true
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESULT_BATTLE_SUCCESS':
      console.log('store', action.payload)
      return {...state, winner: action.payload[0], loser: action.payload[1], loading: false, error: null };
    case 'FETCH_RESULT_BATTLE_FAILED':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export default results;

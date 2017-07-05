export const fetchPopularRepos = (lang) => ({
  type: 'FETCH_POPULAR_REPOS',
  payload: lang
});

export const selectPlayerBattle = (id, username) => ({
  type: 'SELECT_PLAYER_BATTLE',
  payload: { id, username }
});

export const resetPlayerBattle = (id) => ({
  type: 'RESET_PLAYER_BATTLE',
  payload: id
});

export const battle = (players) => ({
  type: 'FETCH_RESULT_BATTLE',
  payload: players
});

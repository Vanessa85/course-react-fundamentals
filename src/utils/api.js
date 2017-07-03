import axios from 'axios';

const ID = '93d9a95c66f59250c3f8';
const SECRET = '14a4e0c5db0bf407bc21126ca2148f0e19ff6d27';
var params = `?client_id=${ID}&client_secret=${SECRET}`;

function getProfile(username) {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then(response => response.data);
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

function getStartCount(repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos) {
  var followers = profile.followers;
  var totalStarts = getStartCount(repos);
  return (followers * 3) + totalStarts;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(data => {
    var profile = data[0];
    var repos = data[1];
    return {
      profile, profile,
      score: calculateScore(profile, repos)
    };
  });
}

function sortPlayers(players) {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
}

export default {
  battle: function(players) {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  },
  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    return axios.get(encodedURI).then(response => response.data.items);
  }
}

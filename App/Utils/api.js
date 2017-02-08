var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  //getrequest to firebase
  getNotes(username){
    username = username.toLowerCase().trim();
    var url = `https://githubnotetaker-a41e9.firebaseio.com/${username}/notes.json`;
    return fetch(url).then((res) => res.json());
  },
  // post request to firebase
  addNote(username, note){
    username = username.toLowerCase().trim();
    var url = `https://githubnotetaker-a41e9.firebaseio.com/${username}/notes.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};

module.exports = api;

export default function getGameData() {
  fetch('http://www.nfl.com/liveupdate/scores/scores.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
}

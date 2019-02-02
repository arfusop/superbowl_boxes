export const getGameData = () => {
  fetch('http://www.nfl.com/liveupdate/scores/scores.json').then((response) => {
    return response.json();
  }).then((myJson) => {
    const data = JSON.stringify(myJson);
    console.log(data)
    return data;
  }).catch(err => console.log(err));
}

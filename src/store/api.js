// Base URL
export let baseUrl = "https://api.rawg.io/api/";
let key = "d32beda09cc24ea4b4e993cac126dada";
// variables
let date = new Date();

function getDate() {
  let todayDate = date.getDate();
  if (todayDate < 10) {
    return "0" + todayDate;
  }
  return todayDate;
}

function getMonth() {
  let thisMonth = date.getMonth() + 1;
  if (thisMonth < 10) {
    return "0" + thisMonth;
  }
  return thisMonth;
}

let month = getMonth();
let year = date.getFullYear();
console.log(year);
let today = getDate();
let lastYear = year - 1;
let nextYear = year + 1;

// exports
const popularGames = `games?key=${key}&dates=${lastYear}-${month}-${today},${nextYear}-${month}-${today}&ordering=-rating&page_size=20`;
const upcomingGames = `games?key=${key}&dates=${year}-${month}-${today},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${key}&dates=${lastYear},${year}-${month}-${today}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;

// Game Details
export const getGameDetails = (game_id) =>
  `${baseUrl}games/${game_id}?key=${key}`;

export const getGameScreenshots = (game_Id) =>
  `${baseUrl}games/${game_Id}/screenshots?key=${key}`;

// Search results
export const getSerachResult = (game_name) =>
  `${baseUrl}games?key=${key}&search=${game_name}&page_size=10`;

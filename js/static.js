// Teams
const A1 = 'France';
const A2 = 'Roumanie';
const A3 = 'Albanie';
const A4 = 'Suisse';

const matchArray = [
  {'group' : 'Groupe A', 'MatchID' : '1', 'date' : "10 juin 2018", 'time' : "21:00", 'teamA' : A1, 'teamB' : A2,},
  {'group' : 'Groupe A', 'MatchID' : '2', 'date' : "11 juin 2018", 'time' : "15:00", 'teamA' : A3, 'teamB' : A4,},
  {'group' : 'Groupe A', 'MatchID' : '3', 'date' : "15 juin 2018", 'time' : "18:00", 'teamA' : A2, 'teamB' : A4,},
  {'group' : 'Groupe A', 'MatchID' : '4', 'date' : "16 juin 2018", 'time' : "20:00", 'teamA' : A1, 'teamB' : A3,},
  {'group' : 'Groupe A', 'MatchID' : '5', 'date' : "17 juin 2018", 'time' : "17:00", 'teamA' : A1, 'teamB' : A4,},
  {'group' : 'Groupe A', 'MatchID' : '6', 'date' : "18 juin 2018", 'time' : "19:00", 'teamA' : A2, 'teamB' : A3,},
];

// Fill match ID
let matchID = document.querySelectorAll('.matchID');
matchID.forEach(function(matchID, index){
  matchID.textContent = matchArray[index]['MatchID'];
})
// Fill team names
let teamA = document.querySelectorAll('.teamA');
teamA.forEach(function(teamA, index){
  teamA.textContent = matchArray[index]['teamA'];
})
let teamB = document.querySelectorAll('.teamB');
teamB.forEach(function(teamB, index){
  teamB.textContent = matchArray[index]['teamB'];
})
// Fill match dates
let date = document.querySelectorAll('.date');
date.forEach(function(date, index){
  date.textContent = matchArray[index]['date'];
})
// Fill match hours
let hour = document.querySelectorAll('.hour');
hour.forEach(function(hour, index){
  hour.textContent = matchArray[index]['time'];
})

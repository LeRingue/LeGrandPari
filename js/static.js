// Teams
const A1 = 'Turquie';
const A2 = 'Italie';
const A3 = 'Pays de Galles';
const A4 = 'Suisse';

const B1 = 'Danemark';
const B2 = 'Finland';
const B3 = 'Belgique';
const B4 = 'Russie';

const C1 = 'Pays-Bas';
const C2 = 'Ukraine';
const C3 = 'Autriche';
const C4 = 'PO Winner D';

const D1 = 'Angleterre';
const D2 = 'Croatie';
const D3 = 'PO winner C';
const D4 = 'République Tchèque';

const E1 = 'Espagne';
const E2 = 'Suède';
const E3 = 'Pologne';
const E4 = 'PO winner B';

const F1 = 'PO winner A';
const F2 = 'Portugal';
const F3 = 'France';
const F4 = 'Allemagne';


// let matchArray = [
//   {'group' : 'Groupe A', 'MatchID' : '1', 'date' : "12 juin 2018", 'time' : "21:00", 'teamA' : A1, 'teamB' : A2, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe A', 'MatchID' : '2', 'date' : "13 juin 2018", 'time' : "15:00", 'teamA' : A3, 'teamB' : A4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe B', 'MatchID' : '3', 'date' : "13 juin 2018", 'time' : "18:00", 'teamA' : B1, 'teamB' : B2, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe B', 'MatchID' : '4', 'date' : "13 juin 2018", 'time' : "21:00", 'teamA' : B3, 'teamB' : A4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe C', 'MatchID' : '5', 'date' : "14 juin 2018", 'time' : "21:00", 'teamA' : C1, 'teamB' : C2, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe C', 'MatchID' : '6', 'date' : "14 juin 2018", 'time' : "18:00", 'teamA' : C3, 'teamB' : C4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe D', 'MatchID' : '7', 'date' : "14 juin 2018", 'time' : "15:00", 'teamA' : D1, 'teamB' : D2, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe D', 'MatchID' : '8', 'date' : "15 juin 2018", 'time' : "15:00", 'teamA' : D3, 'teamB' : D4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe E', 'MatchID' : '9', 'date' : "15 juin 2018", 'time' : "21:00", 'teamA' : E1, 'teamB' : E2, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe E', 'MatchID' : '10', 'date' : "15 juin 2018", 'time' : "18:00", 'teamA' : E3, 'teamB' : E4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe F', 'MatchID' : '11', 'date' : "16 juin 2018", 'time' : "18:00", 'teamA' : F1, 'teamB' : F2, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe F', 'MatchID' : '12', 'date' : "16 juin 2018", 'time' : "21:00", 'teamA' : F3, 'teamB' : F4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe A', 'MatchID' : '13', 'date' : "17 juin 2018", 'time' : "18:00", 'teamA' : A1, 'teamB' : A3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe A', 'MatchID' : '14', 'date' : "17 juin 2018", 'time' : "21:00", 'teamA' : A2, 'teamB' : A4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe B', 'MatchID' : '15', 'date' : "17 juin 2018", 'time' : "15:00", 'teamA' : B1, 'teamB' : B3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe B', 'MatchID' : '16', 'date' : "18 juin 2018", 'time' : "18:00", 'teamA' : B2, 'teamB' : A4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe C', 'MatchID' : '17', 'date' : "18 juin 2018", 'time' : "21:00", 'teamA' : C1, 'teamB' : C3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe C', 'MatchID' : '18', 'date' : "18 juin 2018", 'time' : "15:00", 'teamA' : C2, 'teamB' : C4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe D', 'MatchID' : '19', 'date' : "19 juin 2018", 'time' : "18:00", 'teamA' : D1, 'teamB' : D3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe D', 'MatchID' : '20', 'date' : "19 juin 2018", 'time' : "21:00", 'teamA' : D2, 'teamB' : D4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe E', 'MatchID' : '21', 'date' : "19 juin 2018", 'time' : "15:00", 'teamA' : E1, 'teamB' : E3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe E', 'MatchID' : '22', 'date' : "20 juin 2018", 'time' : "21:00", 'teamA' : E2, 'teamB' : E4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe F', 'MatchID' : '23', 'date' : "20 juin 2018", 'time' : "15:00", 'teamA' : F1, 'teamB' : F3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe F', 'MatchID' : '24', 'date' : "20 juin 2018", 'time' : "18:00", 'teamA' : F2, 'teamB' : F4, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe A', 'MatchID' : '25', 'date' : "21 juin 2018", 'time' : "18:00", 'teamA' : A4, 'teamB' : A1, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe A', 'MatchID' : '26', 'date' : "21 juin 2018", 'time' : "18:00", 'teamA' : A2, 'teamB' : A3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe B', 'MatchID' : '27', 'date' : "22 juin 2018", 'time' : "21:00", 'teamA' : B4, 'teamB' : B1, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe B', 'MatchID' : '28', 'date' : "22 juin 2018", 'time' : "21:00", 'teamA' : B2, 'teamB' : B3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe C', 'MatchID' : '29', 'date' : "22 juin 2018", 'time' : "18:00", 'teamA' : C4, 'teamB' : C1, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe C', 'MatchID' : '30', 'date' : "22 juin 2018", 'time' : "18:00", 'teamA' : C2, 'teamB' : C3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe D', 'MatchID' : '31', 'date' : "23 juin 2018", 'time' : "21:00", 'teamA' : D4, 'teamB' : D1, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe D', 'MatchID' : '32', 'date' : "23 juin 2018", 'time' : "21:00", 'teamA' : D2, 'teamB' : D3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe E', 'MatchID' : '33', 'date' : "24 juin 2018", 'time' : "18:00", 'teamA' : E4, 'teamB' : E1, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe E', 'MatchID' : '34', 'date' : "24 juin 2018", 'time' : "18:00", 'teamA' : E2, 'teamB' : E3, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe F', 'MatchID' : '35', 'date' : "24 juin 2018", 'time' : "21:00", 'teamA' : F4, 'teamB' : F1, 'scoreA' : "", 'scoreB' : ""},
//   {'group' : 'Groupe F', 'MatchID' : '36', 'date' : "24 juin 2018", 'time' : "21:00", 'teamA' : F2, 'teamB' : F3, 'scoreA' : "", 'scoreB' : ""}
// ];

let matchArray = [
  {'group' : 'Groupe A', 'MatchID' : '1', 'date' : "12 juin 2018", 'time' : "21:00", 'teamA' : A1, 'teamB' : A2, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '2', 'date' : "13 juin 2018", 'time' : "15:00", 'teamA' : A3, 'teamB' : A4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '13', 'date' : "17 juin 2018", 'time' : "18:00", 'teamA' : A1, 'teamB' : A3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '14', 'date' : "17 juin 2018", 'time' : "21:00", 'teamA' : A2, 'teamB' : A4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '25', 'date' : "21 juin 2018", 'time' : "18:00", 'teamA' : A4, 'teamB' : A1, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '26', 'date' : "21 juin 2018", 'time' : "18:00", 'teamA' : A2, 'teamB' : A3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '3', 'date' : "13 juin 2018", 'time' : "18:00", 'teamA' : B1, 'teamB' : B2, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '4', 'date' : "13 juin 2018", 'time' : "21:00", 'teamA' : B3, 'teamB' : A4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '15', 'date' : "17 juin 2018", 'time' : "15:00", 'teamA' : B1, 'teamB' : B3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '16', 'date' : "18 juin 2018", 'time' : "18:00", 'teamA' : B2, 'teamB' : A4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '27', 'date' : "22 juin 2018", 'time' : "21:00", 'teamA' : B4, 'teamB' : B1, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '28', 'date' : "22 juin 2018", 'time' : "21:00", 'teamA' : B2, 'teamB' : B3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '5', 'date' : "14 juin 2018", 'time' : "21:00", 'teamA' : C1, 'teamB' : C2, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '6', 'date' : "14 juin 2018", 'time' : "18:00", 'teamA' : C3, 'teamB' : C4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '17', 'date' : "18 juin 2018", 'time' : "21:00", 'teamA' : C1, 'teamB' : C3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '18', 'date' : "18 juin 2018", 'time' : "15:00", 'teamA' : C2, 'teamB' : C4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '29', 'date' : "22 juin 2018", 'time' : "18:00", 'teamA' : C4, 'teamB' : C1, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '30', 'date' : "22 juin 2018", 'time' : "18:00", 'teamA' : C2, 'teamB' : C3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '7', 'date' : "14 juin 2018", 'time' : "15:00", 'teamA' : D1, 'teamB' : D2, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '8', 'date' : "15 juin 2018", 'time' : "15:00", 'teamA' : D3, 'teamB' : D4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '19', 'date' : "19 juin 2018", 'time' : "18:00", 'teamA' : D1, 'teamB' : D3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '20', 'date' : "19 juin 2018", 'time' : "21:00", 'teamA' : D2, 'teamB' : D4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '31', 'date' : "23 juin 2018", 'time' : "21:00", 'teamA' : D4, 'teamB' : D1, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '32', 'date' : "23 juin 2018", 'time' : "21:00", 'teamA' : D2, 'teamB' : D3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '9', 'date' : "15 juin 2018", 'time' : "21:00", 'teamA' : E1, 'teamB' : E2, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '10', 'date' : "15 juin 2018", 'time' : "18:00", 'teamA' : E3, 'teamB' : E4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '21', 'date' : "19 juin 2018", 'time' : "15:00", 'teamA' : E1, 'teamB' : E3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '22', 'date' : "20 juin 2018", 'time' : "21:00", 'teamA' : E2, 'teamB' : E4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '33', 'date' : "24 juin 2018", 'time' : "18:00", 'teamA' : E4, 'teamB' : E1, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '34', 'date' : "24 juin 2018", 'time' : "18:00", 'teamA' : E2, 'teamB' : E3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '11', 'date' : "16 juin 2018", 'time' : "18:00", 'teamA' : F1, 'teamB' : F2, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '12', 'date' : "16 juin 2018", 'time' : "21:00", 'teamA' : F3, 'teamB' : F4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '23', 'date' : "20 juin 2018", 'time' : "15:00", 'teamA' : F1, 'teamB' : F3, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '24', 'date' : "20 juin 2018", 'time' : "18:00", 'teamA' : F2, 'teamB' : F4, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '35', 'date' : "24 juin 2018", 'time' : "21:00", 'teamA' : F4, 'teamB' : F1, 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '36', 'date' : "24 juin 2018", 'time' : "21:00", 'teamA' : F2, 'teamB' : F3, 'scoreA' : "", 'scoreB' : ""},
];

// Fill match ID
let matchID = document.querySelectorAll('.matchID');
matchID.forEach(function(matchID, index){
  if(matchArray[index]['group'] == "Groupe A"){
    matchID.textContent = matchArray[index]['MatchID'];
  }
})
// Fill team names
let teamA = document.querySelectorAll('.teamA');
teamA.forEach(function(teamA, index){
  if(matchArray[index]['group'] == "Groupe A"){
    teamA.textContent = matchArray[index]['teamA'];
  }
})
let teamB = document.querySelectorAll('.teamB');
teamB.forEach(function(teamB, index){
  if(matchArray[index]['group'] == "Groupe A"){
    teamB.textContent = matchArray[index]['teamB'];
  }
})
// Fill match dates
let date = document.querySelectorAll('.date');
date.forEach(function(date, index){
  if(matchArray[index]['group'] == "Groupe A"){
    date.textContent = matchArray[index]['date'];
  }
})
// Fill match hours
let hour = document.querySelectorAll('.hour');
hour.forEach(function(hour, index){
  if(matchArray[index]['group'] == "Groupe A"){
    hour.textContent = matchArray[index]['time'];
  }
})

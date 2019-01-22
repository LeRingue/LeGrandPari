// Teams
const A1 = 'France';
const A2 = 'Roumanie';
const A3 = 'Albanie';
const A4 = 'Suisse';

// Date & time
const dateArray = ["10 juin 2018", "11 juin 2018", "15 juin 2018", "16 juin 2018"];
const hourArray = ["21:00", "15:00", "18:00", "20:00"];

// Fill teams
let equipA1 = document.querySelectorAll('.equipA1');
let equipA2 = document.querySelectorAll('.equipA2');
let equipA3 = document.querySelectorAll('.equipA3');
let equipA4 = document.querySelectorAll('.equipA4');
equipA1.forEach(function(equipA1){
  equipA1.textContent = A1;
})
equipA2.forEach(function(equipA2){
  equipA2.textContent = A2;
})
equipA3.forEach(function(equipA3){
  equipA3.textContent = A3;
})
equipA4.forEach(function(equipA4){
  equipA4.textContent = A4;
})
// Fill match dates
let date = document.querySelectorAll('.date');
date.forEach(function(date, index){
  date.textContent = dateArray[index];
})
// Fill match hours
let hour = document.querySelectorAll('.hour');
hour.forEach(function(hour, index){
  hour.textContent = hourArray[index];
})

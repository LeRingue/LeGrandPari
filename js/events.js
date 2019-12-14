document.addEventListener('keydown', logKey);

function logKey(e) {
// Reset all previous computation
let GroupRanking = [
  {'group' : 'Groupe A', 'team' : A1, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0,},
  {'group' : 'Groupe A', 'team' : A2, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0,},
  {'group' : 'Groupe A', 'team' : A3, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0,},
  {'group' : 'Groupe A', 'team' : A4, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0,}
];
// Check form entries that are set
if ((document.getElementById("score1A").value != "") && (document.getElementById("score1B").value != "")){
  let matchID = parseInt(document.getElementById("matchID").textContent, 10) - 1;
  let score1 = parseInt(document.getElementById("score1A").value, 10);
  let score2 = parseInt(document.getElementById("score1B").value, 10);
  team1 = matchArray[matchID]['teamA'];
  team2 = matchArray[matchID]['teamB'];
  // Associate team with index in GroupRanking
  let index1 = 0;
  let index2 = 0;
  while ((GroupRanking[index1]['team'] != team1) && (index1 < GroupRanking.length)){
    index1 += 1;
  }
  while ((GroupRanking[index2]['team'] != team2) && (index2 < GroupRanking.length)){
    index2 += 1;
  }
  if(score1 > score2){
    GroupRanking[index1]['pts'] += 3;
  }
  if(score1 == score2){
    GroupRanking[index1]['pts'] += 1;
    GroupRanking[index2]['pts'] += 1;
  }
  if(score1 < score2){
    GroupRanking[index2]['pts'] += 3;
  }
  GroupRanking[index1]['BP'] += score1;
  GroupRanking[index1]['BM'] += score2;
  GroupRanking[index1]['GA'] += score1 - score2;
  GroupRanking[index2]['BP'] += score2;
  GroupRanking[index2]['BM'] += score1;
  GroupRanking[index2]['GA'] += score2 - score1;

  // Compute rank

  // Update text to display
  r1team.textContent = GroupRanking[index1]['team'];
  r1pts.textContent = GroupRanking[index1]['pts'];
  r1BP.textContent = GroupRanking[index1]['BP'];
  r1BM.textContent = GroupRanking[index1]['BM'];
  r1GA.textContent = GroupRanking[index1]['GA'];

  r2team.textContent = GroupRanking[index2]['team'];
  r2pts.textContent = GroupRanking[index2]['pts'];
  r2BP.textContent = GroupRanking[index2]['BP'];
  r2BM.textContent = GroupRanking[index2]['BM'];
  r2GA.textContent = GroupRanking[index2]['GA'];

  r3team.textContent = GroupRanking[2]['team'];
  r4team.textContent = GroupRanking[3]['team'];
  }
}

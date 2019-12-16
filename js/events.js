document.addEventListener('keydown', logKey);

const matchNumberList = ["matchID1", "matchID2", "matchID3", "matchID4", "matchID5", "matchID6"];
const scoreAList = ["score1A", "score2A", "score3A", "score4A", "score5A", "score6A"];
const scoreBList = ["score1B", "score2B", "score3B", "score4B", "score5B", "score6B"];

const GroupRankingInit = [
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupRanking = [
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];

function ComputeRank(){
  // Check First
  for (let i = 0; i < GroupRanking.length; i++){
    for (let j = 0; j < GroupRanking.length; j++){
      if (i == j){
        continue;
      }
      if (GroupRanking[i]['pts'] < GroupRanking[j]['pts']) {
        GroupRanking[i]['rank'] += 1;
      }
    }
  }
  // Is there a draw for first place?
  let countFirst = 0;
  for (let i = 0; i < GroupRanking.length; i++){
      if (GroupRanking[i]['rank'] == 1){
        countFirst += 1;
      }
  }
  switch(countFirst){
    case 1:
      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
  }
}

  // samepts = [1:2, 1:3, 1:4, 2:3, 2:4, 3:4]
  // let samepts =  [[0, 0, 0, 0],
  //                 [0, 0, 0, 0],
  //                 [0, 0, 0, 0]];
  // for (i1 = 0; i < GroupRanking.length; i++){
  //   for (i2 = 0; i < GroupRanking.length; i++){
  //     if (GroupRanking[i1]['pts'] == GroupRanking[i2]['pts']){
  //       samepts[i1][i2] = 1;
  //     }
  //   }
  // }
  // for (i = 0; i < GroupRanking.length; i++){
  //   if (GroupRanking[0]['pts'] < GroupRanking[0+i]['pts']){
  //     GroupRanking[0]['pts'] += 1;
  //   }
  // }
//
// }

function logKey(e) {
  // Reset GroupRanking
  for (let i = 0; i < GroupRanking.length; i++){
    GroupRanking[i]['group'] = GroupRankingInit[i]['group'];
    GroupRanking[i]['rank'] = GroupRankingInit[i]['rank'];
    GroupRanking[i]['team'] = GroupRankingInit[i]['team'];
    GroupRanking[i]['played'] = GroupRankingInit[i]['played'];
    GroupRanking[i]['pts'] = GroupRankingInit[i]['pts'];
    GroupRanking[i]['BP'] = GroupRankingInit[i]['BP'];
    GroupRanking[i]['BM'] = GroupRankingInit[i]['BM'];
    GroupRanking[i]['GA'] = GroupRankingInit[i]['GA'];
  }
  // Check form entries that are set
  for (let num = 0; num < matchNumberList.length; num++){
    scoreA = scoreAList[num];
    scoreB = scoreBList[num];
    MatchNumber = matchNumberList[num];
    if ((document.getElementById(scoreA).value != "") && (document.getElementById(scoreB).value != "")){
      let matchID = parseInt(document.getElementById(MatchNumber).textContent, 10) - 1;
      let score1 = parseInt(document.getElementById(scoreA).value, 10);
      let score2 = parseInt(document.getElementById(scoreB).value, 10);

      let indexMID = 0;
      while (indexMID < matchArray.length){
        if ((matchArray[indexMID]['MatchID'] - 1) != matchID){
          indexMID += 1;
        }
        else {
          break;
        }
      }
      team1 = matchArray[indexMID]['teamA'];
      team2 = matchArray[indexMID]['teamB'];
      // Populate MatchArray table with score
      matchArray[indexMID]['scoreA'] = score1;
      matchArray[indexMID]['scoreB'] = score2;

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
      GroupRanking[index1]['played'] += 1;
      GroupRanking[index1]['BP'] += score1;
      GroupRanking[index1]['BM'] += score2;
      GroupRanking[index1]['GA'] += score1 - score2;
      GroupRanking[index2]['played'] += 1;
      GroupRanking[index2]['BP'] += score2;
      GroupRanking[index2]['BM'] += score1;
      GroupRanking[index2]['GA'] += score2 - score1;
    }
  }

  // Compute rank
  ComputeRank();

  // Update text to display
  let index = 0;
  rank1.textContent = GroupRanking[index]['rank'];
  r1team.textContent = GroupRanking[index]['team'];
  r1played.textContent = GroupRanking[index]['played'];
  r1pts.textContent = GroupRanking[index]['pts'];
  r1BP.textContent = GroupRanking[index]['BP'];
  r1BM.textContent = GroupRanking[index]['BM'];
  r1GA.textContent = GroupRanking[index]['GA'];

  index += 1;
  rank2.textContent = GroupRanking[index]['rank'];
  r2team.textContent = GroupRanking[index]['team'];
  r2played.textContent = GroupRanking[index]['played'];
  r2pts.textContent = GroupRanking[index]['pts'];
  r2BP.textContent = GroupRanking[index]['BP'];
  r2BM.textContent = GroupRanking[index]['BM'];
  r2GA.textContent = GroupRanking[index]['GA'];

  index += 1;
  rank3.textContent = GroupRanking[index]['rank'];
  r3team.textContent = GroupRanking[index]['team'];
  r3played.textContent = GroupRanking[index]['played'];
  r3pts.textContent = GroupRanking[index]['pts'];
  r3BP.textContent = GroupRanking[index]['BP'];
  r3BM.textContent = GroupRanking[index]['BM'];
  r3GA.textContent = GroupRanking[index]['GA'];

  index += 1;
  rank4.textContent = GroupRanking[index]['rank'];
  r4team.textContent = GroupRanking[index]['team'];
  r4played.textContent = GroupRanking[index]['played'];
  r4pts.textContent = GroupRanking[index]['pts'];
  r4BP.textContent = GroupRanking[index]['BP'];
  r4BM.textContent = GroupRanking[index]['BM'];
  r4GA.textContent = GroupRanking[index]['GA'];


  // rank3.textContent = scoreA;
  // r3team.textContent = scoreB;
  //
  // rank4.textContent = matchNumberList.length;
  // r4team.textContent = Globo;//GroupRanking[3]['team'];
}

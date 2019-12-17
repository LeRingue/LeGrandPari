document.addEventListener('keydown', logKey);

const matchNumberList = ["matchID1", "matchID2", "matchID3", "matchID4", "matchID5", "matchID6"];//, "matchID7", "matchID8", "matchID9", "matchID10", "matchID11", "matchID12"];
const scoreAList = ["score1A", "score2A", "score3A", "score4A", "score5A", "score6A"];//, "score7A", "score8A", "score9A", "score10A", "score11A", "score12A"];
const scoreBList = ["score1B", "score2B", "score3B", "score4B", "score5B", "score6B"];//, "score7B", "score8B", "score9B", "score10B", "score11B", "score12B"];
const groupCompo = [['Groupe A', A1, A2, A3, A4],
                    ['Groupe B', B1, B2, B3, B4],
                    ['Groupe C', C1, C2, C3, C4],
                    ['Groupe D', D1, D2, D3, D4],
                    ['Groupe E', E1, E2, E3, E4],
                    ['Groupe F', F1, F2, F3, F4]];

const GroupRankingInit = [
  {'group' : '', 'rank' : 1, 'team' : A1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : A2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : A3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : A4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupARanking = [
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupBRanking = [
  {'group' : 'Groupe B', 'rank' : 1, 'team' : A1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : A2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : A3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : A4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];

function ResetGroupRanking(group, GroupRanking){
  // Convert A-F to 0-7
  let indexGroup = group.charCodeAt() - 0x41;
  for (let i = 0; i < GroupRanking.length; i++){
    GroupRanking[i]['group'] = groupCompo[indexGroup][0];
    GroupRanking[i]['rank'] = GroupRankingInit[i]['rank'];
    GroupRanking[i]['team'] = groupCompo[indexGroup][i+1];
    GroupRanking[i]['played'] = GroupRankingInit[i]['played'];
    GroupRanking[i]['pts'] = GroupRankingInit[i]['pts'];
    GroupRanking[i]['BP'] = GroupRankingInit[i]['BP'];
    GroupRanking[i]['BM'] = GroupRankingInit[i]['BM'];
    GroupRanking[i]['GA'] = GroupRankingInit[i]['GA'];
  }
}

function ComputeRank(GroupRanking){
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
  ResetGroupRanking("A", GroupARanking);
  ResetGroupRanking("B", GroupBRanking);
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
      while ((GroupARanking[index1]['team'] != team1) && (index1 < GroupARanking.length)){
        index1 += 1;
      }
      while ((GroupARanking[index2]['team'] != team2) && (index2 < GroupARanking.length)){
        index2 += 1;
      }
      if(score1 > score2){
        GroupARanking[index1]['pts'] += 3;
      }
      if(score1 == score2){
        GroupARanking[index1]['pts'] += 1;
        GroupARanking[index2]['pts'] += 1;
      }
      if(score1 < score2){
        GroupARanking[index2]['pts'] += 3;
      }
      GroupARanking[index1]['played'] += 1;
      GroupARanking[index1]['BP'] += score1;
      GroupARanking[index1]['BM'] += score2;
      GroupARanking[index1]['GA'] += score1 - score2;
      GroupARanking[index2]['played'] += 1;
      GroupARanking[index2]['BP'] += score2;
      GroupARanking[index2]['BM'] += score1;
      GroupARanking[index2]['GA'] += score2 - score1;
    }
  }

  // Compute rank
  ComputeRank(GroupARanking);

  // Update text to display
  let index = 0;
  rankA1.textContent = GroupARanking[index]['rank'];
  rA1team.textContent = GroupARanking[index]['team'];
  rA1played.textContent = GroupARanking[index]['played'];
  rA1pts.textContent = GroupARanking[index]['pts'];
  rA1BP.textContent = GroupARanking[index]['BP'];
  rA1BM.textContent = GroupARanking[index]['BM'];
  rA1GA.textContent = GroupARanking[index]['GA'];

  index += 1;
  rankA2.textContent = GroupARanking[index]['rank'];
  rA2team.textContent = GroupARanking[index]['team'];
  rA2played.textContent = GroupARanking[index]['played'];
  rA2pts.textContent = GroupARanking[index]['pts'];
  rA2BP.textContent = GroupARanking[index]['BP'];
  rA2BM.textContent = GroupARanking[index]['BM'];
  rA2GA.textContent = GroupARanking[index]['GA'];

  index += 1;
  rankA3.textContent = GroupARanking[index]['rank'];
  rA3team.textContent = GroupARanking[index]['team'];
  rA3played.textContent = GroupARanking[index]['played'];
  rA3pts.textContent = GroupARanking[index]['pts'];
  rA3BP.textContent = GroupARanking[index]['BP'];
  rA3BM.textContent = GroupARanking[index]['BM'];
  rA3GA.textContent = GroupARanking[index]['GA'];

  index += 1;
  rankA4.textContent = GroupARanking[index]['rank'];
  rA4team.textContent = GroupARanking[index]['team'];
  rA4played.textContent = GroupARanking[index]['played'];
  rA4pts.textContent = GroupARanking[index]['pts'];
  rA4BP.textContent = GroupARanking[index]['BP'];
  rA4BM.textContent = GroupARanking[index]['BM'];
  rA4GA.textContent = GroupARanking[index]['GA'];


  // rank3.textContent = scoreA;
  // r3team.textContent = scoreB;
  //
  // rank4.textContent = matchNumberList.length;
  // r4team.textContent = Globo;//GroupRanking[3]['team'];
}

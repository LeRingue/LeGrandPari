document.addEventListener('keydown', logKey);

const matchNumberList = ["matchID1", "matchID2", "matchID3", "matchID4", "matchID5", "matchID6", "matchID7", "matchID8", "matchID9", "matchID10", "matchID11", "matchID12"];
const scoreAList = ["score1A", "score2A", "score3A", "score4A", "score5A", "score6A", "score7A", "score8A", "score9A", "score10A", "score11A", "score12A"];
const scoreBList = ["score1B", "score2B", "score3B", "score4B", "score5B", "score6B", "score7B", "score8B", "score9B", "score10B", "score11B", "score12B"];
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

const GroupRankingList = [GroupARanking, GroupBRanking];


function UpdateGroupDisplay(Group) {
  let GroupRanking;
  let rank1, r1team, r1played, r1pts, r1BP, r1BM, r1GA;
  let rank2, r2team, r2played, r2pts, r2BP, r2BM, r2GA;
  let rank3, r3team, r3played, r3pts, r3BP, r3BM, r3GA;
  let rank4, r4team, r4played, r4pts, r4BP, r4BM, r4GA;
  switch (Group) {
    case 0:
      GroupRanking = GroupARanking;
      rank1 = rankA1;
      r1team = rA1team;
      r1played = rA1played;
      r1pts = rA1pts;
      r1BP = rA1BP;
      r1BM = rA1BM;
      r1GA = rA1GA;
      rank2 = rankA2;
      r2team = rA2team;
      r2played = rA2played;
      r2pts = rA2pts;
      r2BP = rA2BP;
      r2BM = rA2BM;
      r2GA = rA2GA;
      rank3 = rankA3;
      r3team = rA3team;
      r3played = rA3played;
      r3pts = rA3pts;
      r3BP = rA3BP;
      r3BM = rA3BM;
      r3GA = rA3GA;
      rank4 = rankA4;
      r4team = rA4team;
      r4played = rA4played;
      r4pts = rA4pts;
      r4BP = rA4BP;
      r4BM = rA4BM;
      r4GA = rA4GA;
      break;
    case 1:
      GroupRanking = GroupBRanking;
      rank1 = rankB1;
      r1team = rB1team;
      r1played = rB1played;
      r1pts = rB1pts;
      r1BP = rB1BP;
      r1BM = rB1BM;
      r1GA = rB1GA;
      rank2 = rankB2;
      r2team = rB2team;
      r2played = rB2played;
      r2pts = rB2pts;
      r2BP = rB2BP;
      r2BM = rB2BM;
      r2GA = rB2GA;
      rank3 = rankB3;
      r3team = rB3team;
      r3played = rB3played;
      r3pts = rB3pts;
      r3BP = rB3BP;
      r3BM = rB3BM;
      r3GA = rB3GA;
      rank4 = rankB4;
      r4team = rB4team;
      r4played = rB4played;
      r4pts = rB4pts;
      r4BP = rB4BP;
      r4BM = rB4BM;
      r4GA = rB4GA;
      break;
    }
  rank1.textContent = GroupRanking[0]['rank'];
  r1team.textContent = GroupRanking[0]['team'];
  r1played.textContent = GroupRanking[0]['played'];
  r1pts.textContent = GroupRanking[0]['pts'];
  r1BP.textContent = GroupRanking[0]['BP'];
  r1BM.textContent = GroupRanking[0]['BM'];
  r1GA.textContent = GroupRanking[0]['GA'];
  rank2.textContent = GroupRanking[1]['rank'];
  r2team.textContent = GroupRanking[1]['team'];
  r2played.textContent = GroupRanking[1]['played'];
  r2pts.textContent = GroupRanking[1]['pts'];
  r2BP.textContent = GroupRanking[1]['BP'];
  r2BM.textContent = GroupRanking[1]['BM'];
  r2GA.textContent = GroupRanking[1]['GA'];
  rank3.textContent = GroupRanking[2]['rank'];
  r3team.textContent = GroupRanking[2]['team'];
  r3played.textContent = GroupRanking[2]['played'];
  r3pts.textContent = GroupRanking[2]['pts'];
  r3BP.textContent = GroupRanking[2]['BP'];
  r3BM.textContent = GroupRanking[2]['BM'];
  r3GA.textContent = GroupRanking[2]['GA'];
  rank4.textContent = GroupRanking[3]['rank'];
  r4team.textContent = GroupRanking[3]['team'];
  r4played.textContent = GroupRanking[3]['played'];
  r4pts.textContent = GroupRanking[3]['pts'];
  r4BP.textContent = GroupRanking[3]['BP'];
  r4BM.textContent = GroupRanking[3]['BM'];
  r4GA.textContent = GroupRanking[3]['GA'];
}

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

      // Check Group Index
      let indexGroup = 0;
      switch (matchArray[indexMID]['group']) {
        case 'Groupe A':
          indexGroup = 0;
          break;
        case 'Groupe B':
          indexGroup = 1;
          break;

      }

      // Populate MatchArray table with score
      matchArray[indexMID]['scoreA'] = score1;
      matchArray[indexMID]['scoreB'] = score2;
      let index1 = 0;
      let index2 = 0;

      // Associate team with index in GroupRanking
      index1 = 0;
      index2 = 0;
      while ((GroupRankingList[indexGroup][index1]['team'] != team1) && (index1 < GroupRankingList[indexGroup].length)){
        index1 += 1;
      }
      while ((GroupRankingList[indexGroup][index2]['team'] != team2) && (index2 < GroupRankingList[indexGroup].length)){
        index2 += 1;
      }
      if(score1 > score2){
        GroupRankingList[indexGroup][index1]['pts'] += 3;
      }
      if(score1 == score2){
        GroupRankingList[indexGroup][index1]['pts'] += 1;
        GroupRankingList[indexGroup][index2]['pts'] += 1;
      }
      if(score1 < score2){
        GroupRankingList[indexGroup][index2]['pts'] += 3;
      }
      GroupRankingList[indexGroup][index1]['played'] += 1;
      GroupRankingList[indexGroup][index1]['BP'] += score1;
      GroupRankingList[indexGroup][index1]['BM'] += score2;
      GroupRankingList[indexGroup][index1]['GA'] += score1 - score2;
      GroupRankingList[indexGroup][index2]['played'] += 1;
      GroupRankingList[indexGroup][index2]['BP'] += score2;
      GroupRankingList[indexGroup][index2]['BM'] += score1;
      GroupRankingList[indexGroup][index2]['GA'] += score2 - score1;
    }
  }

  // Compute rank
  for (let i = 0; i < GroupRankingList.length; i++) {
    ComputeRank(GroupRankingList[i]);
  }

  // Update text to display
  // let index = 0;
  for (let i = 0; i < GroupRankingList.length; i++) {
    UpdateGroupDisplay(i);
  }




  // rank3.textContent = scoreA;
  // r3team.textContent = scoreB;
  //
  // rank4.textContent = matchNumberList.length;
  // r4team.textContent = Globo;//GroupRanking[3]['team'];
}

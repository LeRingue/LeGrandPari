document.addEventListener('keydown', logKey);

const matchNumberList = ["matchID1", "matchID2", "matchID3", "matchID4", "matchID5", "matchID6",
                          "matchID7", "matchID8", "matchID9", "matchID10", "matchID11", "matchID12",
                          "matchID13", "matchID14", "matchID15", "matchID16", "matchID17", "matchID18",
                          "matchID19", "matchID20", "matchID21", "matchID22", "matchID23", "matchID24",
                          "matchID25", "matchID26", "matchID27", "matchID28", "matchID29", "matchID30",
                          "matchID31", "matchID32", "matchID33", "matchID34", "matchID35", "matchID36"];
const scoreAList = ["score1A", "score2A", "score3A", "score4A", "score5A", "score6A",
                    "score7A", "score8A", "score9A", "score10A", "score11A", "score12A",
                    "score13A", "score14A", "score15A", "score16A", "score17A", "score18A",
                    "score19A", "score20A", "score21A", "score22A", "score23A", "score24A",
                    "score25A", "score26A", "score27A", "score28A", "score29A", "score30A",
                    "score31A", "score32A", "score33A", "score34A", "score35A", "score36A"];
const scoreBList = ["score1B", "score2B", "score3B", "score4B", "score5B", "score6B",
                    "score7B", "score8B", "score9B", "score10B", "score11B", "score12B",
                    "score13B", "score14B", "score15B", "score16B", "score17B", "score18B",
                    "score19B", "score20B", "score21B", "score22B", "score23B", "score24B",
                    "score25B", "score26B", "score27B", "score28B", "score29B", "score30B",
                    "score31B", "score32B", "score33B", "score34B", "score35B", "score36B"];
const groupCompo = [['Groupe A', A1, A2, A3, A4],
                    ['Groupe B', B1, B2, B3, B4],
                    ['Groupe C', C1, C2, C3, C4],
                    ['Groupe D', D1, D2, D3, D4],
                    ['Groupe E', E1, E2, E3, E4],
                    ['Groupe F', F1, F2, F3, F4]];
const GroupRankingInit = [
  {'group' : '', 'rank' : 1, 'team' : '', 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : '', 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : '', 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : '', 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupARanking = [
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupBRanking = [
  {'group' : 'Groupe B', 'rank' : 1, 'team' : B1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : B2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : B3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : B4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupCRanking = [
  {'group' : 'Groupe C', 'rank' : 1, 'team' : C1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe C', 'rank' : 1, 'team' : C2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe C', 'rank' : 1, 'team' : C3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe C', 'rank' : 1, 'team' : C4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupDRanking = [
  {'group' : 'Groupe D', 'rank' : 1, 'team' : D1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe D', 'rank' : 1, 'team' : D2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe D', 'rank' : 1, 'team' : D3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe D', 'rank' : 1, 'team' : D4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupERanking = [
  {'group' : 'Groupe E', 'rank' : 1, 'team' : E1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe E', 'rank' : 1, 'team' : E2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe E', 'rank' : 1, 'team' : E3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe E', 'rank' : 1, 'team' : E4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupFRanking = [
  {'group' : 'Groupe F', 'rank' : 1, 'team' : F1, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe F', 'rank' : 1, 'team' : F2, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe F', 'rank' : 1, 'team' : F3, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe F', 'rank' : 1, 'team' : F4, 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
const GroupRankingList = [GroupARanking, GroupBRanking, GroupCRanking, GroupDRanking, GroupERanking, GroupFRanking];

function UpdateGroupDisplay(Group) {
  let GroupRanking;
  let rank1, r1team, r1played, r1pts, r1BP, r1BM, r1GA;
  let rank2, r2team, r2played, r2pts, r2BP, r2BM, r2GA;
  let rank3, r3team, r3played, r3pts, r3BP, r3BM, r3GA;
  let rank4, r4team, r4played, r4pts, r4BP, r4BM, r4GA;
  let rankidx = [0, 1, 2, 3];
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
    case 2:
      GroupRanking = GroupCRanking;
      rank1 = rankC1;
      r1team = rC1team;
      r1played = rC1played;
      r1pts = rC1pts;
      r1BP = rC1BP;
      r1BM = rC1BM;
      r1GA = rC1GA;
      rank2 = rankC2;
      r2team = rC2team;
      r2played = rC2played;
      r2pts = rC2pts;
      r2BP = rC2BP;
      r2BM = rC2BM;
      r2GA = rC2GA;
      rank3 = rankC3;
      r3team = rC3team;
      r3played = rC3played;
      r3pts = rC3pts;
      r3BP = rC3BP;
      r3BM = rC3BM;
      r3GA = rC3GA;
      rank4 = rankC4;
      r4team = rC4team;
      r4played = rC4played;
      r4pts = rC4pts;
      r4BP = rC4BP;
      r4BM = rC4BM;
      r4GA = rC4GA;
      break;
    case 3:
      GroupRanking = GroupDRanking;
      rank1 = rankD1;
      r1team = rD1team;
      r1played = rD1played;
      r1pts = rD1pts;
      r1BP = rD1BP;
      r1BM = rD1BM;
      r1GA = rD1GA;
      rank2 = rankD2;
      r2team = rD2team;
      r2played = rD2played;
      r2pts = rD2pts;
      r2BP = rD2BP;
      r2BM = rD2BM;
      r2GA = rD2GA;
      rank3 = rankD3;
      r3team = rD3team;
      r3played = rD3played;
      r3pts = rD3pts;
      r3BP = rD3BP;
      r3BM = rD3BM;
      r3GA = rD3GA;
      rank4 = rankD4;
      r4team = rD4team;
      r4played = rD4played;
      r4pts = rD4pts;
      r4BP = rD4BP;
      r4BM = rD4BM;
      r4GA = rD4GA;
      break;
    case 4:
      GroupRanking = GroupERanking;
      rank1 = rankE1;
      r1team = rE1team;
      r1played = rE1played;
      r1pts = rE1pts;
      r1BP = rE1BP;
      r1BM = rE1BM;
      r1GA = rE1GA;
      rank2 = rankE2;
      r2team = rE2team;
      r2played = rE2played;
      r2pts = rE2pts;
      r2BP = rE2BP;
      r2BM = rE2BM;
      r2GA = rE2GA;
      rank3 = rankE3;
      r3team = rE3team;
      r3played = rE3played;
      r3pts = rE3pts;
      r3BP = rE3BP;
      r3BM = rE3BM;
      r3GA = rE3GA;
      rank4 = rankE4;
      r4team = rE4team;
      r4played = rE4played;
      r4pts = rE4pts;
      r4BP = rE4BP;
      r4BM = rE4BM;
      r4GA = rE4GA;
      break;
    case 5:
      GroupRanking = GroupFRanking;
      rank1 = rankF1;
      r1team = rF1team;
      r1played = rF1played;
      r1pts = rF1pts;
      r1BP = rF1BP;
      r1BM = rF1BM;
      r1GA = rF1GA;
      rank2 = rankF2;
      r2team = rF2team;
      r2played = rF2played;
      r2pts = rF2pts;
      r2BP = rF2BP;
      r2BM = rF2BM;
      r2GA = rF2GA;
      rank3 = rankF3;
      r3team = rF3team;
      r3played = rF3played;
      r3pts = rF3pts;
      r3BP = rF3BP;
      r3BM = rF3BM;
      r3GA = rF3GA;
      rank4 = rankF4;
      r4team = rF4team;
      r4played = rF4played;
      r4pts = rF4pts;
      r4BP = rF4BP;
      r4BM = rF4BM;
      r4GA = rF4GA;
      break;
    }

  // Display Rank
  //------------------------------------------------------------------------------------------------
  // ToDo: careful in case of draw (first keystroke => all teams are first)
  //------------------------------------------------------------------------------------------------

  for (let ranknb = 1; ranknb <GroupRanking.length + 1; ranknb++){
    for (let i = 0; i < GroupRanking.length; i++){
      if (GroupRanking[i]['rank'] == ranknb){
        rankidx[ranknb-1] = i;
      }
    }
  }
  rank1.textContent = GroupRanking[rankidx[0]]['rank'];
  r1team.textContent = GroupRanking[rankidx[0]]['team'];
  r1played.textContent = GroupRanking[rankidx[0]]['played'];
  r1pts.textContent = GroupRanking[rankidx[0]]['pts'];
  r1BP.textContent = GroupRanking[rankidx[0]]['BP'];
  r1BM.textContent = GroupRanking[rankidx[0]]['BM'];
  r1GA.textContent = GroupRanking[rankidx[0]]['GA'];
  rank2.textContent = GroupRanking[rankidx[1]]['rank'];
  r2team.textContent = GroupRanking[rankidx[1]]['team'];
  r2played.textContent = GroupRanking[rankidx[1]]['played'];
  r2pts.textContent = GroupRanking[rankidx[1]]['pts'];
  r2BP.textContent = GroupRanking[rankidx[1]]['BP'];
  r2BM.textContent = GroupRanking[rankidx[1]]['BM'];
  r2GA.textContent = GroupRanking[rankidx[1]]['GA'];
  rank3.textContent = GroupRanking[rankidx[2]]['rank'];
  r3team.textContent = GroupRanking[rankidx[2]]['team'];
  r3played.textContent = GroupRanking[rankidx[2]]['played'];
  r3pts.textContent = GroupRanking[rankidx[2]]['pts'];
  r3BP.textContent = GroupRanking[rankidx[2]]['BP'];
  r3BM.textContent = GroupRanking[rankidx[2]]['BM'];
  r3GA.textContent = GroupRanking[rankidx[2]]['GA'];
  rank4.textContent = GroupRanking[rankidx[3]]['rank'];
  r4team.textContent = GroupRanking[rankidx[3]]['team'];
  r4played.textContent = GroupRanking[rankidx[3]]['played'];
  r4pts.textContent = GroupRanking[rankidx[3]]['pts'];
  r4BP.textContent = GroupRanking[rankidx[3]]['BP'];
  r4BM.textContent = GroupRanking[rankidx[3]]['BM'];
  r4GA.textContent = GroupRanking[rankidx[3]]['GA'];
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

function DrawProcessing(GroupRanking, rank) {
  let countRank = 0;
  let GroupDraw = [
    {'index' : 0, 'criterion1' : 0},
    {'index' : 0, 'criterion1' : 0},
    {'index' : 0, 'criterion1' : 0},
    {'index' : 0, 'criterion1' : 0}
  ];
  //------------------------------------------------------------------------------------------------
  // ToDo: use actural rules!!!!
  //------------------------------------------------------------------------------------------------

  // for (rank = 1; rank < GroupRanking.length; rank++) {
    for (let i = 0; i < GroupRanking.length; i++){
      if (GroupRanking[i]['rank'] == rank){
        GroupDraw[countRank]['index'] = i;
        countRank += 1;
      }
    }
  // }
  if (countRank > 1){
    for (let j = 0; j < countRank; j++){
      GroupDraw[j]['criterion1'] =  1000 * GroupRanking[GroupDraw[j]['index']]['pts'] +
                                  100 * GroupRanking[GroupDraw[j]['index']]['GA'] +
                                  GroupRanking[GroupDraw[j]['index']]['BP'];
    }
    for (let i = 0; i < countRank; i++){
      for (let j = 0; j < countRank; j++){
        if (i == j){
          continue;
        }
        if (GroupDraw[i]['criterion1'] < GroupDraw[j]['criterion1']) {
          GroupRanking[GroupDraw[i]['index']]['rank'] += 1;
        }
      }
    }
  }
  return countRank;
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
  // Are there draws?
  DrawProcessing(GroupRanking, 1);
  DrawProcessing(GroupRanking, 2);
  DrawProcessing(GroupRanking, 3);
  DrawProcessing(GroupRanking, 4);
}

function logKey(e) {
  // Reset GroupRanking
  ResetGroupRanking("A", GroupARanking);
  ResetGroupRanking("B", GroupBRanking);
  ResetGroupRanking("C", GroupCRanking);
  ResetGroupRanking("D", GroupDRanking);
  ResetGroupRanking("E", GroupERanking);
  ResetGroupRanking("F", GroupFRanking);

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
        case 'Groupe C':
          indexGroup = 2;
          break;
        case 'Groupe D':
          indexGroup = 3;
          break;
        case 'Groupe E':
          indexGroup = 4;
          break;
        case 'Groupe F':
          indexGroup = 5;
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
  for (let i = 0; i < GroupRankingList.length; i++) {
    UpdateGroupDisplay(i);
  }
}

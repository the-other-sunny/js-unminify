test0: {
  "FightTeamMemberWithAllianceCharacterInformations" === t.teamMembers[0]._type && (n = t.teamMembers[0].allianceInfos.allianceId);
  switch (true) {
    case null !== o && o === n:
      i = 0;
      break;
    case null !== a && n === a:
      i = 1;
      break;
    default:
      i = 2;
  }
}
// Action creator
function addPlayerAction(playerName) {
   return { type: 'ADD_PLAYER', playerName: playerName }
}

function removePlayerAction(playerName) {
   return { type: 'REMOVE_PLAYER', playerName: playerName }
}

function setTeamNameAction(teamName) {
   return { type: 'SET_TEAM_NAME', teamName: teamName }
}
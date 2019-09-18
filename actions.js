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

function clearAction() {
   return { type: 'CLEAR' }
}

function saveTeamNameThunk(teamName) {
   return function(dispatch) {
      saveTeamNameApi(teamName).then( newTeamName => {
         dispatch(setTeamNameAction(newTeamName))
      }).catch( exc => {
         alert('ERROR')
         // store.dispatch(setTeamNameAction('ERROR'))
      });
   }
}
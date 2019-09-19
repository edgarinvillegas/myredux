function playersReducer(state = [], action) {
   switch(action.type) {
      case 'ADD_PLAYER': {
         const playerName = action.playerName;
         // return state.concat([playerName])
         return [...state, playerName];
      }
      case 'REMOVE_PLAYER': {
         const playerName = action.playerName;
         return state.filter(p => p != playerName);
      }
      case 'CLEAR': {
         return [];
      }
      default:
         return state;
   }
}
/**
 *
 * state = 'Chacarita Juniors'
 */
function teamNameReducer(state = '', action) {
   switch (action.type) {
      case 'SET_TEAM_NAME':
         const teamName = action.teamName;
         return teamName;
      case 'CLEAR':
         return ''
      default:
         return state;
   }
}

/*
  stateTree = {
     teamName: 'THE STRONGEST',
     players: ['Chumita', 'Vaca', 'Vaca2', 'Vaca3']
  }
* */
// function rootReducer(state = {}, action) {
//    return {
//       players: playersReducer(state.players, action),
//       teamName: teamNameReducer(state.teamName, action)
//    };
// }

const rootReducer = Redux.combineReducers({
   players: playersReducer,
   teamName: teamNameReducer
})
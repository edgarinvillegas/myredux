console.log('Hola index.js')


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
      default:
         return state;
   }
}

/*
  state = {
     teamName: 'THE STRONGEST',
     players: ['Chumita', 'Vaca', 'Vaca2', 'Vaca3']
  }
* */
function rootReducer(state = {}, action) {
   return {
      players: playersReducer(state.players, action),
      teamName: teamNameReducer(state.teamName, action)
   };
}



/*['Chuma', 'Messi', 'Suarez']*/

const store = createStore(rootReducer);
store.subscribe(function(){
   console.log('State changed!! to: ', store.getState())
})



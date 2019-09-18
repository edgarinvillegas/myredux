const { createStore, applyMiddleware } = Redux;

/*['Chuma', 'Messi', 'Suarez']*/

const store = createStore(rootReducer, applyMiddleware(ReduxThunk.default));

store.subscribe(function(){
   console.log('State changed!! to: ', store.getState())
})


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



function saveTeamNameApi(teamName) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(Math.random() < 0.5)
            resolve(teamName + ' (R)')
         else
            reject()
      }, 4000)
   })
}


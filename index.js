console.log('Hola index.js')

function playersReducer(state = [], action) {
   switch(action.type) {
      case 'ADD_PLAYER':
         const playerName = action.playerName;
         return state.concat([playerName])
      // case 'REMOVE_PLAYER':
      default:
         return state;
   }
}


/*['Chuma', 'Messi', 'Suarez']*/

const store = createStore(playersReducer);
store.subscribe(function(){
   console.log('State changed!! to: ', store.getState())
})

// console.log('Newly created store state', store.getState())
//
// const actionChuma = { type: 'ADD_PLAYER', playerName: 'Chuma' };
// store.dispatch(actionChuma)
//
// console.log('State after dispatching actionChuma: ', store.getState())
//
// store.dispatch({ type: 'ADD_PLAYER', playerName: 'Escobar' })
//
// console.log('State after dispatching other action: ', store.getState())

// const newList = playersReducer([], actionChuma)
// console.log('newList', newList)



function createStore(reducer) {
   let state;
   let listeners = []
   return {
      getState: function () {
         return state;
      },
      dispatch: function(action) {
         // middleware
         state = reducer(state, action);
         listeners.forEach( l => l());
      },
      subscribe: function(listener) {
         listeners.push(listener);
      }
   }
}
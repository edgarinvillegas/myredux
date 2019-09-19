const { createStore, applyMiddleware } = Redux;

/*['Chuma', 'Messi', 'Suarez']*/

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk.default));

function createMyStore(){
   return createStore(rootReducer, applyMiddleware(ReduxThunk.default));
}
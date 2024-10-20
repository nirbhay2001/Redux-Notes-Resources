import {createStore} from 'redux';

// store
const store = createStore(reducer);

const history = [];

// reducer
function reducer(state={amount:1},action){
    if(action.type === 'increment'){

        // immutability
        // state.amount = state.amount+1 //ye tarika sahi nahi hai

        return {amount: state.amount+1}
    }
    return state
}

// global state
// console.log(store.getState())
store.subscribe(()=>{

    history.push(store.getState())
    console.log(history) 
})

// store.dispatch({type:'increment'}) // es tarah se kisi store ke reducer ke pas action ko bhejte hai, {type:'increment'} ye ak action hai

setInterval(()=>{
    store.dispatch({type:'increment'})
},2000)

// console.log(store.getState())


/*

    The createStore function is a fundamental concept in state management libraries, particularly in the context of front-end development using frameworks like Redux or Mobx. It is used to create a store object that holds the application's global state and provides methods to interact with and manipulate that state.

    1. Initialization: When you call createStore, you usually pass in a reducer function as an argument. The reducer function defines how the state should change in response to different actions. It takes the current state and an action as arguments and returns the new state.

    2. Store Object: createStore returns a store object that contains the following:

        State: The current state of your application, initially set to whatever the reducer returns when called with no prior state and a special "initialization" action. This state is often referred to as the "store state."

        Dispatch: A method that allows you to dispatch actions to the store. When you dispatch an action, it's passed to the reducer, which calculates the new state based on the current state and the action.

        Subscribe: A method that allows you to register callback functions that are called whenever the state changes. This is often used to update the user interface when the state changes.

        GetState: A method that returns the current state of the store. It allows you to access the state without modifying it.


*/


import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
// package for applyMiddleware --> npm install redux-logger
// middleware ka use ham esliye karte hai jo action dispatch ke through bhejte hai wah direct reducer ke pas n jaye, sabse pahle middleware ke pas jaye phir uske bad reducer ke pass jaye

// store
const store = createStore(reducer,applyMiddleware(logger.default));

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
// store.subscribe(()=>{

//     history.push(store.getState())
//     console.log(history) 
// })

// store.dispatch({type:'increment'}) // es tarah se kisi store ke reducer ke pas action ko bhejte hai, {type:'increment'} ye ak action hai

setInterval(()=>{
    store.dispatch({type:'increment'})
},5000)

// console.log(store.getState())


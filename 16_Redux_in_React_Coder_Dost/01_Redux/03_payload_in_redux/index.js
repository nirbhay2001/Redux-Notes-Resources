import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
// package for applyMiddleware --> npm install redux-logger
// middleware ka use ham esliye karte hai jo action dispatch ke through bhejte hai wah direct reducer ke pas n jaye, sabse pahle middleware ke pas jaye phir uske bad reducer ke pass jaye


// Action name constant
const inc = 'increment';
const dec = 'decrement';
const incByAmt = 'incrementByAmount';


// store
const store = createStore(reducer,applyMiddleware(logger.default));

const history = [];

// reducer
function reducer(state={amount:1},action){
    if(action.type === inc){
        return {amount: state.amount+1}
    }
    if(action.type === dec){
        return {amount: state.amount-1}
    }
    if(action.type === incByAmt){
        return {amount: state.amount+ action.payload};
    }

    return state
}


// Action creators
function increment(){
    return {type:inc}
}

function decrement(){
    return {type:dec}
}

function incrementByAmount(value){
    return {type:incByAmt,payload:value}
}

setInterval(()=>{
    // store.dispatch({type:'increment'})
    // store.dispatch({type:'decrement'})
    // store.dispatch(increment());
    store.dispatch(incrementByAmount(5));

    // dispatch ke ander ham hamesha plain javascript object pass karte hai
},2000)

// console.log(store.getState())


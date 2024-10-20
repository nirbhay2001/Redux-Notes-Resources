import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
// package for applyMiddleware --> npm install redux-logger
// middleware ka use ham esliye karte hai jo action dispatch ke through bhejte hai wah direct reducer ke pas n jaye, sabse pahle middleware ke pas jaye phir uske bad reducer ke pass jaye

//  npm install -g json-server --> es command ki help se ak fake api server bana sakte hai
// json-server db.json; json-server json_file_name
// npm install axios --> es command se api ko fetch kar sakte hai


// Action name constant
const init = 'init';
const inc = 'increment';
const dec = 'decrement';
const incByAmt = 'incrementByAmount';


// store
const store = createStore(reducer,applyMiddleware(logger.default));

const history = [];

// reducer
function reducer(state={amount:1},action){

    switch(action.type){
        case init:
            return {amount: amount.payload}
        case inc:
                return {amount: state.amount+1}  
        case dec:
                return {amount: state.amount-1} 
        case incByAmt:
            return {amount: state.amount+ action.payload};
        default:
            return state
    }

    
}




getUser();


// Action creators

async function initUser(value){
    
    return {type:init, payload:value}
    // es tarah se kisi user ka amount ko initialize kar sakte hai
}

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
    store.dispatch(initUser(5));
},2000)

// console.log(store.getState())






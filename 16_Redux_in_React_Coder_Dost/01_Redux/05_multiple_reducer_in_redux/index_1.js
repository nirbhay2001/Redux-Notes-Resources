import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
// package for applyMiddleware --> npm install redux-logger
// middleware ka use ham esliye karte hai jo action dispatch ke through bhejte hai wah direct reducer ke pas n jaye, sabse pahle middleware ke pas jaye phir uske bad reducer ke pass jaye

//  npm install -g json-server --> es command ki help se ak fake api server bana sakte hai
// json-server db.json; json-server json_file_name
// npm install axios --> es command ki help se axios ko install kar sakte hai, jo api ke data ko fetch karne me help karega

// npm install redux-thunk --> es command ki help se thunk middleware ko install kar sakte hai


// Action name constant
const init = 'init';
const inc = 'increment';
const dec = 'decrement';
const incByAmt = 'incrementByAmount';


// store
const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger.default, thunk.default));

const history = [];

// reducer
function accountReducer(state={amount:1},action){

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


    // kisi bhi reducer me kewal usi ka state change kar sakte hai,dusre reducer ke help se koi decision ko le sakte hai

    
}

function bonusReducer(state = {points: 0}, action){
    switch(action.type){
        case incByAmt:
            if(action.payload>=100)
                return {points: state.points + 1};
        default:
            return state;
    }

     // kisi bhi reducer me kewal usi ka state change kar sakte hai,dusre reducer ke help se koi decision ko le sakte hai, es reducer ka bonus change huaa hai lekin amount change nahi huaa hai kewal amount ke basis per decision liya hai
}



// Action creators

function getUser(id){ 
    return async (dispatch,getState) => {
        const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
        dispatch(initUser(data.amount))
    }
    
    // es tarah se kisi user ka amount ko initialize kar sakte hai

    // Action me hamesha plane object hona chahiye i.e {type:init, payload:data.amount} es tarike ka hona chahiye lekin hamne function me ak async function pas kar diya jo bydefault ak promise ko return karta hai lekin Action synchronous hota hai ye wait nahi karte hai, esliye es problem ko dur karne ke liye hame ak middleware ka use karna padega
    // getUser bhi ak Action creator hai lekin ye action creators async hai esliye es Action ka format es tarah se hai


}

function initUser(value){
    return {type:init, payload: value}
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

setTimeout(()=>{
    // store.dispatch({type:'increment'})
    // store.dispatch({type:'decrement'})
    // store.dispatch(increment());
    // store.dispatch(getUser(1));
    store.dispatch(incrementByAmount(2))
    store.dispatch(incrementByAmount(200))
    // thunk middleware ko use karne se es dispatch ka behavior change ho gya hai, eske pas do option hai jab eske pas plane object aata hai to ye redux ki tarah bahave karta hai, lekin jab eske pas function ka definition aata hai to ye samajh jata hai ki eako redux ki tarah solve nahi karna hai, esme two parameter ko pass karna hai ak dispatch aur ak gatState
},2000)

// console.log(store.getState())






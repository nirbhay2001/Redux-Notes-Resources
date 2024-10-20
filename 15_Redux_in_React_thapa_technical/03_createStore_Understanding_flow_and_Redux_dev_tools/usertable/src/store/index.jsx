import {configureStore} from "@reduxjs/toolkit";
// import {userSlice} from "./slices/UserSlice"; --> Just remove the {curly braces} bcz we export it as default.

// reducer --> If this is a single function, it will be directly used as the root reducer for the store.If it is an object of slice reducers, like {users: usersReducer, posts: postsReducer}, configureStore will autometically create the root reducer by passing this object to the Redux combineReducers utility.

/*
const store = configureStore({
    reducer: {
        users: userSlice.reducer,
    }
});
*/

const store = configureStore({
    reducer: {
        users: userSlice,
    }
});


console.log(userSlice.actions);

export default store;
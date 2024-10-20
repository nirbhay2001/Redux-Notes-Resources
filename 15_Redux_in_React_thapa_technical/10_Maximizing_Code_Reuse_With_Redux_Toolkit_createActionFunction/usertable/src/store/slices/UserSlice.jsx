import {createSlice} from "@reduxjs/toolkit";
import {clearAllUsers} from "../store/action";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state,action){
            state.push(action.payload); // ye ak as argument accept kar raha hai , esme jo data aayega o dispatch ki help se aayega, esme data UserDetail wala page se bheja ja raha hai
        },
        removeUser(state,action){
            // console.log("hii", + action.payload)
            // state.pop(action.payload)

            // splice() --> The splice() method in JavaSrcipt used to modify an array by adding or removing element

            state.splice(action.payload,1) // yaha per action.payload index number ko represent kar raha hai, ye index number uska hai jisko delete kara hai, uske bad jitna number of data ko delete karna hai usko pass karte hai

        },
        clearAllUsers(state, action) {
            // If action is supposed to be handled by one reducer, use reducers.
            // If action is supposed to be handled by multiple reducers, use extraReducers
            
        },
    },
    extraReducers(builder){
        // ye kisi bhi slice per dependent nahi hai, es code ko sare slice me use kar sakte hai
    builder.addCase(clearAllUsers, () => {
                return [];
            })
    }
});

console.log(userSlice.actions);// userSlice.actions --> eski help se userSlice ke ander sare micro reducer ko access kiya ja sakta hai

// export { userSlice };

export default userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions; // esko esliye kar rahe hai ki jo userSlice ke ander jitne bhi micro reducer hai wah kisi dusre file me use ho sake, 
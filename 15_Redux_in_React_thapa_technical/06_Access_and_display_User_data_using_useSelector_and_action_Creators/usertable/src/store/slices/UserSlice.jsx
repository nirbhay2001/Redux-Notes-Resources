import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state,action){
            state.push(action.payload); // ye ak as argument accept kar raha hai , esme jo data aayega o dispatch ki help se aayega, esme data UserDetail wala page se bheja ja raha hai
        },
        removeUser(state,action){},
        deleteUsers(state, action) {},
    },
});

console.log(userSlice.actions);// userSlice.actions --> eski help se userSlice ke ander sare micro reducer ko access kiya ja sakta hai

// export { userSlice };

export default userSlice.reducer;
export const {addUser} = userSlice.actions; // esko esliye kar rahe hai ki jo userSlice ke ander jitne bhi micro reducer hai wah kisi dusre file me use ho sake, 
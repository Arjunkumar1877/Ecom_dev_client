import { createSlice, current} from '@reduxjs/toolkit';


let initialState = {
   currentUser: null,
   loading: false,
   error: null  
}


const userSlice = createSlice({
    name: 'user',                               
    initialState,
    reducers: {

        signinSuccess: (state, action)=> {
            state.currentUser = action.payload;
            state.loading = false;     
            state.error = null;     
        },
        signOutSuccess: (state, action)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;

        }
    }});


  export   const { signOutSuccess, signinSuccess } =  userSlice.actions;

  export default userSlice.reducer;
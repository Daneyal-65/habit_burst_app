import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        value:false,
        id:''
    },
    reducers:{
        setAuth: (state,action) =>{
         if(action.payload){
            state.value = true
         }
        },
        removeAuth: (state,action)=>{
            if(!action.payload){
                state.value = false
            }
        },
        setAuthId:(state,action)=>{
          const {currentState,id} = action.payload;
          state.value = currentState;
          state.id = id;
        
    },
    defaultSatatus:(state)=>{
        let status = JSON.parselocalStorage.getItem('userInfo')
        if(status.id){
            state.id =status.id
        }
    }
    }

})
export const {setAuth,removeAuth,setAuthId,defaultSatatus} = authSlice.actions;
export default authSlice.reducer;
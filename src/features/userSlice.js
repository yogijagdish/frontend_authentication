import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:"",
    email:"",
    name:"",
}

export const userSlice = createSlice({
    name: 'get_user_data',
    initialState,
    reducers: {
        setUserData: (state,action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.name = action.payload.name
        },
        unSetUserData: (state,action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.name = action.payload.name
        }
    }
})

export const {setUserData,unSetUserData} = userSlice.actions

export default userSlice.reducer
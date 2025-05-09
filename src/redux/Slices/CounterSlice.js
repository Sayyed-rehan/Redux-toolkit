import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:"counter",
    initialState: {
        count : 1
    },
    reducers:{
        increment: (state)=>{
            state.count = state.count + 1
        },

        decrement: (state)=>{
            state.count = state.count - 1
        }
    }
})

export default counterSlice
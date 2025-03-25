import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./Slices/CounterSlice"

const Store = configureStore({
    reducer:{
        counterState: counterSlice.reducer
    }
})

export default Store
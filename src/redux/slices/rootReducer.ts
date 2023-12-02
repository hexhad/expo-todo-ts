import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
const rootReducer = combineReducers({
    todo: todoSlice,
})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
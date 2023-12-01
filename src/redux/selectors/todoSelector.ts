import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../slices/rootReducer"

const initialState  = (state: RootState) => state
export const getKabanBoard = createSelector(initialState, (state: { todo: any }) => state.todo.data)

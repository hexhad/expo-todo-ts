import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../slices/rootReducer"

const rootState = (state: RootState) => state

export const getKabanBoard = createSelector(rootState, (state: RootState) => state.todo.data)
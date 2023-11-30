import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type todoType = {
  dummy:boolean;
}

const initialState : todoType = {
  dummy:false,
}


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    initTodo: (state,action) => ({
      ...state,
      dummy: false,
    }),
  },
});

export default todoSlice.reducer;
export const { initTodo } = todoSlice.actions;

import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type todoType = {
  data: any;
}


const initialState: todoType = {
  data: [
    {
      category: 'todo',
      tasks: [

      ]
    }, {
      category: 'done',
      tasks: []
    }
  ],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    initTodo: (state, action) => ({
      ...state,
      dummy: false,
    }),
  },
});

export default todoSlice.reducer;
export const { initTodo } = todoSlice.actions;

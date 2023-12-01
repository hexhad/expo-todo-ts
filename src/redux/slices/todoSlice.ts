import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';


const data = [
  {
    id: 1,
    name: 'TO DO',
    rows: [
      {
        id: '1',
        name: 'Analyze your audience',
        description: 'Learn more about the audience to whom you will be speaking'
      },
    ]
  },
  {
    id: 2,
    name: 'IN PROGRESS',
    rows: [
      {
        id: '4',
        name: 'Look at drawings',
        description: 'How did they use line and shape? How did they shade?'
      },
    ]
  },
  {
    id: 3,
    name: 'DONE',
    rows: [
      {
        id: '7',
        name: 'Draw from life',
        description: 'Do you enjoy coffee? Draw your coffee cup'
      },
    ]
  }
]

export type todoType = {
  data:{}[]
}

const initialState : todoType = {
  data:data,
}


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    onDragUpdater: (state,action) => ({
      ...state,
      data:action.payload,
    }),
  },
});

export default todoSlice.reducer;
export const { onDragUpdater } = todoSlice.actions;



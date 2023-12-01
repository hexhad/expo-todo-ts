import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { todoUpdateAction } from '../actions/todoAction';

const data = [
  {
    id: 1,
    name: 'Todo',
    rows: [
      
    ]
  },
  {
    id: 2,
    name: 'In Progress',
    rows: [

    ]
  },
  {
    id: 3,
    name: 'Done',
    rows: [

    ]
  }
]


export type todoType = {
  data: {}[]
}

const initialState: todoType = {
  data,
}


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    onDragUpdater: (state, action) => {

      return {
        ...state,
        // data: action.payload,
      }
    },
  },
  extraReducers:builder=>{
    builder.addCase(todoUpdateAction.fulfilled,(state,action)=>{
      console.log(action);
      
    })
  }
});

export default todoSlice.reducer;
export const { onDragUpdater } = todoSlice.actions;



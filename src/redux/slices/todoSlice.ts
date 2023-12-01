import { CaseReducer, PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

type Task = {
  description: string;
  id: string;
  name: string;
  current: 'TODO' | 'IN_PROGRESS' | 'DONE'; // Assuming these are the possible task statuses
};

export type Category = 'TODO' | 'IN_PROGRESS' | 'DONE';

type TodoType = {
  data: {
    category: Category;
    tasks: Task[];
  }[];
};


const initialState: TodoType = {
  data: [
    {
      category: 'TODO',
      tasks: [
        { description: "How did they use line and shape? How did they shade?", id: "4", name: "Look at drawings", current: 'TODO' }
      ]
    }, {
      category: 'IN_PROGRESS',
      tasks: []
    }, {
      category: 'DONE',
      tasks: []
    }
  ],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addCardData: (state, action) => ({
      ...state,
        data: state.data.map(({ category, tasks }) => {
        if (category == action.payload.category) {
          return {
            category,
            tasks: [
              ...tasks,
              {
                description: action.payload.description,
                id: nanoid(),
                name: action.payload.name,
                current: 'TODO'
              }
            ]
          }
        } else {
          return {
            category,
            tasks
          }
        }
      })
    }),
    updateDraggedData: (state, action) => {
      const shouldMoveCategory = action.payload.parent.category ?? 'TODO'
      const processedMovedObj = {
        ...action.payload.child,
        current: shouldMoveCategory,
      }
      const movedId = action.payload.child.id;
      const deepProcessedMainObj = {
        ...state,
        data: [
          ...state.data?.map(({ category, tasks = [] }) => {
            return {
              category,

              tasks: tasks?.reduce((a, c) => {
                return c.id == movedId ? a : [
                  ...a,
                  c
                ]
              }, [...(category === shouldMoveCategory ? [processedMovedObj] : [])])
            }
          })
        ],
      }
      return deepProcessedMainObj
    },
  },
});

export default todoSlice.reducer;
export const { updateDraggedData, addCardData } = todoSlice.actions;

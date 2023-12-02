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
      tasks: []
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
                current: action.payload.category,
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
    updateCard: (state, action) => {
      console.log(action.payload);
      const {description, id, name, newCategory, category:oldCategory} = action.payload;
      return ({
      ...state,
      data: state.data.map(({ category, tasks }) => {
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',newCategory ,oldCategory);
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',category , oldCategory);

        
        if (newCategory !== oldCategory && category == oldCategory){
          console.log(tasks);
          console.log(tasks.filter((item) => item.id !== id));
          
          return {
            category,
            tasks: tasks.filter((item) => item.id !== id)
          }
        }else if (category == newCategory) {
          return {
            category,
            tasks: tasks.map((item) => {
              if (item.id == id) {
                console.log('ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
                
                return {
                  description,
                  id,
                  name,
                  current:newCategory,
                }
              } else {
                console.log('ADDDDDDDDDDDDDDDDDDDDDDDDDRRRRRRRRRRRRRRRRRRRRDDDDDDDDDDDDDDDDDDDDD');
                return item;
              }
            })
          }
        }else {
          return {
            category,
            tasks
          }
        }
      })
    })},
    deleteCard: (state, action) => ({
      ...state,
      data:state.data.map(({category,tasks})=>({
        category,
        tasks:tasks.filter(item=>item.id!==action.payload.id)
      }))
    })
  },
});

export default todoSlice.reducer;
export const { updateDraggedData, addCardData, updateCard, deleteCard } = todoSlice.actions;

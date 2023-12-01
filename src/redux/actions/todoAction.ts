import {createAsyncThunk} from '@reduxjs/toolkit';

export const todoUpdateAction = createAsyncThunk<{}>(
  'data/modalHide',
  async (value, {getState, dispatch}) => {
    try {
      console.log(value);
    } catch (error) {
      throw error;
    }
  },
);

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const enum CursorState {
  'active',
  'default'
}

export interface CustomCursorState {
  value: CursorState;
}

const initialState: CustomCursorState = {
  value: CursorState.default
}

export const customCursorSlice = createSlice({
  name: 'customCursor',
  initialState,
  reducers: {
    setCustomCursorState: (state, action: PayloadAction<CursorState>) => {
      state.value = action.payload;
    }
  },
});


export const { actions: customCursorMutations, reducer: customCursorReducer } = customCursorSlice;

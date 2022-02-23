import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import assemblyReducer, { ASSEMBLY_FEATURE_KEY } from '../features/assembly/assemblySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [ASSEMBLY_FEATURE_KEY]: assemblyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

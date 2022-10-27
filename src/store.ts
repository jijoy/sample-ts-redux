import {
  Action,
  AnyAction,
  configureStore,
  createSlice,
  Dispatch,
  Middleware,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  state: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  state: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const loggerMiddleware: Middleware<
  {},
  CounterState,
  Dispatch<AnyAction>
> = (store) => (next) => (action) => {
  console.group(action.type);
  console.info(`Dispatching ->`, action);
  let result = next(action);
  console.log(`next state ${store.getState()}`);
  console.groupEnd();
  return result;
};
export const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

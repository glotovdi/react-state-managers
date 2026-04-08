import { configureStore } from "@reduxjs/toolkit";
import { apiRTK } from "./rtq/redux-toolkit-query";
import likesReducer from "./slices/likes";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
    [apiRTK.reducerPath]: apiRTK.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRTK.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

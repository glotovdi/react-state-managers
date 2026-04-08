import { configureStore } from "@reduxjs/toolkit";
import { apiRTKQ } from "./rtkq/redux-toolkit-query";
import likesReducer from "./slices/likes";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
    [apiRTKQ.reducerPath]: apiRTKQ.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRTKQ.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

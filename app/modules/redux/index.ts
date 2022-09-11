import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../redux/search/slice";
import { watcherSearch } from "../saga/search";

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        search: searchReducer
    },
    middleware: [saga]
});

saga.run(watcherSearch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
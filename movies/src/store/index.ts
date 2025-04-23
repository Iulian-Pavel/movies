import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice';
import personReducer from './personSlice';

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        people: personReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
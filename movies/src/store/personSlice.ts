import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPeople, Person } from "../services/tmdb";

interface PeopleState {
    people: Person[];
    loading: boolean;
    error: string | null;
    id: number
}

const initialState: PeopleState = {
    people: [],
    loading: false,
    error: null,
    id: 0
}

export const fetchPeopleThunk = createAsyncThunk<Person[]>(
    'popular people',
    async () => {
        const people = await fetchPeople();
        return people;
    }
)

const personSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPeopleThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPeopleThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.people = action.payload;
        })
        .addCase(fetchPeopleThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch people"
        })
    },
});

export default personSlice.reducer;
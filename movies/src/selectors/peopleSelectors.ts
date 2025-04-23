import { RootState } from "../store";

export const selectPeople = (state: RootState) => state.people.people;
export const selectPeopleLoading = (state: RootState) => state.people.loading;
export const selectPeopleError = (state: RootState) => state.people.error;
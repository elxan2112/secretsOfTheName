import { RootState } from "..";

export const selectSearchList = (state: RootState) => {
    return state.search.searchResult;
}

export const selectIsLoading = (state: RootState) => {
    return state.search.isLoading;
}

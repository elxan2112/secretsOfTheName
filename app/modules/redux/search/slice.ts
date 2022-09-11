import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INameInfo } from "../../../entities";

export interface ISearch {
    searchResult: INameInfo,
    isLoading: boolean
}

const initialState: ISearch = {
    searchResult: {} as INameInfo,
    isLoading: false
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchFetch: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        setSearchSuccess: (state, action: PayloadAction<INameInfo>) => {
            state.searchResult = action.payload;
            state.isLoading = false;
        },
        setSearchFailed: (state) => {
            state.isLoading = false;
        }
    }
})

export const { searchFetch, setSearchSuccess, setSearchFailed } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
import { IAgify, IGender, INameInfo, INationalize } from "../../../entities";
import { setSearchFailed, setSearchSuccess } from "../../redux/search/slice";
import { call, put, takeEvery } from "redux-saga/effects";
import { IFetch } from "../../../services/requester";
import { PayloadAction } from "@reduxjs/toolkit";

function* workerSendRequest(action: PayloadAction<string>) {
    try {
        const nationalizeUrl = `https://api.nationalize.io/?name=${action.payload}`;
        const nationalizeResponse = (yield call(IFetch.fetchRequest, nationalizeUrl, "GET")) as INationalize;
        const genderizeUrl = `https://api.genderize.io/?name=${action.payload}`;
        const genderizeResponse = (yield call(IFetch.fetchRequest, genderizeUrl, "GET")) as IGender;
        const agifyUrl = `https://api.agify.io/?name=${action.payload}`;
        const agifyResponse = (yield call(IFetch.fetchRequest, agifyUrl, "GET")) as IAgify;
        const response: INameInfo = {
            ...nationalizeResponse,
            count: genderizeResponse.count,
            gender: genderizeResponse.gender,
            age: agifyResponse.age
        };
        yield put(setSearchSuccess(response));
    } catch (error) {
        console.warn(error);
        yield put(setSearchFailed());
    }
}

export function* watcherSearch() {
    yield takeEvery("search/searchFetch", workerSendRequest);
}
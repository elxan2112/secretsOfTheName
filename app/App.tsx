import React from "react";
import { SearchView } from "./views/searchView";
import { Provider } from "react-redux";
import store from "./modules/redux";

const App = () => {
    return (
        <Provider store={store}>
            <SearchView />
        </Provider>
    );
};

export default App;

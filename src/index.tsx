import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

import Hello from "./components/Hello";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>
    , document.getElementById("app"));
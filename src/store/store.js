import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";

import rootReducer from "../reducers/rootReducer";

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);

export default store;
import {combineReducers} from "redux";

import customNews from './customNews';
import techNews from './techNews';

const rootReducer = combineReducers ({
    FetchTech: techNews,
    FetchCustom: customNews
});

export default rootReducer;
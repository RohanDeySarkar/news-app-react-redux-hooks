const customNews = (state={customNews:[]}, action) => {
    if(action.type === "FETCH_CUSTOM"){
        state = {
            ...state,
            customNews: action.payload
        }
    }
    return state
};

export default customNews;
const defaultState = {
    language: 'en'
};

function languagesReducer(state = defaultState, action) {
    switch (action.type) {
        case 'EN':
            return { ...state, language: 'en' };
        case 'UZ':
            return { ...state, language: 'uz' };
        default:
            return state;
    }
}

export default languagesReducer;

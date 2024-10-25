const defaultState = {
    theme: 'ligth'
}

function themeReducer(state = defaultState, action){
           if(action.type == 'LIGHT'){
            return{...state, theme: 'light'}
           } else if(action.type == 'DARK'){
            return{...state, theme: 'dark'}
           } else{
            return state;
           }

}

export default themeReducer;
import languageList from '../lang/languageList';
const Reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                language: languageList.find((element) => element.id == action.payload)    
            };
        case 'SET_USER':
            return {
                ...state,
                userInfo: action.payload   
            };
        case 'REMOVE_USER':
            return {
                ...state,
                userInfo: null  
            };
        default:
            return state;
    }
};

export default Reducer;
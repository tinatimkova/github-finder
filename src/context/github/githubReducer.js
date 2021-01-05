import { SEARCH_USERS,
    REMOVE_ALERT,
    SET_ALERT,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER,
    SET_LOADING
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS: 
        return {
            ...state,
            users: action.payload,
            loading: false
        }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case SET_LOADING: 
        return {
            ...state,
            loading: true
        }
        default:
            return state
    }
}
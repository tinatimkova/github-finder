import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS,
        REMOVE_ALERT,
        SET_ALERT,
        CLEAR_USERS,
        GET_REPOS,
        GET_USER,
        SET_LOADING
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    } 

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Search users

    // Get user

    // Clear users

    // Get repos

    // Set loading

    return (<GithubContext.Provider value={{ users: state.users,
                                            user: state.user,
                                            loading: state.loading,
                                            repos: state.repos
    }}>
        {props.children}
    </GithubContext.Provider>)
}

export default GithubState;
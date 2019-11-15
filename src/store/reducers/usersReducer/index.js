import * as actionTypes from '../../actions'
import { updateObject } from '../utility'


const initialState = {
    loading: false,
    error: null,
    users: [],
}

const startFetch = (state) => { 
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const fetchUsersSuccess = (state, action) => {
    return updateObject(state, {
        users: action.data,
        loading: false
    })
}

const fetchFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })

}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_START:
            return startFetch(state);
        case actionTypes.FETCH_USERS_SUCCESS:
            return fetchUsersSuccess(state, action);
        case actionTypes.FETCH_USERS_FAIL:
            return fetchFail(state, action)
        default:
            return state
    }

}

 
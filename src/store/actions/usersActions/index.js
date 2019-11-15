import { fetchApiRedux } from '../../../utils/api'

export const FETCH_USERS_START = 'FETCH_USERS_START'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL'


export const fetchUserStart = () => {
    return {
        type: FETCH_USERS_START
    }
}

export const fetchUserSuccess = data => {
    return {
        type: FETCH_USERS_SUCCESS,
        data
    }
}

export const fetchUserFail = error => {
    return {
        type: FETCH_USERS_FAIL,
        error
    }
}

export const fetchUserData = (url) => {
    return dispatch => {
        dispatch(fetchUserStart())
        fetchApiRedux(dispatch, url, fetchUserSuccess, fetchUserFail )
    }
}

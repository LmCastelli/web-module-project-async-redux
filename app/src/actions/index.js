import axios from 'axios'

export const getActivity = () => {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get("https://boredapi.com/api/activity")
            .then(resp => {
                console.log(resp)
                dispatch(fetchSuccess(resp));
                
            })
            .catch(err => {
                dispatch(fetchError(err));
            });
    }   
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (activity) => {
    return({type: FETCH_SUCCESS, payload:activity});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage) => {
    return({type: FETCH_ERROR, payload:errorMessage})
}
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
    activity: {
        thing: "nothin",
        type: "not much",
        participants: 1, 
        price: 0,
        link: '',
        key: "111",
        accessibility: 0.5,
        isFetching: false,
        error: ''
    }
}

export const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                activity: {},
                isFetching:true,
                error:''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                activity: action.payload,
                isFetching: false,
                error:''
            });
        case(FETCH_ERROR):
            return({
                ...state, 
                activity:{},
                isFetching: false,
                error: action.payload
            });
        default:
            return state;
    }
}
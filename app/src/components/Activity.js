import React, {useEffect} from "react";
import {connect} from 'react-redux'

import { fetchError, getActivity } from "../actions";


const Activity = ({activity, isFetching, error, dispatch }) => {

    useEffect(() => {
        dispatch(getActivity());
    }, []);

    if(error) {
        return <h2> ERROR ERROR </h2>
    }

    if(isFetching) {
        return <h2> Let's grab an activity for ya </h2>
    }

    const handleClick = () => {
        dispatch(getActivity());
    }

    return(
        <div>
            <h1>Here is your activity! {activity.thing}</h1>
            <button onClick={handleClick}> Try again? </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        activity: state.activity,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Activity);
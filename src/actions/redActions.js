  
import React from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

// action types

export const RED_FETCH = 'RED_FETCH';
export const RED_SUCCESS = 'RED_SUCCESS';
export const RED_FAILURE = 'RED_FAILURE';

// action creator
//fetchLog imports to Login
export const fetchRed= (red) => dispatch => {
    console.log(`red`, red)
  // action objects
    //dispatch({ type: RED_FETCH})
  // from thunk (see below) do some async action and dispatch an error or success action
  axiosWithAuth()
      .post('https://davidanagy-posthere-flask.herokuapp.com/subreddit', red )
      .then(res => {
         console.log(res.data)
        dispatch({ type: RED_SUCCESS, payload: res.data})

      })
      .catch(err =>  dispatch({ type: RED_FAILURE, payload: err }));
};

export const FAV_FETCH = 'FAV_FETCH';
export const FAV_SUCCESS = 'FAV_SUCCESS';
export const FAV_FAILURE = 'FAV_FAILURE';

// action creator
//fetchLog imports to Login
export const favRed= (red) => dispatch => {
    console.log(`red`, red)
  // action objects
    //dispatch({ type: RED_FETCH})
  // from thunk (see below) do some async action and dispatch an error or success action
  axiosWithAuth()
      .post('https://davidanagy-posthere-flask.herokuapp.com/subreddit', red )
      .then(res => {
         console.log(res.data)
        dispatch({ type: RED_SUCCESS, payload: res.data})

      })
      .catch(err =>  dispatch({ type: RED_FAILURE, payload: err }));
};
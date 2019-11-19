  
import React from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

// action types

export const ID_FETCH = 'ID_FETCH';
export const ID_SUCCESS = 'ID_SUCCESS';
export const ID_FAILURE = 'ID_FAILURE';

// action creator
//fetchLog imports to Login
export const fetchLog= (credentials) => dispatch => {
  console.log(`log Action`,credentials)

  // action objects

  // from thunk (see below) do some async action and dispatch an error or success action
  axios
      .post('https://backend-posthere-russ-and-mack.herokuapp.com/users/login', credentials)
      .then(res => {
         console.log(res.data.id)
        dispatch({ type: ID_SUCCESS, payload: res.data.id})
        localStorage.setItem('token', res.data.token);

        // redirect to the apps main page?
        //Route component - props.history

      })
      .catch(err =>  dispatch({ type: ID_FAILURE, payload: err }));
};
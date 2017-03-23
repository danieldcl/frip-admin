import React from 'react';
import { FETCH_REQUESTS } from '../actions/index';
const INITIAL_STATE = { requests:[]};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    // case FETCH_REQUESTS:
    //   return {...state, requests: action.payload.data};


    default:
      return state;
  }
}

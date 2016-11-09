import React from 'react';
import { FETCH_VENUES } from '../actions/index';
const INITIAL_STATE = { venue:[]};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_VENUES:
      return {...state, venue: action.payload.data};


    default:
      return state;
  }
}

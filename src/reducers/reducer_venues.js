import React from 'react';
import { FETCH_VENUES, FETCH_VENUE } from '../actions/index';
const INITIAL_STATE = { all:[]};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_VENUES:
      return {...state, all: action.payload.data};

    case FETCH_VENUE:
      return {...state, venue: action.payload.data};

    default:
      return state;
  }
}

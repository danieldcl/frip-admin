import axios from 'axios';

export const FETCH_VENUE = 'FETCH_VENUE';
export const FETCH_VENUES = 'FETCH_VENUES';
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';


const ROOT_URL = 'http://frip-api.herokuapp.com/api/venues';
const ROOT_URL_LOCALHOST = 'http://localhost:8001/api/venues';
const GET_SINGLE_VENUE_URL = 'http://localhost:8001/api/venue?venue=';
const GET_SINGLE_ACTIVITY_URL = 'http://localhost:8001/api/trip?trip=';

// get/post data this way
export function fetchVenues(){
  const request = axios.get(ROOT_URL_LOCALHOST);
  return {
    type: FETCH_VENUES,
    payload: request
  };
}

export function fetchVenue(venue_name){
  const url = `${GET_SINGLE_VENUE_URL}venue_name`;
  const request = axios.get(url);
  return {
    type : FETCH_VENUE,
    payload : request
  }
}

export function fetchActivity(activity_name){
  const url = `${GET_SINGLE_ACTIVITY_URL}activity_name`;
  const request = axios.get(url);
  return {
    type : FETCH_ACTIVITY,
    payload : request
  }
}

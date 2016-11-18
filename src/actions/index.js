import axios from 'axios';

export const FETCH_VENUES = 'FETCH_VENUES';
export const FETCH_REQUESTS = 'FETCH_REQUESTS';

const ROOT_URL = 'http://frip-api.herokuapp.com/api/venues';
const ROOT_URL_LOCALHOST = 'http://localhost:8001/api/venues';

// get/post data this way
export function fetchVenues(){
  const request = axios.get(ROOT_URL_LOCALHOST);
  return {
    type: FETCH_VENUES,
    payload: request
  };
}

import axios from 'axios';

export const FETCH_VENUES = 'FETCH_VENUES';
export const FETCH_REQUESTS = 'FETCH_REQUESTS';

const ROOT_URL = 'http://frip-api.herokuapp.com/api/venues';

// get/post data this way
export function fetchVenues(){
  const request = axios.get(ROOT_URL);
  return {
    type: FETCH_VENUES,
    payload: request
  };
}

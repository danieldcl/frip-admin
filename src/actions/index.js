import axios from 'axios';

export const FETCH_VENUE = 'FETCH_VENUE';
export const FETCH_VENUES = 'FETCH_VENUES';
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';


const ROOT_URL = 'http://frip-api.herokuapp.com/api/venues';
const ROOT_URL_LOCALHOST = 'http://localhost:8001/api/venues';
const GET_SINGLE_VENUE_URL = 'http://localhost:8001/api/venue?id=';
const GET_SINGLE_ACTIVITY_URL = 'http://localhost:8001/api/trip?trip=';
const LOGIN_URL = 'http://localhost:8001/rest-auth/user/'

// get/post data this way
export function fetchVenues(){
  const request = axios.get(ROOT_URL_LOCALHOST);
  return {
    type: FETCH_VENUES,
    payload: request
  };
}

export function fetchVenue(id){
  const url = `${GET_SINGLE_VENUE_URL}${id}`;
  const request = axios.get(url);
  return {
    type : FETCH_VENUE,
    payload : request
  }
}


// functions below are not properly setted up
export function login(username, pass, cb) {
        if (localStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, pass, (res) => {
            if (res.authenticated) {
                console.log(res.token);
                localStorage.token = res.token;
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        })
    }

export function logout() {
        delete localStorage.token
    }

export function loggedIn(){
        return !!localStorage.token
    }

export function getToken(username, pass, cb) {
        $.ajax({
            type: 'POST',
            url: LOGIN_URL,
            data: {
                username: username,
                password: pass
            },
            success: function(res){
                cb({
                    authenticated: true,
                    token: res.token
                })
            }
        })
    }

  import {API_BASE_URL, GET_USER_ENV, LOGIN, LOGOUT, REST_PASSWORD, SEARCH_PATROLLER} from '../constants/APIConstants';

const RestAPI = {

  authenticateUser: async function(data) {
    const body = {Username: data?.email };
    return fetch(API_BASE_URL + GET_USER_ENV, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(body),
    })
      .then(async response => response.json())
      .catch(error => error);
  },
  login: async function(body) {
    return fetch(API_BASE_URL + LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(async response => response.json())
      .catch(error => error);
  },
  logout: async function(body) {
    return fetch(API_BASE_URL + LOGOUT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(async response => response.json())
      .catch(error => error);
  },
  resetPassword: async function(body) {
    console.log('RESET PASSWORD :: ', body);
    return fetch(API_BASE_URL + REST_PASSWORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(body),
    })
      .then(async response => response.json())
      .catch(error => error);
  },
  searchPatroller: async function(request) {
    return fetch(API_BASE_URL + SEARCH_PATROLLER, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'PatrollerId': request?.header?.PatrollerID,
        'ApiKey': request?.header?.ApiKey
      },
      body: JSON.stringify(request.body),
    })
      .then(async response => response.json())
      .catch(error => error);
  },
  
};

export default RestAPI;
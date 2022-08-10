  import {API_BASE_URL, UPDATE_USER, LOGIN, SEARCH_PATROLLER} from '../constants/APIConstants';

const RestAPI = {

  updateProfile: async function(request) {
    console.log('requestrequestrequestrequestrequest', JSON.stringify(request));
    return fetch(API_BASE_URL + UPDATE_USER, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${request?.header?.token}`,
      },
      body: JSON.stringify(request.body),
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
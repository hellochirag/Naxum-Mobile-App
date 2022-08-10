import {
  API_BASE_URL,
  UPDATE_USER,
  LOGIN,
  SEARCH_CONTACTS,
} from "../constants/APIConstants";

const RestAPI = {
  updateProfile: async function (request) {
    return fetch(API_BASE_URL + UPDATE_USER, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${request?.header?.token}`,
      },
      body: JSON.stringify(request.body),
    })
      .then(async (response) => response.json())
      .catch((error) => error);
  },
  addContact: async function (request) {
    return fetch(API_BASE_URL + UPDATE_USER, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${request?.header?.token}`,
      },
      body: JSON.stringify(request.body),
    })
      .then(async (response) => response.json())
      .catch((error) => error);
  },
  login: async function (body) {
    return fetch(API_BASE_URL + LOGIN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (response) => response.json())
      .catch((error) => error);
  },
  getContacts: async function (request) {
    const URL =
      request?.params?.length > 0
        ? `${API_BASE_URL}${SEARCH_CONTACTS}?filter=${request?.params}`
        : `${API_BASE_URL}${SEARCH_CONTACTS}`;

    return fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${request?.header?.token}`,
      },
    })
      .then(async (response) => response.json())
      .catch((error) => error);
  },
};

export default RestAPI;

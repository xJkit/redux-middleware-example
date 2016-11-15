import axios from 'axios';
import { FETCH_USERS } from './types';

//APIs
const ROOT = 'https://jsonplaceholder.typicode.com/';
const endpoint = 'users';

export function fetchUsers() {
  return ({
    type: FETCH_USERS,
    payload: axios.get(ROOT+endpoint)
  });
}

export function fetchNothing() {
  return {
    type: 'noting'
  };
}

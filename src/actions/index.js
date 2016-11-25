// import axios from 'axios';
import 'isomorphic-fetch';
import { FETCH_USERS } from './types';

//APIs
const ROOT = 'https://jsonplaceholder.typicode.com/';
const endpoint = 'users';

export function fetchUsers() {
  return ({
    type: FETCH_USERS,
    payload: fetch(ROOT+endpoint)
  });
}

export function fetchNothing() {
  return {
    type: 'noting'
  };
}

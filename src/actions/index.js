import { FETCH_USERS } from './types';

export function fetchUsers() {
  return ({
    type: FETCH_USERS,
    payload: [
      { name: '鍾曜年1', email: 'joey54780@msn.com'},
      { name: '鍾曜年2', email: 'joey54780@msn.com'},
      { name: '鍾曜年3', email: 'joey54780@msn.com'},
      { name: '鍾曜年4', email: 'joey54780@msn.com'}
    ]
  });
}

export function fetchNothing() {
  return {
    type: 'noting'
  };
}

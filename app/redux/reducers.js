/**
 * @Screen : Redux Reducers
 * @Description :
 *
 * @providesModule ReduxReducers
 */

import {LOADER_SET, TOAST_SET} from './actions';

export const loader = (state = false, action) => {
  if (action.type === LOADER_SET) {
    return action.state;
  } else {
    return state;
  }
};

export const toast = (state = '', action) => {
  if (action.type === TOAST_SET) {
    return action.text;
  } else {
    return state;
  }
};

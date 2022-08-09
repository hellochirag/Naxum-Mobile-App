/**
 * @Screen : ReduxActions
 * @Description :
 *
 * @providesModule ReduxActions
 */

export const LOADER_SET = 'loader/SET';
export const TOAST_SET = 'toast/SET';

export const loaderSet = state => ({
  type: LOADER_SET,
  state,
});

export const toastSet = text => ({
  type: TOAST_SET,
  text,
});

import ActionTypes from '../action-types';

export const setCurrentUser = (user) => ({
  type: ActionTypes.user.SET_CURRENT_USER,
  payload: user,
});

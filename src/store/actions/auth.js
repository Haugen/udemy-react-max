import * as actionTypes from './actionTypes';
import axios from 'axios';

const SIGN_UP_URL =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBHdAvH6pgVoMvOS4ppFfxKyba3kfKFF3c';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: { data: authData }
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: { error }
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(SIGN_UP_URL, authData)
      .then(response => {
        console.log(response.data);
        dispatch(authSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

import * as actionTypes from './actionTypes';
import axios from 'axios';

const SIGN_UP_URL =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBHdAvH6pgVoMvOS4ppFfxKyba3kfKFF3c';
const SIGN_IN_URL =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBHdAvH6pgVoMvOS4ppFfxKyba3kfKFF3c';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: { token: authData.idToken, userId: authData.localId }
  };
};

const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: { error: error.response.data.error }
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

const checkAuthTimeout = time => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
};

export const auth = (email, password, method) => {
  let postURL = method === 'signup' ? SIGN_UP_URL : SIGN_IN_URL;

  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(postURL, authData)
      .then(response => {
        console.log(response.data);
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        console.log(error.response.data.error);
        dispatch(authFail(error));
      });
  };
};

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
  localStorage.setItem('token', authData.idToken);
  localStorage.setItem('userId', authData.localId);

  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token: authData.idToken,
      userId: authData.localId
    }
  };
};

const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: { error: error.response.data.error }
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');

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
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    } else {
      const userId = localStorage.getItem('userId');

      dispatch(
        authSuccess({
          idToken: token,
          localId: userId
        })
      );
    }
  };
};

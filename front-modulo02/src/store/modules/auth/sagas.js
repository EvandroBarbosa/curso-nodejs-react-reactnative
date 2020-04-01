import { all, takeLatest, call, put } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const resp = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = resp.data;

  if (!user.provider) {
    console.tron.error('User not is a provider!');

    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);

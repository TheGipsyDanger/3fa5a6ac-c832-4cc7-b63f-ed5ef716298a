import {all} from 'redux-saga/effects';
import AnimeSaga from './sagas/AnimeSaga';
export default function* rootSaga(): Generator {
  yield all([AnimeSaga()]);
}

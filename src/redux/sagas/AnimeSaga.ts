import {GetAnimesPerPageDocument} from '@/__gql__/graphql';
import {all, put, takeLatest, call} from 'redux-saga/effects';
import {IResponseAnimeList, animeListActions} from '@/redux/actions';
import {apolloClient} from '@/utils/apollo-client';

function* animeListRequest({
  payload,
}: ReturnType<typeof animeListActions.request>) {
  const {page, perPage} = payload;

  try {
    const {data}: IResponseAnimeList = yield call(
      [apolloClient, apolloClient.query],
      {
        query: GetAnimesPerPageDocument,
        variables: {page, perPage},
      }
    );

    if (data) {
      yield put(animeListActions.success(data));
    } else {
      yield put(animeListActions.failure('Error'));
    }
  } catch (error) {
    yield put(animeListActions.failure('Error'));
  }
}

function* watchRoomRequests() {
  yield takeLatest(animeListActions.request, animeListRequest);
}

export default function* root(): Generator {
  yield all([watchRoomRequests()]);
}

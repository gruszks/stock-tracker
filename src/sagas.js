import { call, put, takeLatest } from 'redux-saga/effects';

// import { searchCompaniesDone, searchCompaniesFailed } from 'actions';
import Api from 'api';

// export function* searchCompanies({ symbol }) {
//   try {
//     const response = yield call(
//       Api.get.bind(Api),
//       `/query?function=SYMBOL_SEARCH&keywords=${symbol}`
//     );
//     yield put(searchCompaniesDone(response));
//   } catch (error) {
//     yield put(searchCompaniesFailed());
//   }
// }

// single entry point to start all Sagas at once
export default function* rootSaga() {
  // yield takeLatest(SEARCH_COMPANIES, searchCompanies);
}

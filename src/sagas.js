import { all, call, put, takeLatest } from 'redux-saga/effects';

import Api from 'api';
import {
  ADD_COMPANY,
  addCompanyDone,
  addCompanyFailed,
  UPDATE_COMPANY,
  updateCompanyDone,
  updateCompanyFailed,
} from 'actions';
import { prepareCompanyData, extractQuoteData } from 'utils';

export function* addCompany({
  symbol,
  data,
  onSuccessCallback,
  onFailureCallback,
}) {
  try {
    const companyName = data['2. name'];
    const [quoteResponse, infoResponse] = yield all([
      call(Api.get.bind(Api), '/query', {
        params: {
          function: 'GLOBAL_QUOTE',
          symbol: symbol,
        },
      }),
      call(Api.getCompanyImage.bind(Api), companyName),
    ]);

    if (quoteResponse['Note']) {
      throw quoteResponse['Note'];
    }

    const company = prepareCompanyData(data, quoteResponse, infoResponse);

    yield put(addCompanyDone(company));
    onSuccessCallback();
  } catch (error) {
    yield put(addCompanyFailed(error));
    onFailureCallback(error);
  }
}

export function* updateCompany({ symbol }) {
  try {
    const quoteResponse = yield call(Api.get.bind(Api), '/query', {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol: symbol,
      },
    });
    const data = extractQuoteData(quoteResponse);

    yield put(updateCompanyDone(symbol, data));
  } catch (error) {
    yield put(updateCompanyFailed(symbol, error));
  }
}

export default function* rootSaga() {
  yield takeLatest(ADD_COMPANY, addCompany);
  yield takeLatest(UPDATE_COMPANY, updateCompany);
}

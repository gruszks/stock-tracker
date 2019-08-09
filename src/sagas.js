import { all, call, put, takeLatest } from 'redux-saga/effects';

import Api from 'api';
import { ADD_COMPANY, addCompanyDone, addCompanyFailed } from 'actions';
import { prepareCompanyData } from 'utils';

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
    const company = prepareCompanyData(data, quoteResponse, infoResponse);

    yield put(addCompanyDone(company));
    onSuccessCallback();
  } catch (error) {
    yield put(addCompanyFailed(error));
    onFailureCallback(error);
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield takeLatest(ADD_COMPANY, addCompany);
}

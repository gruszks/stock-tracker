import { Component } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import isEqual from 'react-fast-compare';

import Api from 'api';

class SearchCompanies extends Component {
  state = {
    data: undefined,
    loading: false,
    error: false,
  };

  cancelToken = null;

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate({ children: _, ...prevProps }) {
    const { children, ...props } = this.props;

    if (!isEqual(prevProps, props)) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    if (this.cancelToken) {
      this.cancelToken();
    }
  }

  makeNetworkRequest = debounce(() => {
    const { symbol } = this.props;

    // setTimeout(() => {
    //   this.setState({
    //     data: {
    //       bestMatches: [
    //         {
    //           '1. symbol': 'GOOG',
    //           '2. name': 'Alphabet Inc.',
    //           '3. type': 'Equity',
    //           '4. region': 'United States',
    //           '5. marketOpen': '09:30',
    //           '6. marketClose': '16:00',
    //           '7. timezone': 'UTC-04',
    //           '8. currency': 'USD',
    //           '9. matchScore': '1.0000',
    //         },
    //         {
    //           '1. symbol': 'GOOGL',
    //           '2. name': 'Alphabet Inc.',
    //           '3. type': 'Equity',
    //           '4. region': 'United States',
    //           '5. marketOpen': '09:30',
    //           '6. marketClose': '16:00',
    //           '7. timezone': 'UTC-04',
    //           '8. currency': 'USD',
    //           '9. matchScore': '0.8889',
    //         },
    //         {
    //           '1. symbol': 'GOOGL.ARG',
    //           '2. name': 'Alphabet Inc.',
    //           '3. type': 'Equity',
    //           '4. region': 'Argentina',
    //           '5. marketOpen': '11:00',
    //           '6. marketClose': '17:00',
    //           '7. timezone': 'UTC-03',
    //           '8. currency': 'ARS',
    //           '9. matchScore': '0.7273',
    //         },
    //         {
    //           '1. symbol': 'GOOGL.MEX',
    //           '2. name': 'Alphabet Inc.',
    //           '3. type': 'Equity',
    //           '4. region': 'Mexico',
    //           '5. marketOpen': '08:30',
    //           '6. marketClose': '15:00',
    //           '7. timezone': 'UTC-05',
    //           '8. currency': 'MXP',
    //           '9. matchScore': '0.7273',
    //         },
    //         {
    //           '1. symbol': 'GOOG.SAN',
    //           '2. name': 'ALPHABET INC',
    //           '3. type': 'Equity',
    //           '4. region': 'Chile/Santiago',
    //           '5. marketOpen': '09:30',
    //           '6. marketClose': '16:00',
    //           '7. timezone': 'UTC-03',
    //           '8. currency': 'CLP',
    //           '9. matchScore': '0.6667',
    //         },
    //         {
    //           '1. symbol': 'GOOGL.MIL',
    //           '2. name': 'ALPHABET CLASSE A',
    //           '3. type': 'Equity',
    //           '4. region': 'Milan',
    //           '5. marketOpen': '09:00',
    //           '6. marketClose': '17:30',
    //           '7. timezone': 'UTC+02',
    //           '8. currency': 'EUR',
    //           '9. matchScore': '0.6667',
    //         },
    //         {
    //           '1. symbol': 'GOOG.MEX',
    //           '2. name': 'Alphabet Inc.',
    //           '3. type': 'Equity',
    //           '4. region': 'Mexico',
    //           '5. marketOpen': '08:30',
    //           '6. marketClose': '15:00',
    //           '7. timezone': 'UTC-05',
    //           '8. currency': 'MXP',
    //           '9. matchScore': '0.6667',
    //         },
    //       ],
    //     },
    //     loading: false,
    //     error: false,
    //   });
    // }, 0);

    Api.get('/query', {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: symbol,
      },
      cancelToken: new axios.CancelToken((token) => {
        this.cancelToken = token;
      }),
    })
      .then((res) => {
        this.cancelToken = null;
        this.setState({
          data: res,
          loading: false,
          error: false,
        });
      })
      .catch((e) => {
        // Early return if request was cancelled
        if (axios.isCancel(e)) {
          return;
        }
        this.setState({ data: undefined, error: e.message, loading: false });
        console.error(e);
      });
  }, 200);

  fetchData = () => {
    if (this.cancelToken) {
      this.cancelToken();
    }

    this.setState({ error: false, loading: true });

    this.makeNetworkRequest();
  };

  render() {
    const { children } = this.props;
    const { data, loading, error } = this.state;

    return children({
      data,
      loading,
      error,
      refetch: this.fetchData,
    });
  }
}

export default SearchCompanies;

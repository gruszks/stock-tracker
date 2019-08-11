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
  }, 300);

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

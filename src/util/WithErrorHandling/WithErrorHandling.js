import React from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandling = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }
  
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.axiosReqInterceptor);
      axios.interceptors.response.eject(this.axiosResInterceptor);
    }

    removeErrorHandler() {
      this.setState({ error: null });
    }

    render() {
      return(
        <>
          <Modal show={Boolean(this.state.error)} closeModal={() => this.removeErrorHandler()}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
}

export default withErrorHandling;
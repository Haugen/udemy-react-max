import React from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandling = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }
  
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      }, error => {
        this.setState({ error: error });
      })
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      })
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
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorWindow extends Component {
  renderErrors() {
    return this.props.errors.map(item => (
      <div>
        <h5>{item.response.data.cod}</h5>
        <p>{item.response.data.message}</p>
      </div>
    ));
  }

  render() {
    return <div>{this.renderErrors()}</div>;
  }
}

function mapStateToProps({ errors }) {
  return { errors };
}

export default connect(mapStateToProps)(ErrorWindow);

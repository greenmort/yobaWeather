import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {onCloseDialog} from '../actions/index';
import WeatherList from '../containers/weather_list';

class ErrorWindow extends Component {

  render() {
      if (this.props.errors.isError)
          return(
              <Modal
                  isOpen={this.props.errors.isError}
                  className="Modal__Bootstrap modal-dialog"
              >
                      <div className="modal-content">
                          <div className="modal-header">
                              <h5 className="modal-title">{`Error ${this.props.errors.errorData.response.data.cod}`}</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.props.onCloseDialog()}>
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div className="modal-body">
                              <p>{this.props.errors.errorData.response.data.message}</p>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-primary" onClick={()=>this.props.onCloseDialog()}>OK</button>
                          </div>
                      </div>
              </Modal>
        );
      return null;
  }
}

function mapStateToProps({errors}) {
    return {errors}
}

function mapDispatch (dispatch) {
    return bindActionCreators({onCloseDialog}, dispatch)
}

export default connect(mapStateToProps, mapDispatch)(ErrorWindow);
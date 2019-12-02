import React, { Component } from 'react';
import ReportModal from './report-modal/report-modal';
import './report-section.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

export default class ReportSection extends Component {
  constructor(props) {
    super(props)
    this.hideModal = this.hideModal.bind(this)
  }

  state = { show: false };

  hideModal = () => {
    this.setState({ show: false });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  render() {
    const { placeId } = this.props;

    return (
      <div className="report-section">
        <button type="button" className="report-button" onClick={this.showModal}><FontAwesomeIcon icon={faFlag} /></button>
        {this.state.show ? (<ReportModal placeId={placeId} show={this.state.show} hideModal = {this.hideModal}/>) : null}
      </div>
    );
  }
}

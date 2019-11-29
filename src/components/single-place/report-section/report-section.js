import React, { Component } from 'react';
import ReportModal from './report-modal/report-modal';
import './report-section.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

export default class ReportSection extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { placeId } = this.props;

    return (
      <div className="report-section">
        <button type="button" className="report-button" onClick={this.showModal}>Report <FontAwesomeIcon icon={faFlag} /></button>
        {this.state.show ? (<ReportModal placeId={placeId} show={this.state.show}/>) : null}
      </div>
    );
  }
}

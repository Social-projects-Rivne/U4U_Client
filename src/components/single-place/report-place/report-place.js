import React, { Component } from 'react';
import ReportBody from './report-body/report-body';
import './report-place.scss';

export default class ReportPlace extends Component {
  render() {
    const { placeId } = this.props;
    return (
      <div className="report-place">
        <ReportBody placeId={placeId} />
      </div>
    );
  }
}

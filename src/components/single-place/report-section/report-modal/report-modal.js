import React, { Component } from 'react';
import './report-modal.scss';
import api from '../../../../services/report-service';

export default class ReportModal extends Component {
  state = {
    report: null,
    reportError: false,
    selected: false
  };

  onChange = () => {
    this.setState({ selected: false });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { report } = this.state;
    if (report.length <= 2) {
      this.setState({ reportError: true });
    } else {
      this.setState({ reportError: false });

      const jwt = localStorage.getItem('token');
      const { placeId } = this.props;

      api
        .report({
          userJwt: jwt,
          report: report,
          placeId: placeId
        })
        .then(() => {
          this.setState({
            report: '',
            reportError: false,
            selected: false
          });
        })
        .catch();
    }
  };

  onReport = e => {
    this.setState({ report: e.target.value });
  };

  render() {
    const { reportError, selected, report } = this.state;
    const message = selected ? 'thanks_message' : 'd-none';
    const error = reportError ? 'Please write your report message' : '';

    return (
      <div>
        <div className="report-modal">
          <div className="report-modal-main">
          <p className="report-modal-header">Report this place</p>
            <form onSubmit={this.onSubmit}>
              <textarea
                required
                name="report"
                value={report}
                placeholder="Write your report message here..."
                className="report"
                onChange={this.onReport}></textarea>
              <p className="message">{error}</p>
              <div className={message}></div>
              <button type="submit" className="report-submit">Submit</button>
              <button type="button" className="report-cancel" onClick = {this.props.hideModal}>Close</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

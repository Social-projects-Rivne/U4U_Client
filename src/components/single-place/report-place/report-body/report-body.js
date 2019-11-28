import React, { Component } from 'react';
import './report-body.scss';
import api from '../../../../services/report-service';

export default class reportBody extends Component {
  state = {
    report: null,
    reportError: false,
    selected: false,
    show: false
  };

  onChange = () => {
    this.setState({ selected: false });
  };

  onSubmit = e => {
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
          console.log('Success');
          this.setState({
            report: '',
            reportError: false,
            selected: false
          });
        })
        .catch(err => {
          console.log(err);
        });
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
      <div className="report-body">
        <div>
        <input type="button" className="report-button " value="Report"/>
        </div>
        <form onSubmit={this.onSubmit}>
          <textarea
            required
            name="report"
            value={report}
            placeholder="Write your report message here..."
            className="report"
            onChange={this.onReport}
          ></textarea>
          <p className="message">{error}</p>
          <div className={message}></div>
          <input type="submit" className="report-submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

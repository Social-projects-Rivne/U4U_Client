import React, { Component } from 'react';
import './report-body.scss';
import api from '../../../../services/report-service';

export default class reportBody extends Component {
  state = {
    report: null,
    reportError: false,
    selected: false
  };
  mark = value => {
    this.setState({ mark: value, selected: true, reportError: false });
  };

  onChange = () => {
    this.setState({ selected: false, mark: null });
  };

  onSubmit = e => {
    e.preventDefault();
    const { report, mark } = this.state;
    if (report.length <= 2 || mark === null) {
      this.setState({ reportError: true });
    } else {
      this.setState({ reportError: false });

      const jwt = localStorage.getItem('token');
      const { placeId } = this.props;
      const { mark } = this.state;

      api
        .report({
          userJwt: jwt,
          report: report,
          placeId: placeId,
        })
        .then(() => {
          console.log('Success');
          this.setState({
            report: '',
            reportError: false,
            mark: null,
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
    const { reportError, selected, mark, report } = this.state;

    const message = selected ? 'thanks_message' : 'd-none';

    const error = reportError ? 'Please enter report and mark' : '';
    return (
      <div className="report-body">
        
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
          <div className={message}>
              <i onClick={this.onChange} className="revert">
                &#8634;
              </i>
          </div>
          <input type="submit" id="report-button" value="Report"></input>
        </form>
      </div>
    );
  }
}

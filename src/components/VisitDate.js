import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

let VisitDate = React.createClass({

  getInitialState() {
    return {value: this.props.value};
  },

  handleChange: function(date) {
    this.setState({
      value: date
    });
  },

  render() {
    return (
      <div className="form-group row">
        <label htmlFor="date" className="col-xs-2 col-form-label">Date</label>
        <div className="col-xs-10">
          <div className="input-group">
            <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
            <DatePicker
              selected={this.state.value}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
        </div>
      </div>
    );
  },
});

export default VisitDate;

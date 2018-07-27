import React from 'react';

let VisitTime = React.createClass({

  getInitialState() {
    return {value: this.props.value};
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  render() {
    return (
      <div className="form-group row">
        <label htmlFor="time" className="col-xs-2 col-form-label">Time</label>
        <div className="col-xs-10">
          <div className="input-group">
            <div className="input-group-addon"><i className="fa fa-clock-o"></i></div>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
              id="time"
              placeholder="Enter start time"
            />
          </div>
        </div>
      </div>
    );
  },
});

export default VisitTime;

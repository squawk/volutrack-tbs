import React from 'react';

let VisitType = React.createClass({

  getInitialState() {
    return {value: this.props.value};
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  render() {
    return (
      <div className="form-group row">
        <label htmlFor="visit-type" className="col-xs-2 col-form-label">Visit Type</label>
        <div className="col-xs-10">
          <select
            defaultValue={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            id="visit-type"
          >
            <option>Select One</option>
            <option>Select Two</option>
            <option>Select Three</option>
          </select>
        </div>
      </div>
    );
  }
});

export default VisitType;

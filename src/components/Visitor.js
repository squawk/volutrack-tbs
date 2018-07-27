import React from 'react';

let Visitor = React.createClass({

  getInitialState() {
    return {value: this.props.value};
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  render() {
    return (
      <div className="form-group row">
        <label htmlFor="name" className="col-xs-2 col-form-label">Full Name</label>
        <div className="col-xs-10">
          <div className="input-group">
            <div className="input-group-addon"><i className="fa fa-user"></i></div>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
              ref="name"
              placeholder="Enter full name"
            />
          </div>
        </div>
      </div>
    );
  },
});

export default Visitor;

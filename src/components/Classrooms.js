import React from 'react';
import Select from 'react-select';
import classrooms from '../data/classrooms';

let Classrooms = React.createClass({

  getInitialState() {
    return {
      value: this.props.value
    };
  },

  handleChange(event) {
    this.setState({value: event.value});
  },

  render() {
    return (
      <div className="form-group row">
        <label htmlFor="classroom" className="col-xs-2 col-form-label">Classroom</label>
        <div className="col-xs-10">
          <Select
            ref="classroom"
            value={this.state.value}
            options={classrooms}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
});

export default Classrooms;

import React from 'react';
import moment from 'moment';
import Visitor from './Visitor';
import Classrooms from './Classrooms';
import VisitType from './VisitType';
import VisitDate from './VisitDate';
import VisitTime from './VisitTime';

let SignIn = React.createClass({

  getInitialState() {
    return {
      name: '',
      classroom: '',
      visitType: '',
      date: moment(),
      time: moment().format('h:mm A'),
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    var name = this.refs.visitor.state.value.trim();
    var classroom = this.refs.classroom.state.value.trim();
    if (!name || !classroom) {
      return;
    }
    // TODO: send request to the server
    this.setState({name: '', classroom: ''});
  },

  render() {
    return(
      <div>
        <h1 className="display-4">Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <Visitor ref="visitor" value={this.state.name} />
          <Classrooms ref="classroom" value={this.state.classroom} />
          <VisitType value={this.state.visitType} />
          <VisitDate value={this.state.date} />
          <VisitTime value={this.state.time} />

          <div className="form-group row">
            <div className="col-xs-10 offset-xs-2">
              <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

export default SignIn;

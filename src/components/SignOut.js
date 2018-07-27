import React, { Component } from 'react';

class SignOut extends Component {
  render() {
    return(
      <div>
        <h1 className="display-4">Sign Out</h1>
        <table className="table table-hover">
          <thead className="thead-default">
            <tr>
              <th>Name</th>
              <th>Classroom</th>
              <th>Visit Type</th>
              <th>Time In</th>
              <th>Time Out</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brad Van Skyhawk</td>
              <td>PTA</td>
              <td>Volunteer</td>
              <td>1:02 PM</td>
              <td><input /></td>
            </tr>
            <tr>
              <td>Brad Van Skyhawk</td>
              <td>PTA</td>
              <td>Volunteer</td>
              <td>1:02 PM</td>
              <td><input /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SignOut;

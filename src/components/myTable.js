import React, { Component } from 'react';
import { connect } from 'react-redux';

class myTable extends Component{
  renderTableRow = () => {
    return this.props.data.map(formData => {
      return (
        <React.Fragment key={formData.username + formData.surname + formData.email + formData.response}>
          <tr>
            <td>{formData.username}</td>
            <td>{formData.surname}</td>
            <td>{formData.email}</td>
            <td>{formData.response}</td>
          </tr>
        </React.Fragment>
      )
    });
  };

  render(){
    return(
      <React.Fragment>
        <table style={{width: '60%', margin: '40px 20% 40px 20%'}}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {
              (this.props.data.length > 0) ? 
              (this.renderTableRow()) : 
              (<React.Fragment></React.Fragment>)
            }
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const initMapStateToProps = (state) => ({
  data: state.dataload,
});

export default connect(initMapStateToProps,undefined)(myTable);
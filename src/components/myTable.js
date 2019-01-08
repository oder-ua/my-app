import React, { Component } from 'react';
import { connect } from 'react-redux';

class myTable extends Component{
  renderTableROw = () => {
    return this.props.data.map(formData => {
      return (
      //caution! two responses of one username triggers warning
      <React.Fragment key={formData.username}>
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
              (this.renderTableROw()) : 
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
  loaded: !state.loaded,
  add: true,
});

export default connect(initMapStateToProps,undefined)(myTable);
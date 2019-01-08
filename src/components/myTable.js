import React, { Component } from 'react';
import { connect } from 'react-redux';

class myTable extends Component{

  render(){
    return(
      <React.Fragment>
        <table style={{width: '60%', margin: '40px 20% 40px 20%'}} id="ResponseTable" ref="ResponseTable">
          <thead>
            <tr>
              <th>Username</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                (this.props.data.username === "UserName") ? 
                (
                <React.Fragment></React.Fragment>
                ) : 
                (<React.Fragment>
                  <td>{this.props.data.data.username}</td>
                  <td>{this.props.data.data.surname}</td>
                  <td>{this.props.data.data.email}</td>
                  <td>{this.props.data.data.response}</td>
                </React.Fragment>)
                //console.log("STATE: "+ this.props.loaded)
                //console.log("???" + this.props.data.data)
              }
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

/*let currentState = this.props.loaded;
console.log("STATE: "+ currentState);*/

const initMapStateToProps = (state) => ({
  data: state.dataload,
  loaded: !state.loaded,
  add: true,
});

export default connect(initMapStateToProps,undefined)(myTable);
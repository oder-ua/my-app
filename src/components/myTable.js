import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';


const columns = [
  {
    key: 'USERNAME',
    title: 'Username',
    dataIndex: 'userName',
    sorter: (a, b) => a.userName.length - b.userName.length,
    sortDirections: ['descend','ascend'],
  }, 
  {
    key: 'SURNAME',
    title: 'Surname',
    dataIndex: 'surName',
    sorter: (a, b) => a.surName.length - b.surName.length,
    sortDirections: ['descend','ascend'],
  },
  {
    key: 'EMAIL',
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => a.email.length - b.email.length,
  },
  {
    key: 'RESPONSE',
    title: 'Response',
    dataIndex: 'response',
  },
]

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class myTable extends Component{

  render(){
    return(
      <React.Fragment>
        <Table 
          style={{width: '60%', margin: '40px 20% 40px 20%'}} 
          columns={columns}
          dataSource={this.props.data.map(
            formdata => ({
                rowkey: (formdata.username + formdata.surname + formdata.email + formdata.response),
                userName: (formdata.username),
                surName: formdata.surname,
                email: formdata.email,
                response: formdata.response,
              })
            )
          }
          rowKey={record => record.rowkey}
          onChange={onChange}
        />
      </React.Fragment>
    )
  }
}

const initMapStateToProps = (state) => ({
  data: state.dataload,
});

export default connect(initMapStateToProps,undefined)(myTable);
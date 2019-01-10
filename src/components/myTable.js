import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Input, Button, Icon } from 'antd';




function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class myTable extends Component{
  
  state = {
    searchText: '',
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div className="custom-filter-dropdown">
        <Input
          ref={node => { this.searchInput = node; }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
  })

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  render(){

    const columns = [
      {
        key: 'username',
        title: 'Username',
        dataIndex: 'username',
        sorter: (a, b) => (a.username).localeCompare(b.username),
        sortDirections: ['descend','ascend'],
      }, 
      {
        key: 'surname',
        title: 'Surname',
        dataIndex: 'surname',
        sorter: (a, b) => (a.surname).localeCompare(b.surname),
        sortDirections: ['descend','ascend'],
      },
      {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
        ...this.getColumnSearchProps('email'),
      },
      {
        key: 'response',
        title: 'Response',
        dataIndex: 'response',
      },
    ]

    return(
      <React.Fragment>
        <Table 
          style={{width: '60%', margin: '40px 20% 40px 20%'}} 
          columns={columns}
          dataSource={this.props.data.map(
            formdata => ({
                rowkey: (formdata.username + formdata.surname + formdata.email + formdata.response),
                username: (formdata.username),
                surname: formdata.surname,
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
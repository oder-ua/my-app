import React, { Component } from 'react';
import { Layout } from 'antd';
import { Col } from 'antd';
import { Form, Input, Icon, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';//textarea should be import SEPARATED
import { connect } from 'react-redux';
import * as formActions from '../actions/formAcions.js';

const {Content } = Layout;
const FormItem = Form.Item;

class myContent extends Component{

    validateSymbols = (rule, value, callback) => {
        if(value.match(/[^A-Za-z0-9а-яА-Я -]/gi) === null){
          callback();
        } else {
          callback('Incorrect symbols in input: ' + Array((value.match(/[^A-Za-z0-9а-яА-Я -]/gi))).join(' '));
        }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => { 
        if (!err) {
          console.log('Received values of form: ', values);
          this.props.saveData(values);
          alert("Thanks for response, " + values.username + "!");
          this.props.form.resetFields(); 
        }
      });
    };

    render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Content style={{ padding: '50px 50px 50px 50px', background: '#fff', minHeight: '280px',}}>
        <Col span={12} offset={6}>
          <Form onSubmit={this.handleSubmit} className="login-form" style={{backgroundColor: '#ABA8A8', padding: '35px 35px 5px 35px'}}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                  { validator: this.validateSymbols },
                ],
                initialValue: "",
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('surname', {
                rules: [
                  { required: true, message: 'Please input your Surname!' },
                  { validator: this.validateSymbols },
                ],
                initialValue: "",
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="user" placeholder="Surname" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email',{
                rules: [
                  { required: true, message: 'Incorrect input!'},
                  { type: 'email', message: 'Invalid email!'}
                ],
                initialValue: "",
              })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="email" placeholder="Email" />
              )}
              </FormItem>
              <FormItem>
              {getFieldDecorator('response', {
                rules : [{ required: true, message : 'Response cannot be empty!' }],
                initialValue: "",
              })(
                <TextArea style={{color: 'rgba(0,0,0,.25)'}} placeholder="Response" autosize={{minRows: 3, maxRows: 7}}/>
              )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">Submit</Button>
                <Button type="danger" htmlType='reset' className="login-cancel-button" style={{float: "right"}}>Cancel</Button>
              </FormItem>
          </Form>
        </Col>
      </Content>
    );
  }
}
const WrappedContent = Form.create()(myContent);
const initMapStateToProps = (state) => ({
  data: state.dataload,
});

const initMapDispatchToProps = (dispatch) => ({
  saveData: data => dispatch(formActions.saveData(data)),
});
const connection = connect(initMapStateToProps,initMapDispatchToProps)(WrappedContent);
export default connection;
import React, {Component} from 'react';
import MyContent from '../components/myContent.js';

class Home extends Component{
  state = {
    windowHeight: window.innerHeight,
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {
    this.setState({windowHeight: window.innerHeight})
  };

  render(){
    const minHeight = this.state.windowHeight * 0.5;
    return(
      <React.Fragment>
        {<img src="happy.jpg" alt="pic" style={{width: '100%', height: minHeight}}/>}
        <MyContent/>
      </React.Fragment>
    )
  }
}

export default Home;
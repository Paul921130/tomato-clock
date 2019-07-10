import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import CircleProgressbar from './components/CircleProgressbar/CircleProgressbar';
import CircleProgressP from './components/CircleProgressP';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counting:true, //boolean(決定是否計數)
      value:0, //0~100
      duration:0, //sec記錄過了幾秒
      max:25 //min
    };
  }

  componentDidMount(){
    let _countingValueHandler = setInterval(this._countingValueHandler, 1000);
    let _countingSecHandler = setInterval(this._countingSecHandler,1000);
    this.setState({ 
      _countingValueHandler: _countingValueHandler,
      _countingSecHandler:_countingSecHandler,
    });
  };
  componentWillUnmount(){
    this._clearCountingHandler();
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.value !== prevState.value) {
      if(this.state.value==100){
        this._clearCountingHandler();
      };
      console.log(this.state.duration);
    }
  }

  _clearCountingHandler=()=>{
    clearInterval(this.state._countingValueHandler);
    clearInterval(this.state._countingSecHandler);
  }

  _countingValueHandler=()=>{
    if(!!this.state.counting){
      this.setState((state, props) => {
        return {value: parseFloat(state.duration / (state.max*60))*100};
      })
    }else{
      return;
    }
  }

  _countingSecHandler=()=>{
    if(!!this.state.counting){
      this.setState((state, props) => {
        return {duration: state.duration + 1};
      })
    }else{
      return 
    }
    
  }

  _click=()=>{
    this.setState((state, props) => {
      return {counting: !state.counting};
    })
  }
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <React.Fragment>
        <CircleProgressP
          size={600}
          borderWidth={4}
          value={this.state.value}
          duration={this.state.duration}
          max={this.state.max}
        >
        </CircleProgressP>
        <button onClick={()=>this._click()}>{this.state.counting?'暫停':'繼續'}</button>
      </React.Fragment>
    );
  }
}
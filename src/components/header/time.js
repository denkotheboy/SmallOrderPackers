import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props){
        super(props);

        this.state = {
          date: new Date()
        };
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }  

    render() {
        return (
            <h5>{this.state.date.toLocaleTimeString().split(":")[0] + ":" + this.state.date.toLocaleTimeString().split(":")[1]}</h5>
        )
    }
}
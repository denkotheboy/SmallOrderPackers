import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="btn btn-outline-secondary" style={{minHeight: "90px", minWidth: "98%", fontSize: "3vw"}} disabled>{this.props.num}</div>
        )
    }
}

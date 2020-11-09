import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Link to={"/cell/"+this.props.num}><div className={this.props.selected === this.props.num ? "btn btn-outline-success active" : "btn btn-outline-secondary"} style={{minHeight: "90px", minWidth: "98%", fontSize: "3vw"}} disabled>{this.props.num}</div></Link>
        )
    }
}

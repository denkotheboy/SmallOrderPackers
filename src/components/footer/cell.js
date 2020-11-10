import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Link to={"/cell/"+this.props.num}><button type="button" className={"form-control btn " + (this.props.selected === this.props.num ? "btn-outline-success active" : "btn-outline-secondary")} style={{minHeight: "90px", minWidth: "98%"}}>{this.props.num}</button></Link>
        )
    }
}

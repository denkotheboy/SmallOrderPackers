import React, { Component } from 'react'
import Img from "./img"

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }
    
    render() {
        return (
            <div className="row border m-0 p-0 h-100">
               <div className="col-4 border">
                   <Img src="./icon.png"/>
               </div>
               <div className="col-8 border">
                   Other
               </div>
            </div>
        )
    }
}

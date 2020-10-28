import React, { Component } from 'react'
import Img from "./img"
import "../../style/main.css"
import ProductInfo from "./productArea/productInformation"

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }
    
    render() {
        return (
            <div className="row m-0 p-0 h-100">
               <div className="col-4">
                   <Img src="./icon.png"/>
               </div>
               <div className="col-8">
                   <ProductInfo />
               </div>
            </div>
        )
    }
}

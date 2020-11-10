import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Img from "./img"
import "../../style/main.css"
import ProductInfo from "./productArea/productInformation"
import DetailByCell from "./productArea/detailByCell"
export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }
    
    render() {
        return (
            <Switch>
                <div className="row m-0 p-0 h-100">
                    <div className="col-4">
                        <Img src="./../icon.png"/>
                    </div>
                    <div className="col-8">
                        <Route path="/product/:id" render={(props) => (
                            <ProductInfo {...props}/>)}>
                        </Route>
                        <Route path="/cell/:id" render={(props) => (
                            <DetailByCell {...props} height={this.props.height} />)}>
                        </Route>
                    </div>
                </div>
            </Switch>
        )
    }
}

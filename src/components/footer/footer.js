import React, { Component } from 'react'
import ProductSticker from './productSticker'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Inventory from './inventory'
import Cell from './cell'

function RenderCell(props){
    return <div className="col-8 text-center">
            <div className="row">
                <div className="col p-1">
                    <Cell num="1" selected={props.match.params.id} />
                </div>
                <div className="col p-1">
                    <Cell num="2" selected={props.match.params.id} />
                </div>
                <div className="col p-1">
                    <Cell num="3" selected={props.match.params.id} />
                </div>
                <div className="col p-1">
                    <Cell num="4" selected={props.match.params.id} />
                </div>
                <div className="col p-1">
                    <Cell num="5" selected={props.match.params.id} />
                </div>
            </div>
            <div className="row">
                <div className="col p-1">
                    <Cell num="6"/>
                </div>
                <div className="col p-1">
                    <Cell num="7"/>
                </div>
                <div className="col p-1">
                    <Cell num="8"/>
                </div>
                <div className="col p-1">
                    <Cell num="9"/>
                </div>
                <div className="col p-1">
                    <Cell num="10"/>
                </div>
            </div>
        </div>;
}

export default class Footer extends Component {
    render() {
        return (
            <div className="row m-0 p-0 h-100 align-items-center">
                <div className="col-2 text-center h-100">
                    <ProductSticker />
                </div>
                    <Switch>
                        <Route path="/cell/:id" render={(props) => (<RenderCell {...props}/>)}/>
                        <Route path="/" render={(props) => (<RenderCell {...props}/>)}/>
                    </Switch>
                   
                <div className="col-2 text-center h-100">
                    <Inventory />
                </div>
            </div>
        )
    }
}



import React, { Component } from 'react'
import ProductSticker from './productSticker'
import Inventory from './inventory'
import Cell from './cell'

export default class Footer extends Component {
    render() {
        return (
            <div className="row border m-0 p-0 h-100 align-items-center">
                <div className="col-2 border text-center h-100">
                    <ProductSticker />
                </div>
                <div className="col-8 border text-center">
                    <div className="row border">
                        <div className="col border p-1">
                            <Cell num="1"/>
                        </div>
                        <div className="col border p-1">
                            <Cell num="2"/>
                        </div>
                        <div className="col border p-1">
                            <Cell num="3"/>
                        </div>
                        <div className="col border p-1">
                            <Cell num="4"/>
                        </div>
                        <div className="col border p-1">
                            <Cell num="5"/>
                        </div>
                    </div>
                    <div className="row border">
                        <div className="col border p-1">
                            <Cell num="6"/>
                        </div>
                        <div className="col border p-1">
                            <Cell num="7"/>
                        </div>
                        <div className="col border p-1">
                            <Cell num="8"/>
                        </div>
                        <div className="col border p-1">
                            <Cell num="9"/>
                        </div>
                        <div className="col border p-1">
                            <Cell num="10"/>
                        </div>
                    </div>
                </div>
                <div className="col-2 border text-center h-100">
                    <Inventory />
                </div>
            </div>
        )
    }
}



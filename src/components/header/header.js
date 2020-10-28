import React, { Component } from 'react'
import '../../style/header.css';
import BarCode from './barCode'
import FullName from './fullName'
import ExitOrCancel from './exitOrСancel'
import Time from './time'
import Bid from './bid'

export default class header extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }
    
    render() {
        return (
            <div className="row m-0 p-0">
                <div className="col-2">
                    <div className="row align-items-center h-100">
                        <div className="col p-1">
                            <BarCode />
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row h-100 align-items-center">
                        <div className="col h-100">
                            <ExitOrCancel />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="row h-100 align-items-center">
                        <div className="col h-100">
                            <FullName />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row h-100 align-items-center">
                        <div className="col text-center">
                            <Bid />
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="row h-100 align-items-center">
                        <div className="col p-1 text-center">
                            <Time />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

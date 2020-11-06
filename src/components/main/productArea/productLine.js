import React, { Component } from 'react'

export default class productLine extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="row p-1">
                <div className={this.props.selected ? "col btn btn-outline-danger disabled" : "col btn btn-outline-success"} >
                    <div className="row align-items-center">
                        <div className="col-2"><strong>Артикул</strong></div>
                        <div className="col-7"><strong>Наименование</strong></div>
                        <div className="col-3 main-product-line-font"><strong>3/{3*Number(this.props.number)}</strong></div>
                    </div>
                </div>
            </div>
        )
    }
}

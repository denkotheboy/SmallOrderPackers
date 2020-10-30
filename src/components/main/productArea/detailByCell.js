import React, { Component } from 'react'
import ProductLine from "./productLine"

export default class detailByCell extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="row h-100 pt-3 pb-3">
                <div className="col-8 h-100overflow-scroll">
                    <ProductLine selected={false}/>
                    <ProductLine selected={true}/>
                    <ProductLine selected={false}/>
                    <ProductLine selected={false}/>
                    <ProductLine selected={false}/>
                    <ProductLine selected={false}/>
                </div>
                <div className="col-4 h-100">
                    <div className="row h-25 pt-1 pb-1">
                        <div className="col">
                            <button type="button" className="form-control btn btn-outline-primary h-100"><strong>Донос</strong></button>
                        </div>
                    </div>
                    <div className="row h-25 pt-1 pb-1">
                        <div className="col">
                            <button type="button" className="form-control btn btn-outline-primary h-100"><strong>Вычерк</strong></button>
                        </div>
                    </div>
                    <div className="row h-25 pt-1 pb-1">
                        <div className="col">
                            <button type="button" className="form-control btn btn-outline-primary h-100"><strong>Корректировка</strong></button>
                        </div>
                    </div>
                    <div className="row h-25 pt-1 pb-1">
                        <div className="col">
                            <button type="button" className="form-control btn btn-outline-primary h-100"><strong>Сброс</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

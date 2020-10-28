import React, { Component } from 'react'

export default class productSticker extends Component {
    render() {
        return (
            <div className="row h-100 align-items-center">
                <div className="col h-75">
                    <button type="button" className="form-control btn btn-outline-primary h-100"><strong>Стикер на товар</strong></button>
                </div>
            </div>
        )
    }
}

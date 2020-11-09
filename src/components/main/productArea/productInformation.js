import React, { Component } from 'react'

export default function productInformation(props) {
    return (
        <>
            <div className="row align-items-end" style={{height: "20%"}}>
                <div className="col text-center">
                    <h4><strong>Vendor code</strong></h4>
                </div>
            </div>
            <div className="row" style={{height: "15%"}}>
                <div className="col text-center">
                    {props.match.params.id}
                </div>
            </div>
            <div className="row" style={{height: "60%"}}>
                <div className="col text-center">
                    <div className="row justify-content-center">
                        <div className="col-4 border border-dark rounded p-4">
                            <strong className="main-product-amount">1/15</strong><br/>
                            <strong>шт</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

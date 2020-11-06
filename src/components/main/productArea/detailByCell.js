import React from 'react'
import ProductLine from "./productLine"
import { useParams} from "react-router-dom";

export default function(props) {
    //console.log(props);
    return (
        <div className="row h-100 pt-3 pb-3">
            <div className="col-8 h-100 overflow-scroll">
                <ProductLine selected={false} number={props.match.params.id}/>
                <ProductLine selected={true} number={props.match.params.id}/>
                <ProductLine selected={false} number={props.match.params.id}/>
                <ProductLine selected={false} number={props.match.params.id}/>
                <ProductLine selected={false} number={props.match.params.id}/>
                <ProductLine selected={false} number={props.match.params.id}/>
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

import React, { Component } from 'react'
import { connect } from "react-redux";

class fullName extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        
    }

    onChange = (event) => {
        
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Рабочее место, ФИО" className="form-control form-control-sm" onChange={this.onChange}></input>
                </form>
            </div>
        )
    }
}
export default connect(
    (state) => ({
      store: state
    }),
    (dispatch) => ({
      sendBarcode: (barcode) => {
        dispatch({
          type: "inputUserBarcode",
          userBarCode: barcode
        });
      }
    })
  )(fullName);
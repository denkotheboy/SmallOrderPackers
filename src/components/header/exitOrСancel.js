import React, { Component } from 'react'
import { connect } from "react-redux";

class exitOrСancel extends Component {
    constructor(props){
        super(props);

        this.state = {
            userBarCode: null
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
    }

    onChange = (event) => {

    };

    render() {
        return (
            <div className="row border h-100 align-items-center">
                <div className="col border h-75 text-center">
                  <form onSubmit={this.onSubmit} className="border h-100">
                      <button type="submit" className="form-control btn btn-outline-danger h-100 w-75"><strong>Выход/Отмена</strong></button>
                  </form>
                </div>
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
  )(exitOrСancel);
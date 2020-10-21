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
            <div>
                <form onSubmit={this.onSubmit}>
                    <button type="submit" className="form-control btn btn-outline-danger">Выход/Отмена</button>
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
  )(exitOrСancel);
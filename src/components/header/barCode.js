import React, { Component } from 'react'
import { connect } from "react-redux";

class barCode extends Component {
    constructor(props){
        super(props);

        this.state = {
            userBarCode: null
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.sendBarcode(this.state.userBarCode);
    }

    onChange = (event) => {
        this.setState({ userBarCode: event.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="ШК заказа/товара" className="form-control form-control-sm header-form-barcode" onChange={this.onChange}></input>
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
  )(barCode);
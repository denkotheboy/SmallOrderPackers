import React, { Component } from 'react'
import { connect } from "react-redux";

class Bid extends Component {
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
            <span>
                № заявки/Ячейка
            </span>
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
  )(Bid);
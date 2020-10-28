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
          <div className="row align-items-center">
              <div className="col text-center">
                  <div className="row justify-content-center">
                      <div className="col-8 border border-dark rounded p-2 m-1">
                        № заявки/Ячейка
                      </div>
                  </div>
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
  )(Bid);
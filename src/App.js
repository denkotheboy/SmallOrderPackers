import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './style/app.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduser from "./redusers";
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const initialState = { barCode: null };
const store = createStore(reduser, initialState);

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      style: null
    };

    this.header = null;
    this.main = null;
    this.footer = null;
  }

  storeChange = () => {
    console.log(store.getState().barCode);
  }
  
  componentDidMount() {
    this.store = store.subscribe(this.storeChange);

    try {
      this.header = document.getElementById("header");
      this.main = document.getElementById("main");
      this.footer = document.getElementById("footer");
    } catch (e) {
      this.header = null;
      this.main = null;
      this.footer = null;
    }

    if (this.header !== null && this.main !== null && this.footer !== null){
      this.setState({
        style: { height: Number(window.innerHeight - this.header.clientHeight - this.footer.clientHeight) - 10 }
      });
    }

  }

  render(){
    return (
      <Provider store={store}>
        <Router>
          <div className="container-fluid">
            <div className="row border-bottom border-dark header" id="header">
              <div className="col m-0 p-0">
                <Header />
              </div>
            </div>
            <div className="row" id="main" style={this.state.style}>
              <div className="col m-0 p-0 h-100">
                <Main />
              </div>
            </div>
            <div className="row border-top border-dark" id="footer">
              <div className="col m-0 p-0">
                <Footer />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
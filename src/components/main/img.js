import React, { Component } from 'react'

export default class img extends Component {
    constructor(props){
        super(props);
        this.state = {
            img:null,
            isLoaded: false,
            error: null
        };
    }

    addImage = (url) => {
        fetch(url)
            .then((response) => response.blob())
            .then(
            (img) => {
                this.setState({
                    img: URL.createObjectURL(img),
                    isLoaded: true
                });
            },
            (error) => {
                this.setState({
                    error: error
                });
            }
        );
    };

    componentDidMount() {
        this.addImage(this.props.src);
    }

    render() {
        return (
            <div className="row h-100 align-items-center">
                <div className="co">
                    <img src={this.state.img} style={{width: "75%"}} className="img-thumbnail rounded mx-auto d-block border-dark" alt="..." />
                </div>
            </div>
        )
    }
}

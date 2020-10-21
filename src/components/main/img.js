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
            <div>
                <img src={this.state.img} className="img-thumbnail" alt="..." />
            </div>
        )
    }
}

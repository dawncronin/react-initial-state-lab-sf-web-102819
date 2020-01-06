import React from 'react';
import ReactDom from 'react-dom';

export default class ImageSlider extends React.Component{

    constructor() {
        super()
        this.state = {
           currentSlideIndex: 0 
        }

    
    }

    render() {
        return (
            <p>I am on slide {this.state.currentSlideIndex}</p>
        )
    }



}
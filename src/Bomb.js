import React from 'react';
import ReactDom from 'react-dom';


export default class Bomb extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           secondsLeft: props.initialCount
        }
    }

     boom = () => {
        if (this.state.secondsLeft != 0) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
        return "Boom!"
    }

    
    render() {
        return (
            this.boom()
        )
    }



}
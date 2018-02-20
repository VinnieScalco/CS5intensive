import React, { Component } from 'react';

export default class ComponentName extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        this.setState({ blanket: this.props.blanket });
    }
    render() {
        return (
            <div className='greeting'>{`Hello, my blanket is called: ${this.state.blanket}`}</div>
        );
    }
}
import React from 'react';

class Blanket extends React.Component{
    constructor(props) {
        super(props);
        this.word = this.props.blanket;
    }
    render() {
        return (
            <div>Prop received: {this.word}</div>
        );
    }
}

export default Blanket;
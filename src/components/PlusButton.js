import React, {Component} from "react";


const IncrementButton = (props) => {
    return (
        <React.Fragment>
            <button onClick={props.increaseButton}>+</button>
        </React.Fragment>
    )
}

class PlusButton extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = (event) => {
        this.setState({count: this.state.count + 1})
    };

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.count}</h1>
                <IncrementButton increaseButton={this.handleIncrement}/>
            </React.Fragment>
        )
    }
}


export default PlusButton;
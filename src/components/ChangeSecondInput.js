import React, {Component} from "react";

//Binding with arrow function

class ChangeSecondInput extends Component {
    handleEvent = event => {
        alert("I was clicked");
    };

    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>Click on me</button>
            </div>
        );
    }

}

export default ChangeSecondInput;
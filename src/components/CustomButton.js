import React, {Component} from "react";


class CustomButton extends Component {
    render() {
        const {onPress, children} = this.props;

        return (
            <button type="button" onClick={onPress}>{children}</button>
        );
    }
}

class ChangeInput extends Component {
    handleEvent = () => {
        alert("I was clicked");
    };

    render() {
        return (
            <div>
                <CustomButton onPress={this.handleEvent}>Click on me</CustomButton>
            </div>
        );
    }
}

export default ChangeInput;
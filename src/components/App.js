import React, {Component} from 'react';
import ChangeInput from './ChangeInput';
import ChangeSecondInput from './ChangeSecondInput';
import CustomButton from './CustomButton';
import PlusButton from './PlusButton';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Table from './Table';
import Form from "./Form";


class App extends Component {
    state = {
        characters: []
    };


    removeCharacter = index => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }


    render() {
        const {characters} = this.state;

        return (
            <div className="App">
                <div className="container">
                    <ChangeInput/>
                    <hr/>
                    <ChangeSecondInput/>
                    <hr/>
                    <CustomButton/>
                    <hr/>
                    <PlusButton/>
                    <hr/>
                    <Greeting isLoggedIn={true}/>
                    <hr/>
                    <LoginControl/>
                    <hr/>
                    <Table characterData={characters}
                           removeCharacter={this.removeCharacter}
                    />
                    <Form handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }

}

export default App;
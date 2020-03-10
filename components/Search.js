// INSTRUCTIONS
/*
* 1. Set the text: style to have a marginTop and marginBottom of 10.
* 2. Add a placeholder attribute with a value of "search for" for the TextInput component tag.
* 3. Note text in the onChangeText handler was replaced with newText to make it easier to follow the values.
* 4. Return to App.js,  step 57
* 5. Assuming you did step 4 above, add onChange && onChange(newText); so that it doesn't call every single time.
* 6. Proceed to work on the file StatelessListComponent.js
*
*
* */



import React, {Component} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }


    handleChangeText(newText){
        const {onChange} = this.props;

        this.setState({
            text: newText,
        }, () => {
            // step (5) here
            onChange && onChange(newText);
        });
    }


    render() {

        const {text} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Artist Search:</Text>
                <TextInput
                    style={styles.input}
                    value={text}
                    placeholder="Search for..."
                    onChangeText={newText => this.handleChangeText(newText)}
                />
            </View>
        );


    }

}


// step (1) here

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        height: 40,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    container: {
        backgroundColor: '#66ADD9',
    },
});
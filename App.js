// INSTRUCTIONS:

// Keep the mobile simulator running if your machine allows it so that you can immediately see changes

/*
* 81. import ActivityIndicator from react-native
*
* import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
*
* 82. Change the value null value in the unary if...else statement that shows the StatelessListComponent with an instance of <ActivityIndicator />
*
* 83. Test The Search Functionality (should be active). Enter in Values in the field and see if the results begin to change.
*
* */

import React, {Component} from 'react';

import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import Search from './components/Search';


// import mockSearch from "./api/mockSearch";

import spotifyToken from "./api/spotifyToken";

import spotifySearch from "./api/spotifySearch";

import StatelessListComponent from "./components/StatelessListComponent";

const PAGE = 20;

export default class App extends Component {

    constructor(props) {
        super(props);
        // step (74) update this.state() in the constructor
        this.state = {
            items: [],
            offset: 0,
            isFetching: false,
            query: 'Led Zeppelin',
            token: null,
        };

    }


    async componentDidMount() {
        // step (75) remove the mockSearch here.
        // step (76) call again refreshToken(). uncomment.
        await this.refreshToken();
        await this.loadNextPage();
    }

    async refreshToken() {
        const newToken = await spotifyToken();
        this.setState( {
            token: newToken,
        });
    }

    async loadNextPage() {

        if (this.state.isFetching) {
            console.log('Fetching In Progress');
            return;
        }

        this.setState({ isFetching: true });

        // step (77) here
        const newItems = await spotifySearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });
        console.log('the items returned are \n' , newItems);
        console.log('Search completed.');

        this.setState({
            isFetching: false,
            offset: this.state.offset + PAGE,
            items: [
                ...this.state.items,
                ...newItems,
            ],
        });


    }

    handleSearchChange(text){
        console.log('the value to search is ', text);
        this.setState({
            query: text,
            items: [],
            offset: 0,
        }, () => {
            this.loadNextPage();
        });
    }

    handleEndReached() {
        this.loadNextPage();
    }

    render() {

        const { items, isFetching } = this.state;

        // step (82) here
            return (
                <View style={styles.container}>
                    <Text>iSpotifyPlayer</Text>
                    <Search onChange={text => this.handleSearchChange(text)} />
                    {
                        (isFetching && items.length === 0)?null:
                            <StatelessListComponent items={items} onEndReached={ () => this.handleEndReached() } />
                    }
                </View>
            );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        margin: 10,
        marginTop: 50,
    },
    text: {
        textAlign: "center",
    }
});
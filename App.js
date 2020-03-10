// INSTRUCTIONS:
// Keep the mobile simulator running if your machine allows it so that you can immediately see changes


/*
* 56. Go to Search.js and update some styles.
* 57. Adjust the alignItems and justifyContent styles of the container  in the styles const to be 'stretch'
* and 'flex-start' respectively.
* 58. Add a margin of 10 and a marginTop of 50 to the container style in the styles const.
* 59. Now, let's process the value entered in the search box. Console log the value of text in the handleSearchChange() method
* 60. Return to Search.js step (5), then come back here when done!
* 61. After you worked StatelessListComponent, come back here. Import the StatelessListComponent  component.
* 62. Reactivate the mockSearch component to test - uncomment the import statement.
* 63. Add an instance of the StatelessListComponent underneath the search component if it is not there.
* 64. Add a songs property to StatelessListComponent temporarily to this.state() in the constructor.
*
* 65. comment out the this.refreshToken() and this.loadNextPage() calls in the componentDidMount() method and replace with the following mockup:
    const newSongs = await mockSearch({
      offset: 0,
      limit: 100,
      q: 'Led Zeppelin',
    });
    this.setState({
      songs: newSongs,
    });
* 66. In the render method, destruct a constant called songs from this.state
* 67. Underneath the Search component tag, add an instance of stateListComponent as a tag with an items attribute binding to the value of songs
    - items={songs}
*
* 68. Also add an onEndReached attribute to the StatelessListComponent that will pass a function from this component
*       to be invoked.
    - onEndReached={ () => this.handleEndReached() }
* 69. Add some unary logic, around the StateLessListComponent, that will only render the component if data is returned,
* and we are done fetching data
                 {(this.isFetching === false && songs.length>0)?null:<StatelessListComponent
                        items={songs} onEndReached={ () => this.handleEndReached() } />}
* 70. Add a method to this component's class, called handleEndReached. Inside that method, call this component's
* loadNextPage() method.
* 71. At this point, if you are running your emulator, you should be getting a textual list being displayed!
* 72. Proceed back to StatelessListComponent.js to create a formalized renderItem and separator.
*
*
* */

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Search from './components/Search';

// step (62) here
// import mockSearch from "./api/mockSearch";

import spotifyToken from "./api/spotifyToken";
import spotifySearch from "./api/spotifySearch";

// step (61) here



const PAGE = 20;

export default class App extends Component {

    constructor(props) {
        super(props);

        // step (64) below.


        this.state = {
            items: [],
            offset: 0,
            isFetching: false,
            query: 'Led Zeppelin',
            token: null,
        };

    }

    // an opinion on using async with componentDidMount() is found here
    // https://stackoverflow.com/questions/47970276/is-using-async-componentdidmount-good

    async componentDidMount() {
        // step (65) - create a mock query for now.

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
            console.log('already fetching');
            return;
        }

        this.setState({ isFetching: true });

        const newItems = await spotifySearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });

        console.log('the items returned are \n' , newItems);
        console.log('Search completed.');



    }

    handleSearchChange(text){
        // step (59) here

        this.setState({
            query: text,
            items: [],
            offset: 0,
        }, () => {
            this.loadNextPage();
        });
    }

    // step (70) goes here, adding a handleEndReached() method

    render() {
        // step 66
        const { songs } = this.state;

        // step (67) adds an instance of StatelessListComponent in the return block, below.
        // steps (68) through (70) add attributes to StatelessListComponent, below.

            return (
                <View style={styles.container}>
                    <Text>React Native Creative - Spotify Player</Text>
                    <Search onChange={text => this.handleSearchChange(text)} />
                </View>
            );

    }
}

// start step (57) and (58) here
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 50,
    },
});
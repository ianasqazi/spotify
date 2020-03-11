import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Search from './components/Search';
import spotifyToken from "./api/spotifyToken";
import spotifySearch from "./api/spotifySearch";
import StatelessListComponent from "./components/StatelessListComponent";
const PAGE = 20;

export default class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            offset: 0,
            isFetching: false,
            query: 'Led Zeppelin',
            token: null,
        };

    }


    async componentDidMount() {
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

        const newItems = await spotifySearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });
        // console.log('the items returned are \n' , newItems);
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

            return (
                <View style={styles.container}>
                    <Text style={styles.text}>iSpotifyPlayer</Text>
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
        backgroundColor: '#F2EDDF',
        // light brown yellow 
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        margin: 10,
        marginTop: 50,
    },
    text: {
        padding:20,
        fontSize:50,
        backgroundColor:"#BFA18F", 
        // brown
        textAlign:"center",
        fontFamily: "Verdana",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderTopStartRadius:10,
        borderBottomStartRadius:10,
        borderWidth:3,
        borderRadius: 10,

    }
});
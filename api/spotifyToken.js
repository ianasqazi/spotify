// INSTRUCTIONS

/*
*  spotifyToken.js implements a token based upon credentials you create.
*  reference: https://developer.spotify.com/documentation/general/guides/authorization-guide/
*
*
*  You are going to create a Header that contains base 64 encoded string, it contains the client ID and client secret key.
*
* You get a client ID and client secret key when you create a spotify account.
*
* The field in the header must have the format: Authorization: Basic *<base64 encoded client_id:client_secret>*
*
*  "WHen the auth code has been received, you will exchange it with an access token by making a post request to the Spotify accounts service - https://accounts.spotify.com/api/token "
*
*
* */

// BEFORE YOU BEGIN

// check and install the base-64 module from npm: npm i -S base-64 or yarn add base-64
// add the following IMPORT statement - import {decode as atob, encode as btoa} from 'base-64'

/*
* */

import {decode as atob, encode as btoa} from 'base-64'


const apiPrefix = 'https://accounts.spotify.com/api';

// DO NOT FORGET TO INPUT YOUR CLIENTID AND CLIENT SECRET HERE
const clientId = 'cb57b2f30df84eacb032ec9a4387369e';

const clientSecret = '12a366430d8a4537bdbe6f9ecb4c59c5';


// step (4) here
const base64Cred = btoa(`${clientId}:${clientSecret}`);
console.log('base64 cred = ' + base64Cred);


export default async () => {
    console.log ('...retrieving token...');
    const apiTokenUrl = `${apiPrefix}/token`;
    const params = {
        method: 'POST',
        headers: {
            Authorization: `Basic ${base64Cred}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials',
    };

    const res = await fetch(apiTokenUrl, params);
    const jsonObj = await res.json();
    const theToken = jsonObj.access_token;


    console.log ('Your token is = ' + theToken);
    return theToken;

}
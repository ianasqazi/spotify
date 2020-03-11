# iSpotifyPlayer

![React Spotify App](assets/screenshots/iphone.png | width=100x100)

Click here to checkout the **[Mobile App](https://expo.io/@ianasqazi/spotify)** 

This is a Demo app which uses React-Native Framework and API calls to to spotify to search Music based on Artist built with [Expo](https://expo.io/). 

You can checkout the [source code here](https://github.com/ianasqazi/spotify). If you are looking to build a React Native mobile app & also reuse the code to deploy on web, this repo can be used as a great starting point.

## Getting Started

### Run it locally

1. Install [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)

```
[sudo] npm install -g expo-cli
```

_If permissions errors then please use `--unsafe-perm=true` flag too [npm/npm#16766](https://github.com/npm/npm/issues/16766)_

2. Clone the project

```
git clone https://github.com/ianasqazi/spotify.git
```

3. Install dependencies

```
cd spotify

# Using npm or yarn
yarn || npm install
```

4. Run the cross-platform app (uses [Expo](https://expo.io/learn))

```
yarn start || npm start
```

### Deploy Web app

First you must set correct `publicPath` in `app.web-build.json`. Next you must build the web app using:

```
yarn build:web
```

Once you have built it, you can see generated `web-build` folder.

This folder can be hosted as static website. For example you can publish on [Github Pages](https://pages.github.com/) via [gh-pages](https://github.com/tschaub/gh-pages) cli.

```
yarn deploy
```

**Note:** don't forget to add or change "homepage" key in your package.json

### Ejecting

The mobile app is built using Expo. If you would like to eject, you can run the following command:

```
yarn eject || npm run eject
```

We highly recommend you read the [official Expo ejection docs](https://docs.expo.io/versions/latest/expokit/eject/) before proceeding.

## React Native Elements

This app is built using [React Native Elements](https://github.com/react-native-elements/react-native-elements). RNE is a UI toolkit for React Native that provides you with production ready UI components so that you can focus on building the part that makes your app unique as opposed to reinvent the UI wheel.

You can install `react-native-elements` in your app using:

```
yarn add react-native-elements || npm install react-native-elements --save
```

## Feedback

In case you run into any problems while running this app or have additional questions, please create a new issue on this repo and we will follow up with you.

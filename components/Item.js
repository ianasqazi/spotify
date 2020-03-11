// INSTRUCTIONS

/*
*  1. Let's create a 'dumb' component that will render individual items in the Flat list. Add the following:
    - export default () => ();
*  2. Pass as an argument to this default function the following value:
    - { item: {imageUri, title, }}
*  3. Create a constant called styles. Create a stylesheet that defines the following details:
    - container- flexDirection with value 'row', alignItems with value 'center'
    - image - width of 100, height of 100, marginRight of 10
    - text - empty curly braces {}
*
*  4. Within the function code block for the component, add the following
    - a View component tag whose style equals styles.container
    - an Image component tag whose source attribute has the following value:
        - { uri: imageUri }
      For The image component tag add a style attribute whose value is {styles.image}
* 5. Add a Text component tag underneath the Image component tag and set its style to be styles.text . THe value between the open and closed tags binds to the value of title.
* 6. Return to StatelessComponent.js when done to implement the item
*
* */

// assume the following:
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default ({ item: {imageUri, title,} }) => (
    <View style={styles.container}>
        <Image
            source={{ uri: imageUri }}
            style={styles.image}
        />
        <Text style={styles.text}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    text: {},
});
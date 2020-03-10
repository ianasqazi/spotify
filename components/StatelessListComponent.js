// INSTRUCTIONS

/*
* 1. Import the following from 'react-native'; FlatList, View, and Text
* 2. Create a dumb component in ES6 (export default() =>() ) tha returns an instance of a FlatList component tag.
* 3. Modify the default function's arguments to accept { items, onEndReached }
    - items represent all the potential information
    - each object will be called -info-. inside info, it will contain an item object that contains title and other information
*
*
* 4. Within the export default function code block, add a View component tag (open and closed). Inside the View Component tag Set the following attributes for the FlatList tag
*   - data  holds the value { items }
*   - renderItem stores an ES6 function that take each object - call it info, and display's the item's title property in between open and closed< Text> component tags (as info.item.title)
    - { (info) => <Text> The song info - {info.item.title}</Text> }
*
*   - add a keyExtractor attribute that will be used to store the id of item
    - keyExtractor={ (item,index) => item.id.toString() }
    - add an onReached attribute and make it equal to the onEndReached argument defined in step three
*
*   keyExtractor value that stores the item.id from item in a function
* 5. Now let's test integrate this component with mock data. Return to App.js, step 61.
* 6. After you connected some mock data , let's proceed to create a formal Item renderer. Open up Item.js from there and proceed with the instructions (in components folder). WHen you are done, come back here and proceed with step 7.
* 7. Add an import that imports your item component created in step 6.
* 8. Add a listEmptyComponent attribute to FlatList and make it have the value of { f => f }. This deals with an issue
* where the FlatList component is empty.
* 9. If you are running your emulator. The content should refresh to show an album cover and the sample title.
* 10. Import tha already created separator component.
* 11. Add the code for the separator component tag (already created), as an attribute called ItemSeparatorComponent
* of the FlatList component.  (ItemSeparatorComponent={() => <Separator />} )
* */


// by default when you create a new component
import React, { Component } from 'react';

// step (1) here
import { FlatList, View, Text } from 'react-native';

// step (7) here. import your item renderer
import Item from "./Item";

// step (11) here. import the pre-built separator component.
import Separator from "./Separator";

// step (2)
// export default (// step (3) add an argument here ) => (
//
// proceed with steps (4) and (5) here
// you will replace your renderItem output in step (4) with your item renderer in step (7) to perform step (8)
//  replace <Text> Song Info - {info.item.title}</Text>
//  with <Item item={info.item} />
//
// you will add the separator attribute for the FlatList component at the end (step 11)
// );




export default ({ items , onEndReached }) => (
    <View>
    <FlatList data={items}
              renderItem={ (info) =>  <Item item={info.item} /> }
              listEmptyComponent = { f => f }
              ItemSeparatorComponent={() => <Separator />}
              keyExtractor={ (item,index) => item.id.toString() }
              onEndReached={ onEndReached }
            />
    </View>
);
import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import Item from "./Item";
import Separator from "./Separator";

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
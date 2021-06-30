import React from 'react';
import { View, Text } from 'react-native';

const SharedAlbum = ({ route }) => {
  const {album} = route.params;
  console.log(album);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SharedAlbum page!</Text>
    </View>
  );
};

export default SharedAlbum;
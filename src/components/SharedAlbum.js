import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';

const SharedAlbum = ({ route }) => {
  const {album} = route.params;
  console.log(album);
  return (
    <ScrollView>
      <SharedAlbumTitleCard album={album} />
    </ScrollView>
  );
};

export default SharedAlbum;
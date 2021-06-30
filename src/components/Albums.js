import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';

const Albums = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={StyleSheet.albumContainer}>
          {albumPage.map((item, index) => 
            <View key={index}>
              <Text>{item.title}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    marginBottom: theme.spacing.l,

  },
})

export default Albums;
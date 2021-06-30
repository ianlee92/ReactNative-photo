import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';


const Albums = ({ navigation }) => {
  return (
    <>
      <ScrollView>

        {/* Photo Card */}
        <View style={StyleSheet.albumContainer}>
          {albumPage.map((item, index) => 
            <View key={index}>
              <Card item={item} />
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
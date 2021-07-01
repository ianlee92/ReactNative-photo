import React, { useLayoutEffect } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';
import Separator from './Separator';
import Feather from '@expo/vector-icons/Feather';

const Albums = ({ navigation, navigation: { setOptions } }) => {

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('hello')}>
          <View style={styles.openSheetButton}>
            <Feather name="plus" size={16} color={theme.colors.white} />
          </View>
        </TouchableOpacity>
      )
    })
  })

  return (
    <>
      <ScrollView>
        {/* Photo Card */}
        <View style={StyleSheet.albumContainer}>
          {albumPage.map((item, index) => 
            <View key={index}>
              <Card item={item} navigation={navigation}/>

              {/* Add separator if the index is 1 */}
              {index === 1 && <Separator />}
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
  openSheetButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.m,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Albums;
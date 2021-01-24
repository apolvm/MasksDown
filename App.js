/*Brendon Wright -- Maskdown Project*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/small-n95-mask.jpg')} />

      <Text>Make sure to remove your mask by holding the edge of the straps to take it off.
       As you're removing the mask from your face, make sure you're not touching the inside part of the mask as the mask may become contaminated.</Text>
      
      <StatusBar style="auto" />
      <View style={styles.rating}>
        <Text>These masks are reusuable, so be sure to place the mask in a breathable container, zip-lock bag, or a plastic bag.</Text>
        <Text>If you do not wish to use the mask, place it in a zip-lock or plastic bag and dispose of the bag in a garbage can or biomedical waste disposal unit.</Text>

        

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  
});

import { StatusBar } from 'expo-status-bar';
import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import Header from './components/header';
// import 'react-native-gesture-handler';
import * as Location from 'expo-location';



export default function App(){

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    [<View>
      <Header/>
      </View>,
      <View style = {styles.container}>
          <Image style={styles.pic_container} source={require('./img/cloth_mask.png')}/>
          <Text style = {styles.text_base}> Direction of Disposal: </Text>
          <Text style = {styles.text_content}> Should be washed properly and frequently and left to hang and air dry. </Text>
          <Text>{text}</Text>
          
      </View>]
  );
}

const styles = StyleSheet.create({
  container:{
    marginBottom:40,
    marginLeft:40,
    marginRight: 40,
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text_base:{
    fontWeight: 'bold',
    fontSize:20,
    paddingTop:50,
  },
  text_content:{
    fontSize:15,
    paddingTop:10,
    // fontStyle: 'italic'

  }
});

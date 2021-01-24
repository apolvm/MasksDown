/**Author: Wesley Cheung */
import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {globalStyles} from '../styles/global';
import Header from '../components/header';

export default function Cloth( { navigation } ){
    const pressHandler = () => {
        navigation.goBack();
    }

return (
    [<View>
      <Header/>
      </View>,
      <View style = {globalStyles.container}>
          <Image style={globalStyles.pic_container} source={require('../assets/cloth.png')}/>
          <Text style = {globalStyles.text_base}> Direction of Disposal: </Text>
          <Text style = {globalStyles.text_content}> Should be washed properly and frequently and left to hang and air dry. </Text>
          <Text></Text>
          <Button title= 'Back' onPress={pressHandler}/>
          
      </View>]
  );}





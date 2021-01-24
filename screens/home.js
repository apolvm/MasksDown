/** Author: AnaPatricia Olvera */
import React, { useState } from 'react';
import {StyleSheet, View, Text,Button, FlatList, Image} from 'react-native';
import {globalStyles} from '../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Home({navigation}){

    const[ masks, typesOfMasks] = useState( [
        {title: 'Cloth Mask'},
        {title: 'N95 Mask'},
        {title: 'Surgical Mask'}
    ])
    const pressHandlerC= () => {
       navigation.navigate('Cloth');

    }
    const pressHandlerN = () =>{
        navigation.navigate('N95');
    }
    const pressHandlerS = () =>{
        navigation.navigate('Surgical');
    }

    return(
        <View style={ globalStyles.container}>
            <Text style= {globalStyles.titleText}>WHAT KIND OF MASK ARE YOU WEARING? </Text>
               <View style = {globalStyles.buttonContainer}> 
               <Button title= 'Cloth Mask'  onPress = { pressHandlerC}/>
               </View>
               <View style = {globalStyles.buttonContainer}> 
                <Button title= 'N95 Mask'  onPress = { pressHandlerN}/>
                </View>
                <View style = {globalStyles.buttonContainer}> 
                <Button title= 'Surgical Mask'  onPress = { pressHandlerS}/>
                </View>
               
        </View>
    )
}


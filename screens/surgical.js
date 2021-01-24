import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global'

export default function Surgical( { navigation }){
   
    const pressHandler = () => {
        navigation.goBack();
    }

    return(
        <View style={ globalStyles.container}>
            <Text>Surgical screen</Text>
            <Button title= 'Back' onPress={pressHandler}/>
        </View>
    )
}


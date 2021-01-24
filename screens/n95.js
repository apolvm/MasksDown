/*Author: Brendon Wright*/
import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {globalStyles} from '../styles/global'

export default function N95({ navigation }){
    const pressHandler = () => {
        navigation.goBack();
    }
    return(
        <View style={ globalStyles.container}>
            <Image source={require('../assets/n95.png')} />
            <Text>Make sure to remove your mask by holding the edge of the straps to take it off.As you're removing the mask from your face, make sure you're not touching the inside part of the mask as the mask may become contaminated.</Text>
            <StatusBar style="auto" />
                <View style={globalStyles.rating}>
                <Text>These masks are reusuable, so be sure to place the mask in a breathable container,zip-lock bag, or a plastic bag.</Text>
                <Text>If you do not wish to use the mask, place it in a zip-lock or plastic bag and dispose of the bag in a garbage can or biomedical waste disposal unit.</Text>
                    </View>
            <Button title= 'Back' onPress={pressHandler}/>

        </View>
    )
}


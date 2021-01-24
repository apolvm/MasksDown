/**Autor: Wesley Cheung */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Cloth Mask</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop: 38,
        backgroundColor: '#CB997E'
    },
    title:{
        paddingTop: 5,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }

});
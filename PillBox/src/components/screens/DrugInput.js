import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DrugInputForm } from '../container'
import config from '../../config';

class DrugInput extends Component {

    render() {
        return (
            <View style={config.fullLayout}>
                <Text style={{fontSize: 32}}>Drug Input</Text>
                <DrugInputForm/>

            </View>
                
            
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        height: 55,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: config.colors.darkGreen
    },
    loginText: {
        fontSize: 24,
        color: 'white',
    },
});

export default DrugInput;
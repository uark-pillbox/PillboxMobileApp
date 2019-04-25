import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SchedulePresentation } from '../presentation/SchedulePresentation'
import config from '../../config';

class ScheduleViewer extends Component {

    render() {
        return (
            <View 
                style={config.fullLayout}>
                <SchedulePresentation/>
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
    text: {
        fontSize: 24,
        color: 'white',
    },
});

export default ScheduleViewer;
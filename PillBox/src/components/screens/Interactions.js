import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import InteractionsPresentation from '../presentation/InteractionsPresentation'
import config from '../../config';

class Interactions extends Component {

    render() {
        return (
            <View style={styles.interactionsLayout}>
                    <Text style={{fontSize: 32, color: 'white'}}>Interactions</Text>
                    <View
                    style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: config.colors.lightBlue,
                    }}
                />
                <InteractionsPresentation/>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    interactionsLayout: {
        height:100+'%',
        width:100+'%',
        flex:1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: config.colors.lightBlue
    }
});

export default Interactions;
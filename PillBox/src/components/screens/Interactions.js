import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Interactions extends Component {

    render() {
        return (
            <TouchableOpacity 
                style={{height:100+'%', width:100+'%', flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Future Interactions Page</Text>
            </TouchableOpacity>
        )
    }
}

export default Interactions;
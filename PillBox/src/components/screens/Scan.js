import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Scan extends Component {

    render() {
        return (
            <TouchableOpacity 
                style={{height:100+'%', width:100+'%', flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Future Scan Page</Text>
            </TouchableOpacity>
        )
    }
}

export default Scan;
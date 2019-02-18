import React, { Component } from 'react'
import { Text, TouchableOpacity, TextInput, Button } from 'react-native'

class Register extends Component {

    register() {
        this.props.navigation.navigate('home');
    }

    render() {
        return (
            <TouchableOpacity 
                style={{height:100, width:100+'%', flex:1, justifyContent:'center', alignItems:'center'}}
                onPress={()=> this.register()}>
                <Text>Future Register Page</Text>
            </TouchableOpacity>
        )
    }
}

export default Register;
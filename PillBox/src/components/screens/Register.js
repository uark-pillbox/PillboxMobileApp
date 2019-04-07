import React, { Component } from 'react'
import { Text, TouchableOpacity, TextInput, Button, View } from 'react-native'
import { RegisterForm } from '../container';

class Register extends Component {

    register() {
        this.props.navigation.navigate('home');
    }

    render() {
        return (
            <View style={{height:100+'%', width:100+'%', flex:1,justifyContent:'center', alignItems:'center'}}>
                <RegisterForm/>
                <TouchableOpacity 
                    onPress={()=> this.register()}>
                    <Text>Future Register Page</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Register;
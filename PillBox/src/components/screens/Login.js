import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'

class Login extends Component {

    login() {
        //Go to Home page
        this.props.navigation.navigate('home');
    }

    signup() {
        this.props.navigation.navigate('register');
    }

    render() {
        return (
            <View style={{height:100+'%', width:100+'%', flex:1,justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity 
                    onPress={()=> this.login()}>
                        <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=> this.signup()}>
                        <Text>New User?</Text>
                </TouchableOpacity>
            </View>            
        )
    }
}

export default Login;
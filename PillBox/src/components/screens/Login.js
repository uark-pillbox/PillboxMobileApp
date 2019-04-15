import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { LoginForm } from '../container';
import config from '../../config';

class Login extends Component {

    signup() {
        this.props.navigation.navigate('register');
    }

    render() {
        return (
            <KeyboardAvoidingView style={config.fullLayout}>
                <Text style={{fontSize: 32}}>Pillbox App</Text>
                <LoginForm navigation={this.props.navigation}/>
                <TouchableOpacity 
                    onPress={()=> this.signup()}>
                        <Text style={styles.registerText}>New User?</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>            
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
    registerText: {
        fontSize: 18,
    }
});

export default Login;
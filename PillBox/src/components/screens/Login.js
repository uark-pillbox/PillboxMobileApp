import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';
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
                <LoginForm/>

                <TouchableOpacity 
                    onPress={()=> this.signup()}>
                        <Text style={styles.registerText}>New User?</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>            
        )
    }
}

const styles = StyleSheet.create({
    registerText: {
        fontSize: 18,
    }
});

export default Login;
import React, { Component } from 'react'
import { Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native'
import { RegisterForm } from '../container/RegisterForm'
import config from '../../config';

class Register extends Component {

    register() {
        this.props.navigation.navigate('home');
    }

    render() {
        return (
            <KeyboardAvoidingView style={config.fullLayout}>
            <TouchableOpacity>
                <Text style={{fontSize: 30}}>Registration</Text>
                <RegisterForm/>
                <TouchableOpacity style={styles.buttons}
                onPress={()=> this.register()}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>

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
});
export default Register;
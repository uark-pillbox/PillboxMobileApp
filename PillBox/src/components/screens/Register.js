import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';
import RegisterForm from '../container/RegisterForm'
import config from '../../config';

class Register extends Component {

    render() {
        return (
            <View style = {config.fullLayout}>
                <View>
                    <Text style={styles.registerText}>Registration</Text>
                </View>
                
                <KeyboardAvoidingView style={config.fullLayout}>
				    <RegisterForm navigation={this.props.navigation}/>
                </KeyboardAvoidingView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
	registerText: {
        fontSize: 32,
        paddingTop: 10
    },
	input: {
        height: 40,
        marginBottom: 10,
        padding: 10,
        fontSize: 20
    }
});

export default Register;
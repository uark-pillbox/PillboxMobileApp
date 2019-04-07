import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import config from '../../config';

class RegisterForm extends Component {

    render() {
        return (
            <View 
                style={config.formLayout}>
                <Text>Register Form</Text>
            </View>
        )
    }
}

export default RegisterForm;
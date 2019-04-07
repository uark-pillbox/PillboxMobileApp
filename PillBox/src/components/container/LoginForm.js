import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import config from '../../config';

class LoginForm extends Component {

    render() {
        return (
            <View>
                <View 
                    style={config.formLayout}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Username"
                        autoFocus={true}
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                </View>

                <View 
                    style={config.formLayout}> 
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        ref={(input) => this.passwordInput = input}
                        autoCorrect={false}
                        placeholder="Password"
                        returnKeyType="go"
                        secureTextEntry
                    />
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        padding: 10,
        fontSize: 20
    }
});

export default LoginForm;
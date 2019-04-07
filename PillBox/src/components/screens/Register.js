import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { RegisterForm } from '../container/RegisterForm'
import config from '../../config';

class Register extends Component {

    register() {
        this.props.navigation.navigate('home');
    }

    render() {
        return (
            <KeyboardAvoidingView style={config.fullLayout}>
                <Text style={{fontSize: 24}}>Registration</Text>
				{/* <RegisterForm/> */}
			<View>
                <View 
                    style={config.formLayout}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Name"
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
                        autoCorrect={false}
                        placeholder="Email"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />                    
                </View>

                <View 
                    style={config.formLayout}> 
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Username"
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

				<TouchableOpacity 
                    style={styles.buttons}
					onPress={()=> this.register()}>
					<Text style={styles.registerText}>Submit</Text>
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
	registerText: {
        fontSize: 24,
        color: 'white',
    },
	input: {
        height: 40,
        marginBottom: 10,
        padding: 10,
        fontSize: 20
    }
});

export default Register;
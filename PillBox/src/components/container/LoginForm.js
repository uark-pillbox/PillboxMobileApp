import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import config from '../../config';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
          };
    }

    login() {
        alert(this.state.password);
    }
    
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
                        value={this.state.username}
                        onChangeText={username => this.setState({username})}
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
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        autoCorrect={false}
                        placeholder="Password"
                        returnKeyType="go"
                        secureTextEntry
                    />
                    
                </View>

                <View>
                    <TouchableOpacity 
                        style={styles.buttons}
                        onPress={()=> this.login()}>
                            <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
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
    },
    buttons: {
        height: 55,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: config.colors.darkGreen
    }
});

export default LoginForm;
import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import config from '../../config';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
          };
    }

    register() {
        alert(this.state.name);
        this.props.navigation.navigate('home');
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
                        placeholder="Name"
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
                        autoFocus={true}
                        returnKeyType="next"
                        onSubmitEditing={() => this.emailInput.focus()}
                    />
                </View>

                <View 
                    style={config.formLayout}> 
                    <TextInput
                        style={styles.input}
                        ref={(input) => this.emailInput = input}
                        autoCapitalize="none"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        autoCorrect={false}
                        placeholder="Email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => this.usernameInput.focus()}
                    />                    
                </View>

                <View 
                    style={config.formLayout}> 
                    <TextInput
                        style={styles.input}
                        ref={(input) => this.usernameInput = input}
                        autoCapitalize="none"
                        value={this.state.username}
                        onChangeText={username => this.setState({username})}
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
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        autoCorrect={false}
                        placeholder="Password"
                        returnKeyType="go"
                        onSubmitEditing={() => this.register()}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity 
                        style={styles.buttons}
                        onPress={()=> this.register()}>
                        <Text style={styles.registerText}>Submit</Text>
                </TouchableOpacity>
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
    },
    registerText: {
        fontSize: 24,
        color: 'white',
    },
});

export default RegisterForm;
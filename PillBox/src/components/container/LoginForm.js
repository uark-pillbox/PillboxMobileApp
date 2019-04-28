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

    async login() {
        try {            
            let response = await fetch(config.baseUrl + "users/authenticate", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    }),
                });
                
                let status = response.status;
                

                if(status === 200) {
                    let resJson = JSON.parse(response._bodyText);
                    let token = resJson.token;
					config.user.token = token;
					let name = resJson.name;
					config.user.name = name;
					let username = resJson.username;
					config.user.username = username;
					let email = resJson.email;
                    config.user.email = email;
                    let drugs = resJson.drugs;
                    config.user.drugs = drugs;
                    this.props.navigation.navigate('home');
                }
                else {
                    alert("Username or password is incorrect. Try again.")
                }
            return response;
        } catch(error) {
            console.error(error);
        }
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
                        onSubmitEditing={() => this.login()}
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
        fontSize: 20,
        borderWidth: 1,
        borderColor: config.colors.darkGreen 
    },
    buttons: {
        height: 55,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: config.colors.lightBlue
    },
    loginText: {
        fontSize: 24,
        color: 'white',
    },
});

export default LoginForm;
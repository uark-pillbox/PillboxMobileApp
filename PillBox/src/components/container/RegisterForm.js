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

    async register() {
        // return fetch(config.baseUrl + 'users/register')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         return responseJson.message;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        // alert(this.state.name);
        // this.props.navigation.navigate('login');
        try {
            let response = await fetch(config.baseUrl + "users/register", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                    }),
                });
                this.props.navigation.navigate('login');
            return response;
        } catch(error) {
            console.error(error);
        }


        


        // async function getMoviesFromApi() {
        //     try {
        //       let response = await fetch(
        //         'https://facebook.github.io/react-native/movies.json',
        //       );
        //       let responseJson = await response.json();
        //       return responseJson.movies;
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   }
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
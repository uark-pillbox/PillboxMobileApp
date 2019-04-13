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
        // return fetch('https://facebook.github.io/react-native/movies.json')
        // .then((response) => response.json())
        // .then((responseJson) => {

        //     this.setState({
        //     isLoading: false,
        //     dataSource: responseJson.movies,
        //     }, function(){

        //     });

        // })
        // .catch((error) =>{
        //     console.error(error);
        // });

        // fetch('https://mywebsite.com/endpoint/', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password,
        //     }),
        // });



        // Figure out how to get the response from the fetch after the credentials are passed to the server
        // Then, if valid, go to the "home" page
        // If invalid need to reload LoginForm? Alert that the information was invalid?
        alert(this.state.password);
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
    loginText: {
        fontSize: 24,
        color: 'white',
    },
});

export default LoginForm;
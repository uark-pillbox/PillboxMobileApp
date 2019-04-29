import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import config from '../../config';

class ChangeInformationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: config.user.name,
            email: config.user.email,
            username: config.user.username,
            password: '',
          };
    }

    async update() {
        try {
            let response = await fetch(config.baseUrl + "users/update", {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + config.user.token,
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                    }),
                });

                let status = response.status;
                if(status === 200) {
                    let resJson = JSON.parse(response._bodyText);
                    alert(resJson.message);
                    this.props.navigation.navigate('login');
                }
                else {
                    alert("There was an issue update your profile.")
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
                        onSubmitEditing={() => this.update()}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity 
                        style={styles.buttons}
                        onPress={()=> this.update()}>
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
    registerText: {
        fontSize: 24,
        color: 'white',
    },
});

export default ChangeInformationForm; 
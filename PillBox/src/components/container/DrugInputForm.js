import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import config from '../../config';

class DrugInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drug: '',
          };
    }

    async addDrug() {
        try {            
            let response = await fetch(config.baseUrl + "drugs/add", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + config.user.token,
                },
                body: JSON.stringify({
                    name: this.state.drug,
                    }),
                });
                // alert(JSON.stringify(response));

                let status = response.status;
                let resJson = JSON.parse(response._bodyText);
                let drugs = resJson.drugs;
                config.user.drugs = drugs;
                // let responseData = response.text();

                if(status === 200) {
                    alert("Drug added.");
                }
                else {
                    // alert(responseData)
                    // alert(JSON.stringify(responseData));
                    alert("There was an error adding " + this.state.drug);
                }
            return response;
        } catch(error) {
            console.error(error);
        }
    }

    async removeDrug() {
        try {            
            let response = await fetch(config.baseUrl + "drugs/remove", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + config.user.token,
                },
                body: JSON.stringify({
                    name: this.state.drug,
                    }),
                });
                // alert(JSON.stringify(response));

                let status = response.status;
                
                // let responseData = response.text();

                if(status === 200) {
                    alert("Drug removed.");
                    let resJson = JSON.parse(response._bodyText);
                    let drugs = resJson.drugs;
                    config.user.drugs = drugs;
                }
                else {
                    // alert(responseData)
                    // alert(JSON.stringify(responseData));
                    alert("There was an error removing " + this.state.drug);
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
                        placeholder="Drug"
                        value={this.state.drug}
                        onChangeText={drug => this.setState({drug})}
                        autoFocus={true}
                        returnKeyType="go"
                        onSubmitEditing={() => this.addDrug()}
                    />
                </View>

                <View>
                    <TouchableOpacity 
                        style={styles.buttons}
                        onPress={()=> this.addDrug()}>
                            <Text style={styles.loginText}>Add Drug</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity 
                        style={styles.buttons}
                        onPress={()=> this.removeDrug()}>
                            <Text style={styles.loginText}>Remove Drug</Text>
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

export default DrugInputForm;
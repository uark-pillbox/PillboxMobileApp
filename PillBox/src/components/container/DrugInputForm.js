import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, TouchableHighlight } from 'react-native'
import config from '../../config';

class DrugInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drug: '',
            schedule: [],
            drugSelection: '',
            drugPickerDisplayed: false,
          };
    }

    setDrugValue(newDrugValue) {
        this.setState({
            drugSelection: newDrugValue,
        }, () => {
            this.toggleDrugPicker();
            this.removeDrug();
        });
    }

    toggleDrugPicker() {
        this.setState({
            drugPickerDisplayed: !this.state.drugPickerDisplayed
        })
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
                    schedule: this.state.schedule
                    }),
                });

                let status = response.status;
                
                if(status === 200) {
                    alert("Drug added.");
                    let resJson = JSON.parse(response._bodyText);
                    let drugs = resJson.drugs;
                    config.user.drugs = drugs;
                }
                else {
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
                    name: this.state.drugSelection,
                    }),
                });

                let status = response.status;
                
                if(status === 200) {
                    alert("Drug removed.");
                    let resJson = JSON.parse(response._bodyText);
                    let drugs = resJson.drugs;
                    config.user.drugs = drugs;
                }
                else {
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
                        onPress={()=> this.toggleDrugPicker()}>
                            <Text style={styles.loginText}>Remove Drug</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Modal visible={this.state.drugPickerDisplayed} animationType={'fade'} transparent={true}>
                        <View style={styles.modal}>
                            <Text style={{fontWeight:'bold', fontSize: 14}}>Please pick a drug</Text>

                            { config.user.drugs.map((value, index) => {
                                return <TouchableHighlight key={index} onPress={() => this.setDrugValue(value.name)} style={styles.drugDisplay}>
                                        <Text>{ value.name }</Text>
                                    </TouchableHighlight>
                            })}

                            <TouchableHighlight onPress={() => this.toggleDrugPicker()} style={styles.drugDisplay}>
                                <Text>Cancel</Text>
                            </TouchableHighlight>

                        </View>
                    </Modal>
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
    modal: {
        backgroundColor: '#c0e2c9',
        bottom: 55,
        right: 20,
        left: 20,
        alignItems: 'center',
        position: 'absolute',
    },
    drugDisplay: {
        paddingTop: 4,
        paddingBottom: 4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray'
    }
});

export default DrugInputForm;
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableHighlight } from 'react-native'
import config from '../../config';

export class SchedulePresentation extends Component {

    constructor(props) {
        super(props);
            this.state = {
                drugSelection: '',
                schedule: '',
                drugPickerDisplayed: false
            };
    }

    setDrugValue(newDrugValue, newScheduleValue) {
        this.setState({
            drugSelection: newDrugValue,
            schedule: newScheduleValue
        })
        this.toggleDrugPicker();
    }

    toggleDrugPicker() {
        this.setState({
            drugPickerDisplayed: !this.state.drugPickerDisplayed
        })
    }

    render () {
        return (
            <View>
                <TouchableOpacity style={styles.buttons} onPress={() => this.toggleDrugPicker()}>
                    <Text style={styles.buttonText}>Select a Drug</Text>
                </TouchableOpacity>

                <Text>The schedule for { this.state.drugSelection } is { this.state.schedule }</Text>

                <Modal visible={this.state.drugPickerDisplayed} animationType={'fade'} transparent={true}>
                    <View style={styles.modal}>
                        <Text style={{fontWeight:'bold', fontSize: 14}}>Please pick a drug</Text>

                        { config.user.drugs.map((value, index) => {
                            return <TouchableHighlight key={index} onPress={() => this.setDrugValue(value.name, value.schedule)} style={styles.drugDisplay}>
                                    <Text>{ value.name }</Text>
                                </TouchableHighlight>
                        })}

                        <TouchableHighlight onPress={() => this.toggleDrugPicker()} style={styles.drugDisplay}>
                            <Text>Cancel</Text>
                        </TouchableHighlight>

                    </View>
                </Modal>
            </View>
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
    buttonText: {
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
    },
})

export default SchedulePresentation;
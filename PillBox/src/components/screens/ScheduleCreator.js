import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal, TouchableHighlight, StyleSheet } from 'react-native'
import { TimePicker, WheelPicker } from 'react-native-wheel-picker-android';
import config from '../../config';

class ScheduleCreator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drugSelection: 'default',
            drugPickerDisplayed: false,
            selectedDayOfWeek: '',
            dayPickerDisplayed: false,
            selectedTime: ''
          };
    }

    setDrugValue(newDrugValue) {
        this.setState({
            drugSelection: newDrugValue
        })
        this.toggleDrugPicker();
    }

    toggleDrugPicker() {
        this.setState({
            drugPickerDisplayed: !this.state.drugPickerDisplayed
        })
    }

    setDayOfWeekValue(newDayValue) {
        this.setState({
            selectedDayOfWeek: newDayValue
        })
        this.toggleDayPicker();
    }

    toggleDayPicker() {
        this.setState({
            dayPickerDisplayed: !this.state.dayPickerDisplayed
        })
    }

    render() {

        return (
            <View style={config.fullLayout}>
                <TouchableOpacity style={styles.buttons} onPress={() => this.toggleDrugPicker()}>
                    <Text style={styles.buttonText}>Select a Drug</Text>
                </TouchableOpacity>

                <Text>The drug selected is { this.state.drugSelection }</Text>

                <TouchableOpacity style={styles.buttons} onPress={() => this.toggleDayPicker()}>
                    <Text style={styles.buttonText}>Select a Day of the Week</Text>
                </TouchableOpacity>

                <Text>The day selected is { this.state.selectedDayOfWeek }</Text>

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
                
                <Modal visible={this.state.dayPickerDisplayed} animationType={'fade'} transparent={true}>
                    <View style={styles.modal}>
                        <Text style={{fontWeight:'bold', fontSize: 14}}>Please pick a day</Text>

                        { config.weekdaysDate.map((value, index) => {
                            return <TouchableHighlight key={index} onPress={() => this.setDayOfWeekValue(value.value)} style={styles.drugDisplay}>
                                    <Text>{ value.title }</Text>
                                </TouchableHighlight>
                        })}

                        <TouchableHighlight onPress={() => this.toggleDayPicker()} style={styles.drugDisplay}>
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
    }
});

export default ScheduleCreator;
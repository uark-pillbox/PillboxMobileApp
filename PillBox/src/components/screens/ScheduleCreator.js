import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal, TouchableHighlight, StyleSheet } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker';
import config from '../../config';

class ScheduleCreator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drugSelection: '',
            drugPickerDisplayed: false,
            selectedDayOfWeek: '',
            dayPickerDisplayed: false,
            selectedTime: '',
            timePickerDisplayed: false,
            isValidSchedule: false
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

    setTimeValue = time => {
        this.setState({
            selectedTime: time.getHours().toString() + ':' + time.getMinutes().toString()
        })
        this.toggleTimePicker();
    }

    toggleTimePicker() {
        this.setState({
            timePickerDisplayed: !this.state.timePickerDisplayed
        })
    }

    scheduleChecker() {
        if(this.state.drugSelection.length > 0 && this.state.selectedDayOfWeek.length > 0 && this.state.selectedTime.length > 0) {
            this.setState({
                isValidSchedule: true
            })
        }
        this.submitSchedule()
    }

    submitSchedule() {
        alert(this.state.isValidSchedule)
        if(this.state.isValidSchedule) {
            //Make POST to server with schedule
        }
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

                <TouchableOpacity style={styles.buttons} onPress={() => this.toggleTimePicker()}>
                    <Text style={styles.buttonText}>Select a Time</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons} onPress={() => this.scheduleChecker()}>
                    <Text style={styles.buttonText}>Submit Schedule</Text>
                </TouchableOpacity>

                <Text>The time selected is { this.state.selectedTime }</Text>

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

                <DateTimePicker
                    isVisible={this.state.timePickerDisplayed}
                    onConfirm={this.setTimeValue}
                    onCancel={this.toggleTimePicker}
                    mode='time'
                    is24Hour={false}
                />        

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
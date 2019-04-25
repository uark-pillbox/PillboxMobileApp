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
            fullSelectedDayOfWeek: '',
            dayPickerDisplayed: false,
            selectedTime: '',
            timePickerDisplayed: false,
            userSchedule: [],
            schedule: ''
          };
    }

    setDrugValueAndScheduleValue(newDrugValue, scheduleValue) {
        this.setState({
            drugSelection: newDrugValue,
            userSchedule: scheduleValue
        }, () => {
            // alert(this.state.userSchedule);
            this.toggleDrugPicker();
        });
    }

    toggleDrugPicker() {
        this.setState({
            drugPickerDisplayed: !this.state.drugPickerDisplayed
        })
    }

    setDayOfWeekValue(newDayValue, newDayTitle) {
        this.setState({
            selectedDayOfWeek: newDayValue,
            fullSelectedDayOfWeek: newDayTitle
        }, () => {
            // alert(this.state.selectedDayOfWeek);
            this.toggleDayPicker();
        });
        
    }

    toggleDayPicker() {
        this.setState({
            dayPickerDisplayed: !this.state.dayPickerDisplayed
        })
    }

    setTimeValue = time => {
        this.setState({
            selectedTime: time.getHours().toString() + ':' + ('0' + time.getMinutes()).slice(-2).toString()
        }, () => {
            // alert(this.state.selectedTime);
            this.hideTimePicker();
        });
    }

    showTimePicker = () => {
        this.setState({
            timePickerDisplayed: true
        });
    };

    hideTimePicker = () => {
        this.setState({
            timePickerDisplayed: false
        });
    };

    scheduleChecker() {
        if(this.state.drugSelection.length > 0 && this.state.selectedDayOfWeek.length > 0 && this.state.selectedTime.length > 0) {
            this.setState({
                schedule: this.state.selectedDayOfWeek + ',' + this.state.selectedTime,
            }, () => {
                // alert(this.state.schedule);
            });
            return true;
        }
        alert("Please make sure have a Drug, Day of Week, and Time selected.");
        return false;
    }

    // removeSchedule() {
    //     this.setState({
    //         schedule: '',
    //     })
    //     this.submitSchedule()
    // }

    async submitSchedule() {
        if(this.scheduleChecker()) {
            this.forceUpdate();
            this.state.userSchedule.push(this.state.schedule);
            this.forceUpdate();

            alert(this.state.userSchedule);
            try {            
                let response = await fetch(config.baseUrl + "drugs/changeSchedule", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + config.user.token,
                    },
                    body: JSON.stringify({
                        name: this.state.drugSelection,
                        schedule: this.state.userSchedule
                        }),
                    });
        
                    let status = response.status;
                            
                    if(status === 200) {
                        if(this.state.schedule.length > 0) {
                            // alert("Schedule added.");
                        } else {
                            alert("Schedule deleted.")
                        }
                        let resJson = JSON.parse(response._bodyText);
                        let drugs = resJson.drugs;
                        config.user.drugs = drugs;
                    }
                    else {
                        // alert(JSON.stringify(response));
                        alert("There was an error Adding/Deleting the Schedule.")
                    }
                return response;
            } catch(error) {
                console.error(error);
            }
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

                <Text>The day selected is { this.state.fullSelectedDayOfWeek }</Text>

                <TouchableOpacity style={styles.buttons} onPress={() => this.showTimePicker()}>
                    <Text style={styles.buttonText}>Select a Time</Text>
                </TouchableOpacity>

                <Text>The time selected is { this.state.selectedTime }</Text>

                <TouchableOpacity style={styles.buttons} onPress={() => this.submitSchedule()}>
                    <Text style={styles.buttonText}>Submit Schedule</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.buttons} onPress={() => this.removeSchedule()}>
                    <Text style={styles.buttonText}>Delete Schedule</Text>
                </TouchableOpacity> */}

                <Modal visible={this.state.drugPickerDisplayed} animationType={'fade'} transparent={true}>
                    <View style={styles.modal}>
                        <Text style={{fontWeight:'bold', fontSize: 14}}>Please pick a drug</Text>

                        { config.user.drugs.map((value, index) => {
                            return <TouchableHighlight key={index} onPress={() => this.setDrugValueAndScheduleValue(value.name, value.schedule)} style={styles.drugDisplay}>
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
                            return <TouchableHighlight key={index} onPress={() => this.setDayOfWeekValue(value.value, value.title)} style={styles.drugDisplay}>
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
                    onCancel={this.hideTimePicker}
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
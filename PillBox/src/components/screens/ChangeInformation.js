import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ChangeInformationForm from '../container/ChangeInformationForm'
import config from '../../config';

class ChangeInformation extends Component {

    render() {
        return (
            <View style = {config.fullLayout}>                
                <KeyboardAvoidingView style={config.fullLayout}>
                    <Text style={styles.registerText}>Change Information</Text>
				    <ChangeInformationForm navigation={this.props.navigation}/>
                </KeyboardAvoidingView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
	registerText: {
        fontSize: 32,
        paddingTop: 10
    },
	input: {
        height: 40,
        marginBottom: 10,
        padding: 10,
        fontSize: 20
    }
});

export default ChangeInformation;
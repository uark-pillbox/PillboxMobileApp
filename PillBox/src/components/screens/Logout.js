import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import config from '../../config';

class Logout extends Component {

    logout() {
        // TODO
        // Call the API logout route to logout the user from the session
        this.props.navigation.navigate('login');
    }

    render() {
        return (
            <View style={config.fullLayout}>
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={()=> this.logout()}>
                    <Text style={styles.logoutText}>LOGOUT</Text>
                </TouchableOpacity>
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
    logoutText: {
        fontSize: 24,
        color: 'white',
    },
});

export default Logout;
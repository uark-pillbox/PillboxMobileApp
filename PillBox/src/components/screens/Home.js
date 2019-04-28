import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import config from '../../config';

class Home extends Component {

    render() {
        return (
            <View style={config.fullLayout}>
                <Image source={require('../../resources/logo.png')} style={{width: 200, height: 200, marginBottom: 50}} />
                <Text style={styles.welcomeText}>Welcome {config.user.name}!</Text>
                <Text style={{ fontSize: 24 }}>Username: {config.user.username}</Text>
                <Text style={{ fontSize: 24 }}>Email: {config.user.email}</Text>
                <TouchableOpacity
                    style={styles.buttons}>
                    <Text style={styles.buttonText}>Change Information</Text>
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
        backgroundColor: config.colors.lightBlue
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
	},
	welcomeText: {
		fontSize: 38,
		height: 55,
	}
});

export default Home;

import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import config from '../../config';

class Home extends Component {

    login() {
        alert(config.user.token)
    }

    render() {
        return (
            <View style={config.fullLayout}>
                    <TouchableOpacity 
                        style={styles.buttons}
                        onPress={()=> this.login()}>
                            <Text style={styles.loginText}>Future Home Page</Text>
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
    loginText: {
        fontSize: 24,
        color: 'white',
    },
});

export default Home;
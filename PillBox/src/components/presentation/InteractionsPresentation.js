import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import config from '../../config';

class InteractionsPresentation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: false,
            seed: 1,
        }
    }

    componentDidMount() {
        this.getInteractions();
    }

    async getInteractions() {
        try {            
            let response = await fetch(config.baseUrl + "drugs/interactions", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Authorization': 'Bearer ' + config.user.token,
                },
                body: JSON.stringify({}),});

                let status = response.status;
                
                if(status === 200) {
                    let resJson = JSON.parse(response._bodyText);
                    this.setState({
                        data: resJson,
                        refreshing: false
                    });
                }
                else {
                    alert("Not enough drugs listed to check interactions.");
                }
            return response;
        } catch(error) {
            console.error(error);
        }
    }

    handleRefresh = () => {
        this.setState({
            seed: this.state.seed + 1,
            refreshing: true
        },
        () => {
            this.getInteractions();
        })
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => item.Id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.drugNameText}>{item.DrugName1} : {item.DrugName2}</Text>
                        <Text style={styles.descriptionText}>{item.Description}</Text>
                        <View
                            style={{
                                height: 2,
                                width: "100%",
                                backgroundColor: config.colors.darkGreen,
                            }}
                        />
                    </View>
                )}
                onRefresh={this.handleRefresh}
                refreshing={this.state.refreshing}
            />
        )
    }
}

const styles = StyleSheet.create({
    drugNameText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    descriptionText: {
        padding: 4,
        fontSize: 16
    }
});

export default InteractionsPresentation;
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import InteractionsPresentation from '../presentation/InteractionsPresentation'
import config from '../../config';

class Interactions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showInteractions: false,
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
                    // alert("Drug added.");
                    let resJson = JSON.parse(response._bodyText);
                    this.setState({
                        data: resJson
                    })

                    // alert(JSON.stringify(this.state.data));

                    // let drugs = resJson.drugs;
                    // config.user.drugs = drugs;
                    // alert(JSON.stringify(response));
                }
                else {
                    alert("Not enough drugs listed to check interactions.");
                }
            return response;
        } catch(error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={styles.interactionsLayout}>
                    <Text style={{fontSize: 32}}>Interactions</Text>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={this.state.data.DrugName1}
                        renderItem={({item}) => (
                            <View>
                                <Text style={styles.drugNameText}>{ item.DrugName1 } : { item.DrugName2 }</Text>
                                <Text style={styles.descriptionText}>{ item.Description }</Text>
                                <View
                                style={{
                                height: 2,
                                width: "100%",
                                backgroundColor: config.colors.darkGreen,
                                }}
                            />
                            </View>
                        )}
                    />
                    
                    
                    {/* <TouchableOpacity 
                        style={styles.buttons}
                        onPress={() => this.getInteractions()}>
                        <Text style={styles.text}>Get Interactions</Text>
                    </TouchableOpacity> */}
                    
                    {/* {this.state.data.map((index, value) => {
                        return <Text>{ value.DrugName1 }</Text>
                    })} */}
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
    text: {
        fontSize: 24,
        color: 'white',
    },
    interactionsLayout: {
        height:100+'%',
        width:100+'%',
        flex:1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: 'rgb(100,255,100)'
    },
    drugNameText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    descriptionText: {
        padding: 4,
        fontSize: 16
    }
});

export default Interactions;
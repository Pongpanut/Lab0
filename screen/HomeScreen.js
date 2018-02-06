import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Button
    
} from 'react-native';

import { TabNavigator, TabBarBottom } from 'react-navigation';
import  MapScreen  from './MapScreen';
import  JobListScreen  from './JobListScreen';



const MainNavigator = TabNavigator({
    joblist: {
        screen: JobListScreen,
    },
    map: { 
        screen: MapScreen },
})


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <View style={styles.login_btn}>
                     <Button onPress={this.props.onLogoutPress} title="Log out" color="#77c8a7" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#77c8a7',
    } ,
     login_btn: {
        marginVertical: 5,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        width: 200,
      },
  });
import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';




export default class JobListScreen extends Component {
    static navigationOptions = {
		title: 'JobListScreen',
	};

    render() {
        return (
            <View>
                <Text>JobListScreen App</Text>
            </View>
        )
    }
}

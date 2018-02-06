import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-native-navigation';



export default class MapScreen extends Component {
    static navigationOptions = {
		title: 'MapScreen',
	};
    render() {
        return (
            <View>
              <Text>MapScreen</Text>
            </View>
          )
    }
}

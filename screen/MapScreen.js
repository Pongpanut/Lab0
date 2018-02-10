import React, { Component } from 'react';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const styles = StyleSheet.create({
    mapContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      paddingTop: 30,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginRight: -1,
        width: null,
        height: null
      },
  })
  

export default class MapScreen extends Component {
    
    static navigationOptions = {
		title: 'MapScreen',
    };

    onRegionChangeComplete() {
        alert('move')
    }

    render() {
        return (
            <View style={styles.mapContainer}>
              <MapView
                ref="map"
                style={styles.map}
                showsMyLocationButton={true}
                showsUserLocation={true}
                onRegionChangeComplete={this.onRegionChangeComplete}
                />
            </View>
          )
    }
}

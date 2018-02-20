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
  const DEFAULT_LATITUDE_DELTA = 0.13
  const DEFAULT_LONGITUDE_DELTA = 0.13

export default class MapScreen extends Component {
    state = {}

    static navigationOptions = {
		title: 'MapScreen',
    };

    getLocationSuccess(position){
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        const region = {
            latitude : latitude,
            longitude :longitude,
            latitudeDelta: DEFAULT_LATITUDE_DELTA,
            longitudeDelta: DEFAULT_LONGITUDE_DELTA,
        }
        this.setState({ region })
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
        (position) => this.getLocationSuccess(position),
        (error) =>alert(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 });
    }

    onRegionChangeComplete() {
        // alert('move')
    }

    render() {
        const { region } = this.state

        return (
            <View style={styles.mapContainer}>
              <MapView
                ref="map"
                style={styles.map}
                showsMyLocationButton={true}
                initialRegion={region}
                showsUserLocation={true}
                onRegionChangeComplete={this.onRegionChangeComplete}
                />
            </View>
          )
    }
}

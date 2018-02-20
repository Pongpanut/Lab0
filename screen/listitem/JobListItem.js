import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

export default class JobListItem extends PureComponent {
  static defaultProps = {
    customer: {},
    location: {
      latitude: 0,
      longitude: 0,
    },
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
  }

  _onPress = () => {
    const { id, onPressItem } = this.props

    onPressItem(id)
  }

  render() {
    return (
      <TouchableOpacity 
        activeOpacity={0.6}
        onPress={this._onPress}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title} numberOfLines={1}>
                test
              </Text>
              <Text h4 style={styles.balance}>
                111.11
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 60,
    justifyContent: 'center',
    flex:1,
    backgroundColor: 'blue',
  },
  imageContainer: {
    flex: .75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 15,
    height: 15,
  },
  content: {
    flex: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  title: {
    flex: 1,
    minWidth: '10%',
  },
  balance: {
    maxWidth: 80,
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  distance: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  miles: {
    marginLeft: 4,
  }
})
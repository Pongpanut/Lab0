import React, { Component } from 'react';
import { ScrollView, Text, View,Image,  Button,  StyleSheet, FlatList, TouchableHighlight , Dimensions} from 'react-native';

const JobListItem = require('./listitem/JobListItem')
const width = Dimensions.get('window').width;
const test = require('../image/jobimage.jpeg')


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    listContainer:{
        backgroundColor: 'white',
        width: width,
        borderColor: '#77c8a7',
        borderBottomWidth: 4,
        borderRightWidth:  4,
        borderLeftWidth:  4,
        height: 100
    }
  });


export default class JobListScreen extends Component {
    static navigationOptions = {
		title: 'JobListScreen',
    };
    
    _renderItem = ({ item }) => {
    
        return (
          <JobListItem
            onPressItem={this._onItemPress} />
        )
      }


    render() {

        const data = [
            {title: 'Job1', key: 'item1', location : 'sukhumwit', spec :'../image/jobimage.jpeg'},
            {title: 'Job2', key: 'item2', location : 'rama V', spec :''},
            {title: 'Job3', key: 'item3', location : 'rama IV', spec :''},
            {title: 'Job4', key: 'item4', location : 'ratchada', spec :''},
            {title: 'Job5', key: 'item5', location : 'ratchayothin', spec :''},
            {title: 'Job6', key: 'item6', location : 'Lak si', spec :'../image/jobimage.jpeg'},
        ]
        return (
            <View style={styles.container}>
             <FlatList
                data={data}
                renderItem={({item, separators}) => (
                  <TouchableHighlight
                    onPress={() => this._onPress(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={styles.listContainer}>
                      {/* <Image  source={require('../image/jobimage.jpeg')} /> */}
                      <Text>{item.title}</Text>
                    </View>
                  </TouchableHighlight>
                )}
                />
            </View>
        )
    }
}

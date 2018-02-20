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
        height: 100,
        flexDirection: 'row',
    },
    jobDesc:{
      marginTop: 15,
      flexDirection: 'column',
    },
    jobImageContainer:{
      marginLeft: 20,
      width: 120
    },
    jobImage:{
       height:95,
       width: 95,
       borderWidth: 1,
       borderColor:'#77c8a7' ,
       padding: 10,
       paddingLeft: 30,

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
            {title: 'Job1', key: 'item1',date: '11/03/2017', location : 'sukhumwit', spec: 'man',image :'../image/jobimage.jpeg'},
            {title: 'Job2', key: 'item2',date: '13/02/2017', location : 'rama V', spec :'woman'},
            {title: 'Job3', key: 'item3',date: '21/05/2017', location : 'rama IV', spec :'woman'},
            {title: 'Job4', key: 'item4',date: '01/04/2017', location : 'ratchada', spec :'man'},
            {title: 'Job5', key: 'item5',date: '19/02/2017', location : 'ratchayothin', spec :'man'},
            {title: 'Job6', key: 'item6',date: '30/05/2017', location : 'Lak si', spec:'woman', image :'../image/jobimage.jpeg'},
            {title: 'Job7', key: 'item7',date: '30/03/2017', location : 'Don mueng', spec:'man', image :'../image/jobimage.jpeg'},

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
                      
                      <View style={styles.jobImageContainer}>
                        <Image style={styles.jobImage} source={require('../image/jobimage.jpeg')} />
                      </View>
                      <View style={styles.jobDesc}>
                        <Text>Job title : {item.title}</Text>
                        <Text>Location : {item.location}</Text>
                        <Text>Date: {item.data}</Text>
                        <Text>Spec {item.spec}</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                )}
                />
            </View>
        )
    }
}

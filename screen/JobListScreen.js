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
        borderColor: '#bce5d4',
        borderBottomWidth: 4,
        borderRightWidth:  4,
        borderLeftWidth:  4,
        height: 150,
        flexDirection: 'row',
    },
    jobDesc:{
      marginLeft: 10,
      flex:1,
      marginTop: 15,
      flexDirection: 'column',
    },
    jobImageContainer:{
      flex:1,
      flexDirection: 'column',
      marginTop: 15,
      marginLeft: 80,
      width: 120
    },
    jobImage:{
       height:85,
       width: 125,
       padding: 10,
       paddingLeft: 30,

    },
    descText:{
      color: 'grey',
      fontSize: 18,
    },
    priceText:{
      color: 'grey',
      fontSize: 15,
    },
    imageContainer:{
      marginTop: 5,
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 2 },
      height:85,
      width: 125,
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    }
  });

  const data = null;
    

export default class JobListScreen extends Component {
    static navigationOptions = {
		title: 'JobListScreen',
    };
    constructor(props) {
        super(props);
        this.state = {};
    }

    
    _renderItem = ({ item }) => {
    
        return (
          <JobListItem
            onPressItem={this._onItemPress} />
        )
      }

    componentDidMount(){
        data = [
          {title: 'Event staff', key: 'item1',date: 'Feb 15-17', time: '09.00 - 18.00', location : 'sukhumwit', price: '$30', pricedesc:'$10/day',image :'../image/jobimage.jpeg'},
          {title: 'Data Entry', key: 'item2',date: 'Feb 15', time: '14.00 - 16.00',location : 'rama V', price :'$20',  pricedesc:'$20/day'},
          {title: 'Event staff', key: 'item3',date: 'Feb 15-16', time: '10.00 - 12.00', location : 'rama IV', price :'$100',  pricedesc:'$50/day'},
          {title: 'Cashier', key: 'item4',date: 'Feb 15-18', time: '13.00 - 15.00',location : 'ratchada', price :'$40',  pricedesc:'$10/day'},
          {title: 'Dancer', key: 'item5',date: 'Feb 19-20', time: '12.00 - 22.00',location : 'ratchayothin', price :'$70',  pricedesc:'$35/day'},
          {title: 'Staff', key: 'item6',date: 'Feb 20-22', time: '18.00 - 23.00',location : 'Lak si', price:'$30',  pricedesc:'$10/day',image :'../image/jobimage.jpeg'},
          {title: 'Sales', key: 'item7',date: 'Feb 25-26', time: '06.00 - 10.00',location : 'Don mueng', price:'$40', pricedesc:'$20/day',image :'../image/jobimage.jpeg'},
          {title: 'Data Entry', key: 'item8',date: 'Feb 15-16', time: '12.00 - 13.00',location : 'Don mueng', price:'$30', pricedesc:'$15/day' , image :'../image/jobimage.jpeg'},

      ]
      this.setState({ jobdata: data })
    }


    render() {
        return (
            <View style={styles.container}>
             <FlatList
                data={this.state.jobdata}
                renderItem={({item, separators}) => (
                  <TouchableHighlight
                    onPress={() => this._onPress(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={styles.listContainer}>
                      {/* <Image  source={require('../image/jobimage.jpeg')} /> */}
                      
                    
                      <View style={styles.jobDesc}>
                        <Text style={styles.descText}>{item.title}</Text>
                        <Text style={styles.descText}>{item.date} @ {item.location}</Text>
                        <Text style={styles.descText}>{item.time}</Text>
                      </View>
                      <View style={styles.jobImageContainer}>
                        <Text style={styles.priceText}>{item.price}</Text>
                        <Text style={styles.priceText}>({item.pricedesc})</Text>
                        <View style={styles.imageContainer}>
                          <Image style={styles.jobImage} source={require('../image/jobimage.jpeg')} />
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
                )}
                />
            </View>
        )
    }
}

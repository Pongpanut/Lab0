import React from 'react'
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation'
import  FeedScreen  from '../screen/FeedScreen';
import  OfferScreen  from '../screen/OfferScreen';
import  LogScreen  from '../screen/LogScreen';
import Icon from 'react-native-vector-icons/FontAwesome';


const MainNavigator = TabNavigator({
  feed: { 
    screen: FeedScreen,
    navigationOptions: {
      tabBarLabel: 'new feed',
      tabBarIcon: ({ tintColor }) => {
        return <Icon containerStyle={{ marginTop: 6 }} name="th-list" size={25} color={tintColor} />;
      },
    }
  },
  offer: { 
    screen: OfferScreen,
    navigationOptions: {
      tabBarLabel: 'up coming',
      tabBarIcon: ({ tintColor }) => {
        return <Icon containerStyle={{ marginTop: 6 }} name="bell" size={25} color={tintColor} />;
      },
    }
  },
  log: { 
    screen: LogScreen,
    navigationOptions: {
      tabBarLabel: 'shortlist',
      tabBarIcon: ({ tintColor }) => {
        return <Icon containerStyle={{ marginTop: 6 }} name="heart" size={25} color={tintColor} />;
      },
    }
  },
  filter: { 
    screen: LogScreen,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({ tintColor }) => {
        return <Icon containerStyle={{ marginTop: 6 }} name="align-left" size={25} color={tintColor} />;
      },
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: '#77c8a7',
    inactiveTintColor: 'grey',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderBottomColor: 'black',
    showLabel: true,
    showIcon: true ,
    style: {
      marginTop: 20,
      paddingTop: 40,
      height: 70,
      backgroundColor: '#FFFFFF',
      borderTopColor: 'transparent',
      borderBottomColor: '#77c8a7',
      borderBottomWidth: 1 
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 14,
      paddingTop: 16,
      paddingBottom: 6,
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'top',
  swipeEnabled: false,
})

export default MainNavigator

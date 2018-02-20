import React from 'react'
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation'
import  FeedScreen  from '../screen/FeedScreen';
import  OfferScreen  from '../screen/OfferScreen';
import  LogScreen  from '../screen/LogScreen';


const MainNavigator = TabNavigator({
  feed: { 
    screen: FeedScreen,
    navigationOptions: {
      tabBarLabel: 'Feed',
    }
  },
  offer: { 
    screen: OfferScreen,
    navigationOptions: {
      tabBarLabel: 'Offer',
    }
  },
  log: { 
    screen: LogScreen,
    navigationOptions: {
      tabBarLabel: 'Log',
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: '#77c8a7',
    inactiveTintColor: 'grey',
    activeBackgroundColor: 'white',
    inactiveBackgroundColor:  'grey',
    showLabel: true,
    style: {
      paddingTop: 20,
      height: 70,
      backgroundColor: '#FFFFFF',
      borderTopColor: 'transparent'
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 14,
      paddingTop: 6,
      paddingBottom: 6,
    }
  },
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: false,
})

export default MainNavigator

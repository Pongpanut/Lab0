import React from 'react'
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation'
import  MapScreen  from '../screen/MapScreen';
import  JobListScreen  from '../screen/JobListScreen';


const MainNavigator = TabNavigator({
  feed: { 
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Feed',
    }
  },
  offer: { 
    screen: JobListScreen,
    navigationOptions: {
      tabBarLabel: 'Offer',
    }
  },
  log: { 
    screen: JobListScreen,
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
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 20,
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

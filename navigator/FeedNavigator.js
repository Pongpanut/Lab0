import React from 'react'
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation'
import  MapScreen  from '../screen/MapScreen';
import  JobListScreen  from '../screen/JobListScreen';


const FeedNavigator = TabNavigator({
  list: { 
    screen: JobListScreen,
    navigationOptions: {
      tabBarLabel: 'list',
    }
  },
  map: { 
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'map',
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#77c8a7',
    activeBackgroundColor: '#77c8a7',
    inactiveBackgroundColor:  'white',
    showLabel: true,
    style: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 20,
      height: 40,
      backgroundColor: '#FFFFFF',
      borderTopColor: 'transparent',
      borderBottomColor: '#77c8a7',
      borderBottomWidth: 2 
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 14,
      paddingTop: 6,
      paddingBottom: 6,
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'top',
  swipeEnabled: false,
})

export default FeedNavigator

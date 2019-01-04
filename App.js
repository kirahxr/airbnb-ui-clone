import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Keyboard 
} from 'react-native';

// Fungsi untuk meng-import tab navigator
import {createBottomTabNavigator} from 'react-navigation'

// Fungsi untuk meng-import vector icons
import Icon from 'react-native-ionicons'

// Fungsi untuk meng-import screens
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Inbox from './screens/Inbox'
import Login from './screens/Login'

export default createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="search" color={tintColor} size={24} />
      )
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel:'LOVED',
      tabBarIcon:({tintColor})=>(
        <Icon name="heart" color={tintColor} size={24} />
      )
    }
  },
  Trips:{
    screen: Trips,
    navigationOptions:{
      tabBarLabel:'TRIPS',
      tabBarIcon:({tintColor})=>(
        <Image source={require('./assets/airbnb.png')} style={{height:26,width:26,tintColor:tintColor}}/>
      )
    }
  },
  Inbox:{
    screen: Inbox,
    navigationOptions:{
      tabBarLabel:'INBOX',
      tabBarIcon:({tintColor})=>(
        <Icon name="chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Profile:{
    screen: Login,
    navigationOptions:{
      tabBarLabel:'PROFILE',
      tabBarIcon:({tintColor})=>(
        <Icon name="person" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions:  {
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      style:  {
        backgroundColor: '#fd5c63',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        alignItems: 'center'
      }
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
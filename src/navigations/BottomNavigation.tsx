/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Search from '../components/Search';
import Feed from '../components/Feed';
import PlayList from '../components/PlayList';
import {Image} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
import PlayListImg from '../images/PlaylistImg.png';
const Tab = createBottomTabNavigator();

class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1D103A',
            height: 80,
            paddingBottom: 7,
            borderColor: '#1D103A',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Icons
                name="home"
                size={30}
                color={focused ? '#844DFB' : '#E4DEEF'}
              />
            ),
            tabBarActiveBackgroundColor: '#1D103A',
            tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#844DFB',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '400',
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon
                name="search"
                size={30}
                color={focused ? '#844DFB' : '#E4DEEF'}
              />
            ),
            tabBarActiveBackgroundColor: '#1D103A',
            tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#844DFB',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '400',
            },
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <FeatherIcon
                name="users"
                size={30}
                color={focused ? '#844DFB' : '#E4DEEF'}
              />
            ),
            tabBarActiveBackgroundColor: '#1D103A',
            tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#844DFB',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '400',
            },
          }}
          name="Feed"
          component={Feed}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={PlayListImg}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#844DFB' : '#E4DEEF',
                }}
              />
            ),
            tabBarActiveBackgroundColor: '#1D103A',
            tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#844DFB',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '400',
            },
          }}
          name="PlayList"
          component={PlayList}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomNavigation;

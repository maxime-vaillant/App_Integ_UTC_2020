import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';

import HomeScreen from '../screens/HomePage';
import PlanningScreen from '../screens/PlanningPage';
import ScoreScreen from '../screens/ScorePage';
import ContactScreen from '../screens/ContactPage';
import SponsorScreen from '../screens/SponsorPage';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../assets/Colors';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Accueil',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon
            focused={focused}
            name={ Platform.OS === "ios" ? 'ios-home' : 'md-home' }
          />
      }
    },

    PlanningStack: {
      screen: PlanningScreen,
      navigationOptions: {
        tabBarLabel: 'Journées',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon
            focused={focused}
            name={ Platform.OS === "ios" ? 'ios-sunny' : 'md-sunny' }
          />
      }
    },

    ScoreStack: {
      screen: ScoreScreen,
      navigationOptions: {
        tabBarLabel: 'Score',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon
            focused={focused}
            name={ Platform.OS === "ios" ? 'ios-trophy' : 'md-trophy' }
          />
      }
    },
    ContactStack: {
      screen: ContactScreen,
      navigationOptions: {
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon
            focused={focused}
            name={ Platform.OS === "ios" ? 'ios-contact' : 'md-contact' }
          />
      }
    },

    SponsorStack: {
      screen: SponsorScreen,
      navigationOptions: {
        tabBarLabel: 'Bons Plans',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon
            focused={focused}
            name={ Platform.OS === "ios" ? 'logo-euro' : 'logo-euro' }
          />
      }
    },
  },
  {
    tabBarOptions: {
        activeTintColor: 'white', // active icon color
        inactiveTintColor: '#E2B09B',  // inactive icon color
        style: {
            backgroundColor: "#B73904", // TabBar background
            borderTopWidth:1,
            borderTopColor:'#D3D3D3'
        }
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;

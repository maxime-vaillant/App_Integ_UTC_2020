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
        tabBarOptions: {
          activeTintColor: Colors.iconColor,
        },
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
        tabBarOptions: {
          activeTintColor: Colors.iconColor,
        },
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
        tabBarOptions: {
          activeTintColor: Colors.iconColor,
        },
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
        tabBarOptions: {
          activeTintColor: Colors.iconColor,
        },
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
        tabBarOptions: {
          activeTintColor: Colors.iconColor,
        },
        tabBarIcon: ({ focused }) =>
          <TabBarIcon
            focused={focused}
            name={ Platform.OS === "ios" ? 'logo-euro' : 'logo-euro' }
          />
      }
    },
  }
);

tabNavigator.path = '';

export default tabNavigator;

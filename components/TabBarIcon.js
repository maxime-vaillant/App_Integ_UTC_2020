import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../assets/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      size={22}
      style={{ marginBottom: -3, opacity: props.focused ? 1 : 0.5}}
      color={"white"}
    />
  );
}

import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import Colors from '../assets/Colors';

const Group = ({group, date, lieu}) => {
  return(
    <View style={styles.main_container}>
        <Text>Groupe {group} </Text>
        <Text>{date} </Text>
        <Text>{lieu}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    height: 40,
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    borderRadius: 5,
    paddingLeft: 5,
    backgroundColor: 'white',
    alignItems: 'center'
  },

})

export default Group;

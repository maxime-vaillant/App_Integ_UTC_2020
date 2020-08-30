import React from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions, TouchableOpacity } from 'react-native';

import Colors from '../assets/Colors';

const width = Dimensions.get('window').width;

const Group = ({group, date, lieu}) => {
  return(
    <View style={styles.main_container}>
        <Text style={styles.text_title}>Groupe {group} </Text>
        <Text style={styles.text_date}>{date} </Text>
        <Text style={styles.text_lieu}>{lieu}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    width: width/4 - 10,
    height: width/4 - 10,
    marginBottom: 5,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    backgroundColor: Colors.secondColor,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text_title: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 14,
  },

  text_date: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 15,
  },

  text_lieu: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 12,
  }

})

export default Group;

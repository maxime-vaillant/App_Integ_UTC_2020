import React from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';

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
    width: width/2 - 25,
    height: width/2 - 25,
    marginBottom: 10,
    paddingLeft: 5,
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 5,
    backgroundColor: Colors.secondColor,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text_title: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 25,
  },

  text_date: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 20,
  },

  text_lieu: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 20,
  }

})

export default Group;

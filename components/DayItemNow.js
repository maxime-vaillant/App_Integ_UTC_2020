import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import Colors from '../assets/Colors';

const DayItemNow = ({dayName, dayDetails}) => {
    return(
      <View>
        <View style={styles.main_container}>
          <Text style={styles.title_text}>{dayName}</Text>
        </View>
        <ScrollView style={styles.body_container}>
          <Text style={styles.body_text}>{dayDetails}</Text>
        </ScrollView>
      </View>
  )}

const styles = StyleSheet.create({
  main_container: {
    height: 50,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    backgroundColor: Colors.blockColor,
    alignItems: 'center',
    borderRadius: 3,
  },

  body_container:{
    maxHeight: 170,
    flexDirection: 'column',
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Colors.collapseColor,
    borderRadius: 3,
  },

  content_container: {
    flex: 1,
    margin: 5
  },

  title_text: {
    fontFamily: Colors.fontFamily,
    fontWeight: 'bold',
    color: "white",
    fontSize: 20,
    flex: 1,
    paddingRight: 5,
    marginLeft: 5,
  },

  body_text:{
    fontSize: 15,
    flex: 1,
    color: "white",
    textAlign: 'justify',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },

})

export default DayItemNow;

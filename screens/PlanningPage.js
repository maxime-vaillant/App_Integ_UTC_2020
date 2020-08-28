import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import {AccordionList} from "accordion-collapse-react-native";
import Constants from 'expo-constants';

import DayItem from '../components/DayItem';
import ScreenTitle from '../components/ScreenTitle';
import static_data from '../assets/static_data.json';
import Colors from '../assets/Colors';

const dataDays = static_data.Days;

export default function PlanningScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle title="Planning"/>
      <AccordionList
        data={dataDays}
        header={( item ) =>
          <View style={styles.main_container}>
            <Text style={styles.title_text}>{item.title}</Text>
          </View>}
        body={( item ) =>
          <ScrollView style={styles.body_container}>
            <Text style={styles.date_text}>{item.date}</Text>
            <Text style={styles.body_text}>{item.body}</Text>
          </ScrollView>
        }
        keyExtractor={item => item.id}
        style={{paddingTop: 20, backgroundColor: 'white'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },

  main_container: {
    height: 50,
    flexDirection: 'row',
    marginTop : 5,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    backgroundColor: Colors.secondColor,
    alignItems: 'center',
    borderRadius: 3,
  },

  body_container:{
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#000000',
    backgroundColor: Colors.collapseColor,
    borderRadius: 3,
    marginTop: 0,
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
    fontWeight: 'bold',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },

  date_text:{
    color: "white",
    fontSize: 15,
    textAlign: 'right',
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    marginBottom: 10,
  }
});

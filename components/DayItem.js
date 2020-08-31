import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import Colors from '../assets/Colors';



const DayItem = ({dayName, dayDetails, dayDate}) => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [date, setDate] = useState(new Date().getDate());

    return(
    <Collapse>
      <CollapseHeader>
      <View style={styles.main_container}>
        <Text style={styles.title_text}>{dayName}</Text>
      </View>
      </CollapseHeader>
      <CollapseBody>
        <ScrollView style={styles.body_container, {backgroundColor: Colors.secondColor,}}>
          <Text style={styles.date_text}>{dayDate}</Text>
          <Text style={styles.body_text}>{dayDetails}</Text>
        </ScrollView>
      </CollapseBody>
    </Collapse>
  )}

const styles = StyleSheet.create({
  main_container: {
    height: 50,
    flexDirection: 'row',
    marginTop : 5,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    backgroundColor: Colors.secondColor,
    alignItems: 'center',
    borderRadius: 3
  },

  body_container:{
    maxHeight: 170,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Colors.collapseColor,
    borderRadius: 3,
    marginTop: 0
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
    marginLeft: 5
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
    marginBottom: 10
  }

})

export default DayItem;

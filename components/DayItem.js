import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import Colors from '../assets/Colors';

const DayItem = ({dayName, dayDetails, dayDate}) => {
    return(
    <Collapse>
      <CollapseHeader>
      <View style={styles.main_container}>
        <Text style={styles.title_text}>{dayName}</Text>
      </View>
      </CollapseHeader>
      <CollapseBody>
        <ScrollView style={styles.body_container}>
          <Text style={styles.date_text}>{dayDate}</Text>
          <Text style={styles.body_text}>{dayDetails}</Text>
        </ScrollView>
      </CollapseBody>
    </Collapse>
  )}

const styles = StyleSheet.create({
  main_container: {
    height: 40,
    flexDirection: 'row',
    marginTop : 10,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#000000',
    borderRadius: 5,
    paddingLeft: 5,
    backgroundColor: 'white',
    alignItems: 'center'
  },

  body_container:{
    maxHeight: 170,
    flexDirection: 'column',
    marginTop: -5,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#000000',
    borderRadius: 3,
    backgroundColor: 'white'
  },

  content_container: {
    flex: 1,
    margin: 5
  },

  title_text: {
    fontFamily: Colors.fontFamily,
    fontWeight: 'bold',
    color: Colors.fontColor,
    fontSize: 25,
    flex: 1,
    paddingRight: 5,
    marginLeft: 5,
    marginTop: 5
  },

  body_text:{
    fontSize: 15,
    flex: 1,
    textAlign: 'justify',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },

  date_text:{
    fontSize: 15,
    textAlign: 'right',
    flex: 1,
    paddingRight: 10,
    marginBottom: 10,
  }

})

export default DayItem;

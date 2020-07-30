import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, Dimensions } from 'react-native';

import Colors from '../assets/Colors';

const height = Dimensions.get('window').height;

const InformationBoard = ({infoName, infoDetails, infoDate}) => {
  return(
    <SafeAreaView style={styles.main_container}>
      <View style={styles.view_container}>
        <Text style={styles.title_text}>{infoName}</Text>
      </View>
      <ScrollView style={styles.scroll_container}>
        <Text style={styles.body_text}>{infoDetails}</Text>
      </ScrollView>
      <View style={styles.view_container}>
        <Text style={styles.date_text}>{infoDate}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main_container: {
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#000000',
    maxHeight: 0.6*height,
//    borderTopRightRadius: 20,
//    borderTopLeftRadius: 20,
    borderRadius: 5,
    paddingLeft: 5,
    backgroundColor: 'white'
  },

  scroll_container: {
    paddingLeft: 10,
  },

  view_container: {
    paddingLeft: 10,
    paddingTop: 5
  },

  title_text: {
    fontSize: 35,
    fontFamily: Colors.fontFamily,
    color: Colors.fontColor,
    fontWeight: 'bold'
  },

  body_text: {
    fontSize: 20,
    textAlign: 'justify'
  },

  date_text: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'right',
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5
  }

})

export default InformationBoard;

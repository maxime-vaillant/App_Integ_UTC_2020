import React from "react";
import { SafeAreaView, Text, StyleSheet, Platform, Dimensions } from "react-native";
import { Header } from "react-navigation-stack" ;

import Colors from '../assets/Colors';

const height = Dimensions.get('window').height;

const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

const ScreenTitle = ({title}) => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.mainColor,
    justifyContent: 'center',
//    borderBottomLeftRadius : 45,
//    borderBottomRightRadius : 45,
    height: 50,
  },
  title: {
    fontFamily: Colors.fontFamily,
    fontSize: 30,
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    position: 'absolute',
    left: TITLE_OFFSET,
    right: TITLE_OFFSET,
  }
})

export default  ScreenTitle;

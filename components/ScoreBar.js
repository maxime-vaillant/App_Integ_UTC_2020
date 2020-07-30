import React from 'react';
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';

import { imageIndex } from "../assets/imageIndex";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ScoreBar = ({scoreEquipe,scoreMax,colorB}) => {
  return(
    <View style={styles.view_container}>
      <Image style={styles.head_totem} source={imageIndex["14"]}/>
      <Image style={{height:0.4*height*scoreEquipe/scoreMax, width: 30, resizeMode: 'repeat', opacity: 0.8}} source={imageIndex["13"]}/>
      <Image style={styles.bottom_totem} source={imageIndex["12"]}/>
    </View>
)}

const styles = StyleSheet.create({
  score_text: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  view_container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  score_view: {
    flex:1,
    height:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
  },

  head_totem: {
    height:55,
    width:120,
    opacity: 0.8,
    resizeMode: 'contain'
  },

  bottom_totem: {
    height:45,
    width:30,
    opacity: 0.8
  }
})

export default ScoreBar;

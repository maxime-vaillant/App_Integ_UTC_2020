import React from 'react';
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';

import { imageIndex } from "../assets/imageIndex";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ScoreBar = ({scoreEquipe,scoreMax,index}) => {
  return(
    <View style={styles.clan_view}>
      <View style={styles.head}>
        <Image style={styles.head_totem} source={imageIndex[index]}/>
      </View>
      <View style={{width: '60%', flex: scoreEquipe/(scoreMax), alignItems: 'center', flexDirection: 'column', overflow: 'hidden',}}>
        <Image style={styles.body_totem} source={imageIndex[index+1]}/>
      </View>
      <View style={styles.foot}>
        <Image style={styles.foot_totem} source={imageIndex[index+2]}/>
        <Text style={styles.score_text}>{scoreEquipe}</Text>
      </View>
    </View>
)}

const styles = StyleSheet.create({
  clan_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  head: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  foot: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  head_totem: {
    height: '60%',
    width: '60%',
  },

  body_totem: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },

  foot_totem: {
    height: '50%',
    resizeMode: 'contain'
  },

  score_text: {
    fontWeight: 'bold',
    marginTop: '-27%',
  }
})

export default ScoreBar;

//height:0.4*height*scoreEquipe/scoreMax

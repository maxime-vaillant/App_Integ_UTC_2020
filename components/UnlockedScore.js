import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

import ScoreBar from './ScoreBar';
import { imageIndex } from "../assets/imageIndex";

const UnlockedScore = ({tampi,youa,kb,vb,max}) => {
  return(
    <View style={{flex:6, flexDirection: 'row'}}>
      <View style={styles.classic_view}>
        <View style={styles.score_display}>
          {tampi == max ? <Image style={styles.image} source={imageIndex[10]}/> : <View></View>}
        </View>
        <View style={styles.score_graph}>
          <ScoreBar scoreEquipe={tampi} scoreMax={max} colorB="yellow"/>
        </View>
      </View>
      <View style={styles.classic_view}>
        <View style={styles.score_display}>
          {youa == max ? <Image style={styles.image} source={imageIndex[10]}/> : <View></View>}
        </View>
        <View style={styles.score_graph}>
          <ScoreBar scoreEquipe={youa} scoreMax={max} colorB="blue"/>
        </View>
      </View>
      <View style={styles.classic_view}>
        <View style={styles.score_display}>
          {kb == max ? <Image style={styles.image} source={imageIndex[10]}/> : <View></View>}
        </View>
        <View style={styles.score_graph}>
          <ScoreBar scoreEquipe={kb} scoreMax={max} colorB="red"/>
        </View>
      </View>
      <View style={styles.classic_view}>
        <View style={styles.score_display}>
          {vb == max ? <Image style={styles.image} source={imageIndex[10]}/> : <View></View>}
        </View>
        <View style={styles.score_graph}>
          <ScoreBar scoreEquipe={vb} scoreMax={max} colorB="green"/>
        </View>
      </View>
    </View>
  )
}

const styles  = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
    marginTop: 20,
    flex: 1,
    backgroundColor: '#D5D6DA'
  },

  classic_view: {
    flex: 1,
  },

  score_display: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10
  },

  score_graph: {
    marginBottom: 20
  },

  image: {
    height: 60,
    width: 60,
    alignSelf: "center",
    marginTop: 30
  }

})

export default UnlockedScore;

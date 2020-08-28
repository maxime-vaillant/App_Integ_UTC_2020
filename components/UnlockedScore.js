import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

import ScoreBar from './ScoreBar';
import { imageIndex } from "../assets/imageIndex";

const UnlockedScore = ({tampi,youa,kb,vb,max}) => {
  return(
    <View style={styles.second_view}>
      <ScoreBar scoreEquipe={kb} scoreMax={max} index={21}/>
      <ScoreBar scoreEquipe={tampi} scoreMax={max} index={24}/>
      <ScoreBar scoreEquipe={vb} scoreMax={max} index={27}/>
      <ScoreBar scoreEquipe={youa} scoreMax={max} index={30}/>
    </View>
  )
}

const styles  = StyleSheet.create({
  second_view: {
    flex: 6,
    flexDirection: 'row',
  },
})

export default UnlockedScore;

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { imageIndex } from "../assets/imageIndex";

const LockedScore = () => {
  return(
    <View style={{flex:6, flexDirection: 'row', alignSelf: 'center'}}>
      <Image style={styles.image} source={imageIndex[9]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 190,
    width: 130,
    alignSelf: "center"
  }
})

export default LockedScore;

import React from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

import { imageIndex } from "../assets/imageIndex";

const width = Dimensions.get('window').width;

const PubItem = ({index}) => {
  return(
    <TouchableOpacity onPress={() => Linking.openURL('https://m.mcdonalds.fr')}>
      <Image style={styles.pub} source={imageIndex[index]}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pub: {
    marginLeft: 10,
    marginRight: 10,
    height: 200,
    width: width - 20,
    resizeMode: 'contain',
  }
})

export default PubItem;

import React from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

import { imageIndex } from "../assets/imageIndex";

const width = Dimensions.get('window').width;

const PubItem = ({index, lien}) => {
  return(
    <TouchableOpacity onPress={() => Linking.openURL(lien)}>
      <Image style={styles.pub} source={imageIndex[index]}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pub: {
    marginLeft: 20,
    marginRight: 20,
    height: 140,
    width: width - 40,
    resizeMode: 'contain',
  }
})

export default PubItem;

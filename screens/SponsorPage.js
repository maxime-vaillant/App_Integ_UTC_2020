import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, View, TouchableHighlight, Linking } from 'react-native';

import ScreenTitle from '../components/ScreenTitle';
import PubItem from '../components/PubItem';
import Colors from '../assets/Colors';
import { imageIndex } from "../assets/imageIndex";

const width = Dimensions.get('window').width;

function SponsorScreen() {
  return(
    <SafeAreaView style={styles.main_container}>
      <ScreenTitle title="Bons Plans"/>
      <ScrollView style={styles.view}>
        <Image style={styles.logo} source={imageIndex[16]}/>
        <PubItem index={17} lien='https://www.ornikar.com'/>
        <PubItem index={18} lien='https://www.ornikar.com'/>
        <PubItem index={19} lien='https://www.ornikar.com'/>
        <TouchableHighlight onPress={() => Linking.openURL('https://antredemondes.fr')}>
          <Image style={styles.image} source={imageIndex[20]}/>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles  = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: Colors.background
  },

  view: {
    flex: 1,
    backgroundColor: "white"
  },

  image: {
    marginLeft: 20,
    marginRight: 20,
    width: width-40,
    height: (width-40)*2,
    resizeMode: "contain",
  },

  logo: {
    marginLeft: 40,
    marginRight: 40,
    width: width-80,
    height: 100,
    resizeMode: 'contain'
  }
})

export default SponsorScreen;

import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';

import ScreenTitle from '../components/ScreenTitle';
import PubItem from '../components/PubItem';
import Colors from '../assets/Colors';
import { imageIndex } from "../assets/imageIndex";



function SponsorScreen() {
  return(
    <SafeAreaView style={styles.main_container}>
      <ScreenTitle title="Bons Plans"/>
      <ScrollView style={styles.view}>
        <PubItem index={15}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles  = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: Colors.background
  }
})

export default SponsorScreen;

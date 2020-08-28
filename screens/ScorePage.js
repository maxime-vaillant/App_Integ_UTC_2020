import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, ImageBackground, SafeAreaView, View, Text, RefreshControl, ActivityIndicator, Image } from 'react-native';
import { Button } from 'react-native-elements';

import ScreenTitle from '../components/ScreenTitle';
import ScoreBar from '../components/ScoreBar';
import UnlockedScore from '../components/UnlockedScore';
import LockedScore from '../components/LockedScore';
import { imageIndex } from '../assets/imageIndex';
import Colors from '../assets/Colors';

function ScoreScreen() {

  const [fetched, setFetched] = useState(false);
  const [score, setScore] = useState({Tampi: '0', Youa: '0', Kb: '0', Vb: '0', Max: '1', Blk: '1'});

  async function fetchData() {
    setFetched(true);
    const response = await fetch("http://assos.utc.fr/integ/API/Points/");
    response
      .json()
      .then(resp => setScore(resp))
      .catch(error => error);
    setTimeout(() => {
      setFetched(false);
    }, 2000)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return(
    <SafeAreaView style={styles.main_container}>
        <ScreenTitle title="Score"/>
        <ImageBackground style={styles.classic_view} source={imageIndex[11]}>
          <View style={styles.first_view}></View>
          {parseInt(score.Blk) == 1 ? <LockedScore/> : <UnlockedScore tampi={parseInt(score.Tampi)} youa={parseInt(score.Youa)} kb={parseInt(score.Kb)} vb={parseInt(score.Vb)} max={parseInt(score.Max)}/>}
          <View style={styles.third_view}>
            <Button
              buttonStyle={styles.button}
              onPress={fetchData}
              title="Actualiser"
              loading={fetched}
              disabled={fetched}
            />
          </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles  = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
    backgroundColor: Colors.background,
    flex: 1,
  },

  classic_view: {
    flex: 1,
    backgroundColor: 'white',
  },

  first_view: {
    flex: 0.75,
  },

  second_view: {
    flex: 6,
    flexDirection: 'row',
  },

  third_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  score_display: {
    flex: 1,
  },

  button_view: {
    flex: 1,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  button: {
    borderRadius: 20,
    width: 150,
    backgroundColor: Colors.mainColor,
  }

})

export default ScoreScreen;

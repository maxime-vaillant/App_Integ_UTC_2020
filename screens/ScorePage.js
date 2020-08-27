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
  const [score, setScore] = useState({Tampi: '1000', Youa: '500', Kb: '200', Vb: '750', Max: '1000', Blk: '0'});

  async function fetchData() {
    setFetched(true);
    const response = await fetch("https://assos.utc.fr/integ/API/Points/");
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
          <View style={styles.second_view}>
            <ScoreBar scoreEquipe={score.Kb} scoreMax={score.Max} index={21}/>
            <ScoreBar scoreEquipe={score.Tampi} scoreMax={score.Max} index={24}/>
            <ScoreBar scoreEquipe={score.Vb} scoreMax={score.Max} index={27}/>
            <ScoreBar scoreEquipe={score.Youa} scoreMax={score.Max} index={30}/>
          </View>
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
    backgroundColor: 'white',
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

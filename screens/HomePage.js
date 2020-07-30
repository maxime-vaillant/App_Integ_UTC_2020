import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, RefreshControl, FlatList } from 'react-native';
import Constants from 'expo-constants';

import ScreenTitle from '../components/ScreenTitle';
import DayItem from '../components/DayItem';
import DayItemNow from '../components/DayItemNow';
import InformationBoard from '../components/InformationBoard';
import Group from '../components/Group';
import static_data from '../assets/static_data.json';
import Colors from '../assets/Colors';

const dataDays = static_data.Days;

function HomeScreen() {

  const [fetched, setFetched] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  const [info, setInfo] = useState({title: '', details: '', idate: ''});
  const [group, setGroup] = useState(null);

  async function fetchData() {
    setFetched(true);
    const info = await fetch("https://assos.utc.fr/integ/API/Informations/");
    const group = await fetch("https://assos.utc.fr/integ/API/Groupe/");
    info
      .json()
      .then(info => setInfo(info))
      .catch(error => error);
    group
      .json()
      .then(group => setGroup(group))
      .catch(error => error);
    setFetched(false);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return(
    <SafeAreaView style={styles.main_container}>
      <ScreenTitle title="Accueil"/>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={fetched}
          onRefresh={() => fetchData() }
        />
      }>
        <View style={styles.normal_view}><Text style={styles.text}>Informations ></Text></View>
        <InformationBoard infoName={info.title} infoDetails={info.details} infoDate={info.idate}/>
        {year == 2020 && month == 4 && date >= 20 && date <=23
          ?
          <View style={styles.normal_view}>
            <Text style={styles.text}>Planning du jour > </Text>
            <DayItemNow dayName={dataDays[date-20].title} dayDetails={dataDays[date-20].body}/>
            <DayItem dayName={dataDays[date-19].title} dayDetails={dataDays[date-19].body} dayDate={dataDays[date-19].date} />
          </View>
          :
          <View></View>
        }
        {group != null
          ?
          <SafeAreaView>
            <Text style={styles.text}>Groupes > </Text>
            <FlatList
            data={group}
            renderItem={({ item }) => <Group group={item.numero} date={item.heure} lieu={item.lieu}/>}
            keyExtractor={item => item.numero}
            />
          </SafeAreaView>
          :
          <View></View>
        }

      </ScrollView>
    </SafeAreaView>
  )
}

const styles  = StyleSheet.create({
  main_container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: Colors.background
  },

  normal_view: {
    flex: 1
  },

  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default HomeScreen;

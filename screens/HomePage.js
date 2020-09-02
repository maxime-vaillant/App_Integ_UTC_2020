import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, RefreshControl, StatusBar, FlatList, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';

import ScreenTitle from '../components/ScreenTitle';
import DayItem from '../components/DayItem';
import DayItemNow from '../components/DayItemNow';
import InformationBoard from '../components/InformationBoard';
import Group from '../components/Group';
import static_data from '../assets/static_data.json';
import Colors from '../assets/Colors';

import { imageIndex } from "../assets/imageIndex";

const dataDays = static_data.Days;

const width = Dimensions.get('window').width;

function HomeScreen() {

  const [fetched, setFetched] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  const [info, setInfo] = useState({title: '', details: '', idate: ''});
  const [group, setGroup] = useState(null);
  const [defi, setDefi] = useState(null);


  async function fetchData() {
    setFetched(true);
    const info = await fetch("https://assos.utc.fr/integ/API/Informations/");
    const group = await fetch("https://assos.utc.fr/integ/API/Groupe/");
    const defi = await fetch("https://assos.utc.fr/integ/API/Defi/");
    info
      .json()
      .then(info => setInfo(info))
      .catch(error => error);
    group
      .json()
      .then(group => setGroup(group))
      .catch(error => error);
    defi
      .json()
      .then(defi => setDefi(defi))
      .catch(error => error);
    setFetched(false);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return(
    <SafeAreaView style={styles.main_container}>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={fetched}
          onRefresh={() => fetchData() }
        />
      }>
        <InformationBoard infoName={info.title} infoDetails={info.details} infoDate={info.idate}/>
        {defi != null
          ?
          <View style={styles.normal_view}>
          <Text style={styles.text}>Liste des défis</Text>
            <TouchableOpacity style={styles.defi_container} onPress={() => Linking.openURL(defi)}>
              <Text style={styles.title_text}>DEFIS</Text>
            </TouchableOpacity>
          </View>
          :
          <View></View>
        }
        {year == 2020 && month == 8 && date >= 12 && date <= 19
          ?
          <View style={styles.normal_view}>
            <Text style={styles.text}>Planning du jour</Text>
            <DayItemNow dayName={dataDays[date-12].title} dayDetails={dataDays[date-12].body}/>
            <DayItem dayName={dataDays[date-11].title} dayDetails={dataDays[date-11].body} dayDate={dataDays[date-11].date} />
          </View>
          :
          <View></View>
        }
        {group != null
          ?
          <SafeAreaView style={styles.normal_view}>
            <Text style={styles.text}>Groupes</Text>
            <View style={styles.group_view}>
            <View style={styles.normal_view_left}>{group.map(item => item.numero % 4 == 1 ? <Group group={item.numero} date={item.heure} lieu={item.lieu} key={item.numero}/> : <View></View>)}</View>
            <View style={styles.normal_view_left1}>{group.map(item => item.numero % 4 == 2 ? <Group group={item.numero} date={item.heure} lieu={item.lieu} key={item.numero}/> : <View></View>)}</View>
            <View style={styles.normal_view_right1}>{group.map(item => item.numero % 4 == 3 ? <Group group={item.numero} date={item.heure} lieu={item.lieu} key={item.numero}/> : <View></View>)}</View>
            <View style={styles.normal_view_right}>{group.map(item => item.numero % 4 == 0 ? <Group group={item.numero} date={item.heure} lieu={item.lieu} key={item.numero}/> : <View></View>)}</View>
            </View>
          </SafeAreaView>
          :
          <View></View>
        }
        <View style={styles.normal_view}>
          <TouchableOpacity style={styles.logo_container_view} onPress={() => Linking.openURL('https://assos.utc.fr/integ/')}>
            <Image style={styles.logo_view} source={imageIndex[36]}/>
          </TouchableOpacity>
          <Text style={styles.logo_text}>Integration 2020</Text>
          <View style={styles.image_container_view}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/integutc/')}>
              <Image style={styles.image_view} source={imageIndex[33]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/integrationutc/')}>
              <Image style={styles.image_view} source={imageIndex[34]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://discord.gg/ZEW97tP')}>
              <Image style={styles.image_view} source={imageIndex[37]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCQ7TDl2-jBgVoJlM0YPwNyA')}>
              <Image style={styles.image_view} source={imageIndex[35]}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles  = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: Colors.mainColor
  },

  normal_view_left: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },

  normal_view_right: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },

  normal_view_left1: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },

  normal_view_right1: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },

  normal_view: {
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 10
  },

  group_view: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },

  text: {
    margin: 10,
    marginTop: 15,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.fontColor,
  },

  body_container:{
    flexDirection: 'column',
    paddingTop: 10,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Colors.collapseColor,
    borderRadius: 3,
  },

  body_text:{
    fontSize: 15,
    flex: 1,
    color: "white",
    textAlign: 'justify',
    fontWeight: 'bold',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },

  image_view: {
    width: width/4 - 20,
    height: (width/4 - 20),
    resizeMode: 'contain',
  },

  logo_view: {
    width: width - 20,
    height: (width - 20),
    resizeMode: 'contain',
  },

  image_container_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },

  logo_container_view: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 20
  },

  logo_text: {
    margin: 10,
    marginTop: 15,
    marginLeft: 20,
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.fontColor,
    paddingBottom: 20,
  },

  defi_container: {
    height: 50,
    flexDirection: 'row',
    marginTop : 5,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    backgroundColor: Colors.secondColor,
    alignItems: 'center',
    borderRadius: 3
  },

  title_text: {
    fontFamily: Colors.fontFamily,
    fontWeight: 'bold',
    color: "white",
    fontSize: 20,
    flex: 1,
    paddingRight: 5,
    marginLeft: 5
  }
});

export default HomeScreen;

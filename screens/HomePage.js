import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, RefreshControl, StatusBar, FlatList } from 'react-native';
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
  const [info, setInfo] = useState({title: 'LE SITE', details: 'EST', idate: 'DOWN'});
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
      <StatusBar translucent='true' barStyle='light-content' hidden='false'/>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={fetched}
          onRefresh={() => fetchData() }
        />
      }>
        <InformationBoard infoName={info.title} infoDetails={info.details} infoDate={info.idate}/>
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
            <View style={styles.normal_view_left}>{group.map(item => item.numero % 2 == 1 ? <Group group={item.numero} date={item.heure} lieu={item.lieu} key={item.numero}/> : <View></View>)}</View>
            <View style={styles.normal_view_right}>{group.map(item => item.numero % 2 == 0 ? <Group group={item.numero} date={item.heure} lieu={item.lieu} key={item.numero}/> : <View></View>)}</View>
            </View>
          </SafeAreaView>
          :
          <View></View>
        }
        <View style={styles.normal_view}>
          <Text style={styles.text}>Informations sur l'application</Text>
          <View style={styles.body_container}>
            <Text style={styles.body_text}>Toutes les informations nécessaires aux journées seront présentes sur cette page.</Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.body_text}>Le lieu et la date de rendez-vous pour les groupes seront sur cette page. </Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.body_text}>Tu peux retrouver le planning de l'intégration en présentielle dans la section "Journées". Clique sur la journée dont tu veux connaitre les détails.</Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.body_text}>Viens consulter les scores pour savoir si ton clan est en tête dans la section "Score" !</Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.body_text}>En cas d'URGENCE, tu peux contacter un membre du BDI dans la section "Contacts" en cliquant sur le téléphone vert.</Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.body_text}>Retrouve les bons plans proposés par nos partenaires dans la section "Bons Plans". Clique dessus pour être redirigé sur leur site.</Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.body_text}>L'ensemble du BDI te souhaite une bonne intégration !</Text>
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
    paddingRight: 5,
    alignItems: "center",
    marginLeft: 20,
  },

  normal_view_right: {
    flex: 1,
    paddingLeft: 5,
    alignItems: "center",
    marginRight: 20,
  },

  normal_view: {
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 10
  },

  group_view: {
    flexDirection: "row",
    flex: 1
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
});

export default HomeScreen;

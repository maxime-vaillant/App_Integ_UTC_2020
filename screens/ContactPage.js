import React from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';

import ScreenTitle from '../components/ScreenTitle';
import static_data from '../assets/static_data.json';
import ContactBlock from '../components/ContactBlock';
import Colors from '../assets/Colors';

const dataContact = static_data.Contacts;

function ContactScreen() {
  return(
    <SafeAreaView style={styles.main_container}>
      <ScreenTitle title="Contacts"/>
      <FlatList
        data={dataContact}
        renderItem={({item}) => <ContactBlock contacts={item}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles  = StyleSheet.create({
  main_container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: Colors.background
  }
});

export default ContactScreen;

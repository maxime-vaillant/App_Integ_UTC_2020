import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

import DayItem from '../components/DayItem';
import ScreenTitle from '../components/ScreenTitle';
import static_data from '../assets/static_data.json';
import Colors from '../assets/Colors';

const dataDays = static_data.Days;

export default function PlanningScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle title="Planning"/>
      <FlatList
        data={dataDays}
        renderItem={({ item }) => <DayItem dayName={item.title} dayDetails={item.body} dayDate={item.date}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.background
  }
});

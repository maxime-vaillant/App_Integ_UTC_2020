import React from 'react';
import { StyleSheet, Linking, View, Text, Image, TouchableOpacity } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { imageIndex } from "../assets/imageIndex";
import Colors from '../assets/Colors';

const ContactBlock = ({contacts}) => {
  return(
    <View style={styles.container}>
      <View>
      <Image style={styles.avatar} source={imageIndex[contacts.photo]}/>
      </View>
      <View style={styles.text_container}>
        <View>
          <Text style={styles.nom_text}>{contacts.nom}</Text>
        </View>
        <View>
          <Text style={styles.poste_text}>{contacts.poste}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.call_view} onPress={() => Linking.openURL(`tel:${contacts.tel}`)}>
        <Icon name="ios-call" size={25} color="white" style={{ marginTop: 12.5}}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: Colors.collapseColor,
    alignItems: 'center',
    alignContent: 'space-between',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  text_container: {
    flex: 1,
    flexDirection: 'column',
    color: "white",
    marginLeft: 10
  },

  nom_text: {
    fontFamily: Colors.fontFamily,
    fontWeight: 'bold',
    color: "white",
    fontSize: 20
  },

  poste_text: {
    color: "white",
    fontSize: 15
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },

  call_view: {
    height: 50,
    width: 50,
    backgroundColor: "#1CB724",
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 5,
  },

  classic_view: {
    flex:1
  }
})

export default ContactBlock;

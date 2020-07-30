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
        <Icon name="ios-call" size={25} color="white" style={{ marginTop: 7.5}}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 65,
    alignItems: 'center',
    alignContent: 'space-between'
  },

  text_container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10
  },

  nom_text: {
    fontFamily: Colors.fontFamily,
    fontWeight: 'bold',
    fontSize: 25
  },

  poste_text: {
    fontSize: 20
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: "white",
  },

  call_view: {
    height: 40,
    width: 40,
    backgroundColor: "#58D68D",
    alignItems: 'center',
    borderRadius: 40,
    marginRight: 15,
  },

  classic_view: {
    flex:1
  }
})

export default ContactBlock;

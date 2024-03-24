import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconbar from 'react-native-vector-icons/Feather';
import { Card, Paragraph, Title } from 'react-native-paper';

export default function App() {

  const back = <Icon name="reply" size={30} color="Black" style={styles.iconbar} />;
  const dropdown = <Icon name="angle-down" backgroundColor="transparent" size={40} style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }} />
  const handleIconPress = () => {
    Alert.alert(
      "Title",
      "This is the message",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.menubar}>

      <Icon.Button name="reply" color="black" backgroundColor="white" size={40} onPress={handleIconPress} ></Icon.Button>
      <Icon.Button name="plus" color="black" backgroundColor="white" size={40} onPress={handleIconPress} ></Icon.Button>

      <View style={styles.Monthbar}>
      <Text style={styles.monthfont}>January</Text>
       <Text style={styles.yearfont}>2024</Text>
      </View>
      <TouchableOpacity style={styles.iconstyle} onPress={handleIconPress}>
        <Title style={styles.textinic}>Week</Title>
        {dropdown}
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconstyle} onPress={handleIconPress}>
        <Title style={styles.textinic}>Jan</Title>
        {dropdown}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menubar: {
    marginTop: 10,
    borderRadius: 0,
    width: 1050,
    height: 75,
    alignItems: 'center',
    justifyContent: 'right',
    flexDirection: 'row',
    backgroundColor: 'transparent'
    // transparent

  },
  iconbar: {
    margin: 10,
  },
  daystand: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: 'white',
    //red
    // transparent
  },
  iconstyle: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    borderRadius: 15,
    borderColor: '#b0b0b0',
    borderWidth: 2,
  },
  textinic: {
    alignItems: 'center',
    marginLeft: 15
  },
  Monthbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 75,
    backgroundColor: 'transparent',
  },
  buttonicon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 5,
    flex: 1,
    width: 200,
    height: 75,
  },
  onlyplusicon: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: '#b0b0b0',
    borderWidth: 2,
  },
  monthfont: {
    fontSize: 32.5,
    marginLeft:50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
  },
  yearfont: {
    fontSize: 20.5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
   marginBottom:20, 
  }
});

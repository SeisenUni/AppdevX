import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconbar from 'react-native-vector-icons/Feather';
import { Card, Paragraph, Title } from 'react-native-paper';
import { renderMonth, choose, renderweek } from './keytime';
import MonthComponent from './Month.js'; // Import month.js component
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation =useNavigation();

  const back=()=>
  {
    navigation.navigate("Year")
  }
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { value: '1', label: 'Week1' },
    { value: '2', label: 'Week2' },
    { value: '3', label: 'Week3' },
    { value: '4', label: 'Week4' },
    { value: '5', label: 'Week5' },
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { value: '1', label: 'Week1' },
    { value: '2', label: 'Week2' },
    { value: '3', label: 'Week3' },
    { value: '4', label: 'Week4' },
    { value: '5', label: 'Week5' },
    { value: '6', label: 'Week6' },
  ]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'Auguest' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ]);

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
  const getweek = () => {
    if (renderweek(value) === '0') {
      return (
        <Card style={styles.iconstyle}>
          <DropDownPicker
            open={open1}
            value={value1}
            items={items1}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
            style={styles.boxdrop}
            placeholder='Week'
            placeholderStyle={styles.yearst}
            dropDownContainerStyle={[styles.dropdownchoose, open && { color: 'red' }]}
            onSelectItem={handleIconPress}
            textStyle={styles.yearst}
          />
        </Card>
      );
    }
    else if (renderweek(value) === '99') {
      return (
        <Card style={styles.iconstyle}>
          <DropDownPicker
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
            style={styles.boxdrop}
            placeholder='Week'
            placeholderStyle={styles.yearst}
            dropDownContainerStyle={[styles.dropdownchoose, open && { color: 'red' }]}
            onSelectItem={handleIconPress}
            textStyle={styles.yearst}
          />
        </Card>
      );
    }
  };
  return (
    <View style={{ flexDirection: 'column', backgroundColor:'white',flex:1}}>
      <View style={styles.menubar}>
        <Icon.Button name="reply" color="black" backgroundColor="white" size={40} onPress={back}></Icon.Button>
        <Icon.Button name="plus" color="black" backgroundColor="white" size={40} onPress={handleIconPress}></Icon.Button>
        <View style={styles.Monthbar}>
          <Text style={styles.monthfont}>{renderMonth()}</Text>
          <Text style={styles.yearfont}>2024</Text>
        </View>
        {getweek()}
        <Card style={styles.iconstyle}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.boxdrop}
            placeholder='Month'
            placeholderStyle={styles.yearst}
            dropDownContainerStyle={[styles.dropdownchoose, open && { color: 'red' }]}
            onSelectItem={(item) => choose(item.value)}
            textStyle={styles.yearst}
          />
        </Card>
      </View>
      <MonthComponent />
    </View>




  );

}

const styles = StyleSheet.create({
  menubar: {
    marginTop: 10,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'right',
    flexDirection: 'row',
    backgroundColor: 'white',
    zIndex: 200000,
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
    borderColor: 'transparent',
    borderWidth: 2,
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
  monthfont: {
    fontSize: 32.5,
    marginLeft: 50,
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
    marginBottom: 20,
  },
  boxdrop: { // Use containerStyle instead of style
    height: 50,
    marginRight:10,
    width: 150,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  yearst: {
    fontSize: 20.5,
    textAlign: 'center',
  },
  dropdownchoose: {
    marginRight:10,
    height: 300,
    width: 150,
    borderColor: 'gray',
    color: 'red',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  }
});

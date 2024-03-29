import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView,FlatList, Text, TouchableOpacity, Alert,ImageBackground  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import { Card, Paragraph, Title } from 'react-native-paper';
import { target } from './keytime';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const navigation =useNavigation();

    const findfile =(item)=>
    {
      switch(item)
      {
        case '1': return require('../month/1/jan.png');
            case '2': return require('../month/2/feb.png');
            case '3': return require('../month/3/mar.png');
            case '4': return require('../month/4/apr.png');
            case '5': return require('../month/5/may.png');
            case '6': return require('../month/6/jun.png');
            case '7': return require('../month/7/jul.png');
            case '8': return require('../month/8/aug.png');
            case '9': return require('../month/9/sep.png');
            case '10': return require('../month/10/oct.png');
            case '11': return require('../month/11/nov.png');
            case '12': return require('../month/12/dec.png');
            default: return require('../month/1/jan.png');
      }
    }
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { value: '1', label: '2025' },
   
  ]);

  const handleIconPress = () => {
    Alert.alert(
      "Not available now",
      "This function is coming soon",
      [
        { text: "Cancel", 
          onPress: () => setValue(null) 
        },
        {
          text: "OK",
          onPress: () => setValue(null),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };
  const getaccess =(value)=>
  {
    target(value);
    navigation.navigate("Bar")

  }
 const data =[];
 for (let i = 1; i <= 12; i++) {
    data.push({ key: i, month: `${i}` });
}
const printmonth = ({ item }) => {
    return (
        <TouchableOpacity onPress={() =>getaccess(item.month)}>
            <Card style={styles.Toch}>
              <ImageBackground
              source={findfile(item.month)}
              style={styles.png}
              ></ImageBackground>
                {/* <Title>{renderMonth(item.month)}</Title> */}
            </Card>
        </TouchableOpacity>
    );
};
 
  return (
    <View style = {{ flexDirection: 'column',zIndex:30000,backgroundColor:'white',}}>
      <View style={styles.bar}>
      <Icon.Button name="reply" color="black" backgroundColor="white" size={40} onPress={handleIconPress}></Icon.Button>
      <Icon.Button name="plus" color="black" backgroundColor="white" size={40} onPress={handleIconPress}></Icon.Button>
      <View style={styles.yearbar}>
        <Text style={styles.Calendar}>Yearly Calendar</Text>
        <Text style={styles.yearfont}>2024</Text>
      </View>
      <Card style={styles.iconstyle}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.boxdrop}
          placeholder='2024'
          placeholderStyle={styles.yearst}
          dropDownContainerStyle={[styles.dropdownchoose, open && { color: 'red' }]}
          onSelectItem={handleIconPress}
          textStyle={styles.yearst}
        />
        
      </Card>
      <Icons.Button name="setting" color="black" backgroundColor="white" size={40} onPress={handleIconPress}></Icons.Button>

         </View>
         <View style={{backgroundColor:'white' ,alignItems: 'center',justifyContent: 'center',}}>
         <FlatList
            data={data}
            renderItem={(item) => printmonth(item)}
            numColumns={4}
            contentContainerStyle={styles.flatListContent}
         />
         </View>

    </View>
  );

}

const styles = StyleSheet.create({
  bar: {

    marginTop: 10,
    borderRadius: 0,
  
    alignItems: 'center',
    justifyContent: 'right',
    flexDirection: 'row',
    backgroundColor: 'white',
    zIndex: 20000,
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
  yearbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 75,
    backgroundColor: 'transparent',
  },
  Calendar: {
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
    marginRight:10,
    height: 50,
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
  dropdownchoose:{
    height: 40,
    width: 150,
    borderColor: 'gray',
    color:'red',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  // Only in Card component
  Toch:{
    width:250,
    height:220,
    zIndex :1,
   margin:10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius:10,
    borderWidth:1,
    borderColor:'black',
  },
  png:{
    width:250,
    height:220,
    zIndex :1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 235, 
    height: 200, 
  },

});

import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView,FlatList, Text, TouchableOpacity, Alert,ImageBackground,Modal,Button,TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import { Card, Paragraph, Title } from 'react-native-paper';
import { target,week} from './keytime';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const navigation =useNavigation();
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  const [plus,setPlus]=useState(false);
  const [title,setTiltle]=useState("");
  const [start,setStart]=useState("");
  const [end,setEnd]=useState("");
  const [startT,setStartT]=useState("");
  const [endT,setEndT]=useState("");

  const changemail =()=>
  {
    navigation.navigate("Changemail");
    setShow(false);
  }
  const reset_pass =()=>
  {
    navigation.navigate("ResetPass");
    setShow(false);
  }
  const adding =()=>
  {
    navigation.navigate("Adding");
  }
  const getaccess =(value)=>
  {
    week(value);
    target(value);
    navigation.navigate("Bar")

  }
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
    // Alert.alert(
    //   "Not available now",
    //   "This function is coming soon",
    //   [
    //     { text: "Cancel", 
    //       onPress: () => setValue(null) 
    //     },
    //     {
    //       text: "OK",
    //       onPress: () => setValue(null),
    //       style: "cancel"
    //     }
    //   ],
    //   { cancelable: false }
    // );
    navigation.navigate("Login")
  };
 
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
      <Icon.Button name="plus" color="black" backgroundColor="white" size={40} onPress={()=>setPlus(true)}></Icon.Button>
          <Modal
              transparent={true}
              visible={plus}
              onRequestClose={()=>{
                setPlus(!plus)
              }}
            >
                <View style={styles.test2}>
                    <View style={styles.test4}>

                      <Card style={styles.cardContainer}>
                          <Title style={styles.title}>{"\n"}Create Your Planner</Title>
                          <Card style={styles.cardContainerin1}>
                            <Card style={styles.butsetting}>
                              <TextInput style={styles.input}
                                onChangeText={setTiltle}
                                value={title}
                                placeholder="Title: "
                                placeholderTextColor={'black'}/>
                            </Card>

                            <Card style={styles.butsetting}>
                              <TextInput style={styles.input1}
                                  onChangeText={setStart}
                                  value={start}
                                  placeholder="Start:  dd/mm/yyyy"
                                  placeholderTextColor={'black'}/>
                              <TextInput style={styles.input2}
                              onChangeText={setEnd}
                              value={end}
                              placeholder="End:  dd/mm/yyyy"
                              placeholderTextColor={'black'}/>
                              
                            </Card>

                            <Card style={styles.butsetting}>
                              <TextInput style={styles.input1}
                                  onChangeText={setStartT}
                                  value={startT}
                                  placeholder="Start:  hh:mm"
                                  placeholderTextColor={'black'}/>
                              <TextInput style={styles.input2}
                              onChangeText={setEndT}
                              value={endT}
                              placeholder="End:  hh:mm"
                              placeholderTextColor={'black'}/>
                              
                            </Card>

                          </Card>
                        </Card>
                        <Card style={styles.butright}>
                          <Button title='Save' />
                        </Card>
                        <Card style={styles.butleft}>
                          <Button title='exit' onPress={()=> setPlus(!plus)}/>
                        </Card>
                    </View>
                </View>
            </Modal>

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
      <Icons.Button name="setting" color="black" backgroundColor="white" size={40} onPress={()=> setShow(true)}> </Icons.Button>
            <Modal
              transparent={true}
              visible={show}
              onRequestClose={()=>{
                setShow(!show)
              }}
            >
                <View style={styles.test2}>
                    <View style={styles.test3}>

                      <Card style={styles.cardContainer}>
                          <Title style={styles.title}>{"\n"}Setting</Title>
                          <Card style={styles.cardContainerin1}>

                            <Card style={styles.butsetting}>
                              <Button title='Change Email' onPress={changemail}/>
                            </Card>

                            <Card style={styles.butsetting}>
                              <Button title='Reset Password' onPress={reset_pass}/>
                            </Card>

                            <Card style={styles.butsetting}>
                              <Button title='Theme' onPress={()=> setShow1(true)}/>
                              <Modal
                                transparent={true}
                                visible={show1}
                                onRequestClose={()=>{
                                  setShow1(!show1)
                                }}>

                                <View style={styles.test3}>
                                  <Card style={styles.cardContainer}>
                                  <Title style={styles.title}>{"\n"}Theme</Title>
                                      <Card style={styles.cardContainerin1}>

                                        <Card style={styles.butsetting}>
                                          <Button title='Light'/>
                                        </Card>

                                        <Card style={styles.butsetting}>
                                          <Button title='Dark'/>
                                        </Card>

                                      </Card>
                                  </Card>
                                  <Card style={styles.butleft}>
                                    <Button title='exit' onPress={()=> setShow1(!show1)}/>
                                </Card>
                              </View>
                            
                            </Modal>
                            </Card>

                          </Card>

                        </Card>

                        <Card style={styles.butright}>
                          <Button title='exit' onPress={()=> setShow(!show)}/>
                        </Card>
                    </View>
                </View>
            </Modal>
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

  test2:{
    backgroundColor:"#000000aa",
    flex:1,
  },
  test3:{
    backgroundColor:"white",
    margin:350,
    marginTop:200,
    padding:40,
    borderRadius:10,
    height:500,
    width:500,
  },
  test4:{
    backgroundColor:"white",
    margin:350,
    marginTop:100,
    padding:40,
    borderRadius:10,
    height:500,
    width:500,
  },
  butright:{
    backgroundColor:"white",
    marginLeft:390,
    marginTop:-70,
    height:40,
    width:60,
    borderRadius:5
  },
  butleft:{
    backgroundColor:"white",
    marginLeft:-30,
    marginTop:-40,
    height:40,
    width:60,
    borderRadius:5
  },
  title:{
    fontSize:40,
    // backgroundColor:'pink',
    width:490,
    height:60,
    textAlign:'center',
    color:"white",
    // flexDirection:'row'
  },
  cardContainer: {
    flexDirection: 'row',
    height:80,
    width:500,
    marginLeft:-40,
    marginTop:-42,
    backgroundColor:'gray',
    borderRadius:5
  },
  cardContainerin1: {
    flexDirection: 'row',
    height:450,
    width:500,
    marginTop:10,
    backgroundColor:'pink',
    borderRadius:5,
  },
  butsetting:{
    backgroundColor:"white",
    marginLeft:40,
    height:50,
    width:420,
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
    marginTop:10
  },
  input: {
    height: 50,
    // marginLeft: 70,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
    width:420,
    borderColor:'gray'
  },
  input1: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
    width:210,
    marginEnd:210,
    borderColor:'gray'
  },
  input2: {
    height: 50,
    marginLeft: 70,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
    width:210,
    marginStart:210,
    marginTop:-50,
    borderColor:'gray'
  },

});

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Alert,Modal,Button ,TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import { Card, Paragraph, Title } from 'react-native-paper';
import { renderMonth, choose, renderweek,week,gotmonth } from './keytime';
import MonthComponent from './Month.js'; // Import month.js component
import { useNavigation } from '@react-navigation/native';

export default function App() {
console.log(gotmonth());
  const navigation =useNavigation();
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  const [plus,setPlus]=useState(false);
  const [title,setTiltle]=useState("");
  const [start,setStart]=useState("");
  const [end,setEnd]=useState("");
  const [startT,setStartT]=useState("");
  const [endT,setEndT]=useState("");
  const back=()=>
  {
    navigation.navigate("Year");
  }
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
 
  const touring =(value)=>
  {
    choose(value);
  }
  const gotoweek =()=>
  {
     navigation.navigate("Week");
  }
  
  // const handleIconPress = () => {
  //   Alert.alert(
  //     "Title",
  //     "This is the message",
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel"
  //       },
  //       { text: "OK", onPress: () => console.log("OK Pressed") }
  //     ],
  //     { cancelable: false }
  //   );
  // };
  
  return (
    <View style={{ flexDirection: 'column', backgroundColor:'white',flex:1}}>
      <View style={styles.menubar}>
        <Icon.Button name="reply" color="black" backgroundColor="white" size={40} onPress={back}></Icon.Button>
        <Icon.Button name="plus" color="black" backgroundColor="white" size={40} onPress={() => setPlus(true)}></Icon.Button>
        <Modal
              transparent={true}
              visible={plus}
              onRequestClose={()=>{
                setPlus(!plus)
              }}
            >
                <View style={styles.test2}>
                <View style={styles.center}>

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
                </View>
            </Modal>
        <View style={styles.Monthbar}>
          <Text style={styles.monthfont}>{renderMonth()}</Text>
          <Text style={styles.yearfont}>2024</Text>
        </View>
        <TouchableOpacity onPress={gotoweek}>
          <Card style={styles.boxdrop}>
            <Title style={styles.yearst}>Week</Title>
          </Card>
        </TouchableOpacity>
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
            onSelectItem={(item) => touring(item.value)}
            textStyle={styles.yearst}
          />
        </Card>
        <Icons.Button name="setting" color="black" backgroundColor="white" size={40} onPress={()=> setShow(true)}></Icons.Button>
          <Modal
                transparent={true}
                visible={show}
                onRequestClose={()=>{
                  setShow(!show)
                }}
              >
                  <View style={styles.test2}>
                    <View style={styles.center}>

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
                                <View style={styles.center}>

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
                                    <Card style={styles.butright}>
                                      <Button title='exit' onPress={()=> setShow1(!show1)}/>
                                  </Card>
                                </View>
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
                  </View>
              </Modal>

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
    width: 150,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
});

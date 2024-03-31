import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity, Text, ImageBackground,Modal,Button,TextInput } from 'react-native';
import { Card,Title } from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import { renderweek, week, getmonth, getweek,gotmonth,renderMonth,limitold,stoldd,maxmonth, choose} from './keytime';
import { useNavigation } from '@react-navigation/native';
import { target } from './keytime';
import Iconss from 'react-native-vector-icons/Entypo';
import axios from 'axios';

export default function App() {
    //console.log(getweek())
    console.log(gotmonth());
    const navigation = useNavigation();
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
    const genday = (item) => 
    {
        //choose(item);
        //console.log("this is for =");
        //console.log(item);
        week(item);
       // target(item);
    }
    const gotoyear = () => {
        navigation.navigate("Year");
    }
    
    const setting = () => {
        navigation.navigate("Setto");
    }
    const renderw = () => {
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

        if (gotmonth() == 6 || gotmonth() == 3) {
            return (
                <Card style={styles.dropdownunder}>
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
                    onSelectItem={(item) => genday(item.value)}
                    textStyle={styles.yearst}
                />
            </Card>
            );
        }
        else {
            return (
                <Card style={styles.dropdownunder}>
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
                    onSelectItem={(item) => genday(item.value)}
                    textStyle={styles.yearst}
                />
            </Card>
            );
        }
    }

    const data = [];
    for (let i = 1; i <= 7; i++) {
        data.push({ key: i, title: `${i}` });
    }
    let count=0;
    const createday = ({ item }) => {
        if (getweek() == 1) {
            if(limitold() >= item.title)
            {
                let newnum = Number(stoldd())+count;
                count++;
                return (
                    <Card style={styles.selected}>
                        <Text style={{ color: 'white', margin: 10, fontSize: 20 }}>{newnum}</Text>
                    </Card>
                );
            }
            else
            {
                return (
                    <Card style={styles.createday}>
                        <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{item.title-count}</Text>
                    </Card>
                );
            }
        }
        else if (getweek() == 2) {
            let newnum = Number(stoldd()) + item.key - count;
             return (
                    <Card style={styles.createday}>
                        <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                    </Card>
                );

        }
        else if (getweek() == 3) {
            let newnum = Number(stoldd()) + item.key - count;
             return (
                    <Card style={styles.createday}>
                        <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                    </Card>
                );

        }
        else if (getweek() == 4) 
        {
            let newnum = Number(stoldd()) + item.key - count;
             return (
                    <Card style={styles.createday}>
                        <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                    </Card>
                );

        }
        else if (getweek() == 5) 
        {
                let newnum = Number(stoldd()) + item.key;
                if(newnum <= 31 && maxmonth() == 1)
                {
                    return (
                        <Card style={styles.createday}>
                            <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                        </Card>
                    );
    
                }
                else  if(newnum <= 30 && maxmonth() == 0)
                {
                    return (
                        <Card style={styles.createday}>
                            <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                        </Card>
                    );
    
                }
                else if(newnum <= 29 && maxmonth() == 2)
                {
                    return (
                        <Card style={styles.createday}>
                            <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                        </Card>
                    );
    
                }
        }
        else if (getweek() == 6) 
        {
                let newnum = Number(stoldd()) + item.key;
                if(newnum <= 31 && maxmonth() == 1)
                {
                    return (
                        <Card style={styles.createday}>
                            <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                        </Card>
                    );
    
                }
                else  if(newnum <= 30 && maxmonth() == 0)
                {
                    return (
                        <Card style={styles.createday}>
                            <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                        </Card>
                    );
    
                }
                else if(newnum <= 29 && maxmonth() == 2)
                {
                    return (
                        <Card style={styles.createday}>
                            <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{newnum}</Text>
                        </Card>
                    );
    
                }
        }
        else
        {
             if(limitold() >= item.title)
            {
                let newnum = stoldd();
                count++;
                return (
                    <Card style={styles.selected}>
                        <Text style={{ color: 'white', margin: 10, fontSize: 20 }}>{newnum}</Text>
                    </Card>
                );
            }
            else
            {
                return (
                    <Card style={styles.createday}>
                        <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{item.title-count}</Text>
                    </Card>
                );
            }
        }


    }

    const [priority, setPriority] = useState(null);
  const [openpiority, setOpenpiority] = useState(false);
  const [piority1, setPiority1] = useState([
    { value: '1', label: 'Do' ,},
    { value: '2', label: 'Decide' ,},
    { value: '3', label: 'Delegate' ,},
    { value: '4', label: 'Dump' ,},
  ]);
  
  const onClicksave=()=>{
    console.log("Save !!")
    console.log(priority)
    const data={
        title:title,
        priority:priority,
        start:start,
        end:end,
        startT:startT,
        endT:endT
    }
    axios.post("http://10.64.43.110:5000/add_task",data)
    .then(response=>{
      console.log(response.data)
      // navigation.navigate("Year")
      setPlus(!plus)
      setTiltle("")
      setStart("")
      setEnd("")
      setStartT("")
      setEndT("") 
      setPriority(null)
    })
    .catch(error=>{
      console.log(error.response)
     
    })
  }

    return (
        <SafeAreaView style={styles.container}>
            <Card style={styles.monthandbutton}>

                <Text style={styles.monthtext}>
                    {renderMonth()}</Text>
                <Text style={styles.yeartext}>
                    2024</Text>
                <Card style={styles.forbuttombox}>
                    <TouchableOpacity style={styles.butoom} onPress={()=> setShow(true)}>
                        <Icons name="setting" color="black" backgroundColor="transparent" size={40} />
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
                                                        <Iconss.Button name='cross'  backgroundColor="transparent" size={40} onPress={()=> setShow1(!show1)}/>
                                                    </Card>
                                                    </View>
                                                </View>
                                            
                                            </Modal>
                                            </Card>

                                            </Card>

                                        </Card>

                                        <Card style={styles.butright}>
                                        <Iconss.Button name='cross'  backgroundColor="transparent" size={40} onPress={()=> setShow(!show)}/>
                                        </Card>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.forbuttombox2}>
                    <TouchableOpacity style={styles.butoom} onPress={()=>setPlus(true)}>
                        <Icons name="plus" size={40} color="black" />
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

                                        <View style = {{ flexDirection: 'column',zIndex:30000,backgroundColor:'transparent',}}>
                                            <Card style={styles.iconstyle}>
                                                <DropDownPicker
                                                    open={openpiority}
                                                    value={priority}
                                                    items={piority1}
                                                    setOpen={setOpenpiority}
                                                    setValue={setPriority}
                                                    setItems={setPiority1}
                                                    style={styles.boxdroppiority}
                                                    placeholder='Piority'
                                                    placeholderStyle={styles.yearst}
                                                    dropDownContainerStyle={[styles.dropdownchoosepiority, open && { color: 'red' }]}
                                                    // onSelectItem={onClicksave}
                                                    textStyle={styles.yearst}
                                                />
                                            </Card>
                                        </View>

                                        <Card style={styles.butsetting}>
                                        <TextInput style={styles.input1}
                                            onChangeText={setStart}
                                            value={start}
                                            placeholder="Start:  yyyy-mm-dd"
                                            placeholderTextColor={'black'}/>
                                        <TextInput style={styles.input2}
                                        onChangeText={setEnd}
                                        value={end}
                                        placeholder="End:  yyyy-mm-dd"
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
                                    <Iconss.Button name='save' backgroundColor="transparent" size={40} onPress={onClicksave}/>
                                    </Card>
                                    <Card style={styles.butleft}>
                                    <Iconss.Button name='cross'  backgroundColor="transparent" size={40} onPress={()=> setPlus(!plus)}/>
                                    </Card>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                    {renderw(value)}
                </Card>
                <TouchableOpacity onPress={gotoyear} style={{ top: 170 }}>
                    <Card style={styles.Toch}>
                        <ImageBackground
                            source={require('../month/year.png')}
                            style={styles.png}
                        ></ImageBackground>
                    </Card>
                </TouchableOpacity>



            </Card>

            <View style={styles.dayconpo}>
                <FlatList
                    data={data}
                    renderItem={(item) => createday(item)}
                    numColumns={4}
                    contentContainerStyle={styles.flatListContent}
                />

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        flex: 1,
        justifyContent: 'right',
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 8,
    },
    monthandbutton: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        width: 270,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        padding: 8,
    },
    weekgen: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 8,
    },
    monthtext: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        margin: 20,
        // marginTop:-10,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    yeartext: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        marginTop: -20,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    butoom: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        marginBottom: 10,
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
    forbuttombox: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        backgroundColor: 'transparent',
    },
    forbuttombox2: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    dropdownunder: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        zIndex: 1,
    },
    boxdrop: { // Use containerStyle instead of style
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        height: 50,
        width: 150,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

    },
    dropdownchoose: {
        marginRight: 10,
        height: 120,
        width: 150,
        borderColor: 'gray',
        color: 'red',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    yearst: {
        fontSize: 20.5,
        textAlign: 'center',
    },
    flatListContent: {
        alignItems: 'left',
    },
    dayconpo: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'white',
    },
    createday: {
        width: 170,
        height: 360,
        margin: 5,
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
    },
    selected: {
        width: 170,
        height: 360,
        margin: 5,
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'grey',
    },
    Toch: {
        width: 250,
        height: 220,
        zIndex: 1,
        margin: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    png: {
        width: 250,
        height: 220,
        zIndex: 1,
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
      butright:{
        backgroundColor:"transparent",
        marginLeft:390,
        marginTop:-70,
        height:60,
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
      test4:{
        backgroundColor:"white",
        margin:350,
        marginTop:100,
        padding:40,
        borderRadius:10,
        height:500,
        width:500,
      },
      butleft:{
        backgroundColor:"transparent",
        marginLeft:-30,
        marginTop:-60,
        height:50,
        width:60,
        borderRadius:5
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
      dropdownchoosepiority:{
        marginLeft:28,
        height: 200,
        width: 420,
        borderColor: 'gray',
        color:'red',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      boxdroppiority: { 
        marginLeft:28,
        height: 50,
        width: 420,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        alignItems:'center',
        justifyContent:'center',
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
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button,ImageBackground, SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import bg from './login-piccard.png'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
export default function App() {

    const navigation =useNavigation();

    const [check,setCheck]=useState("");
    const [phone_number,setPhoneNumber]=useState('');
    const [forget, setForget] = useState('');


    const onClicklog=()=>{
      console.log("forget")
      
      const data={
          check:check,
          phone_number:phone_number
        }
        axios.post("http://10.64.43.110:5000/forget",data)
        .then(response=>{
            console.log(response.data)
            navigation.navigate("ResetPass")
            setCheck("")
            setPhoneNumber("")
            setForget("")
      })
      .catch(error=>{
        console.log(error.response)
        setForget("Something wrong!!!")
      })
    }

    return(
        <SafeAreaView style={styles.container}>
          <Card style={styles.card1}>

            <ImageBackground source={bg} style={styles.img}>
                    <View style={styles.cardContainer}>
                      <View style={styles.container2}>
              
                      <Card style={styles.card}>
                        <Text style={styles.text}>Forget</Text> 
                          <TextInput 
                          style={styles.input}
                          onChangeText={setCheck}
                          value={check}
                          placeholder="Username or Email"
                          />
                          <View style={styles.input}>

                          <TextInput 
                          onChangeText={setPhoneNumber}
                          value={phone_number}
                          placeholder="Phone Number"
                          />
                         
                          </View>
                          <Text style={styles.wrong}>{forget}</Text>
                         
                        <View style={styles.center}>
                          <Card style={styles.card3}>
                            <Button 
                            title="Reset Password"
                            color="green"
                            onPress={onClicklog}
                            />
                          </Card>
                            <Text> </Text>
                            <Text style={styles.text}> {"\n"}Planner</Text>
                            </View>
                      </Card>
                      </View>
                    </View>
            </ImageBackground>
          </Card>

              {/* </View> */}
           
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'no',
      padding: 60,
      // borderWidth:1
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'no',
      padding: 60,
      // borderWidth:1
    },
    cardContainer: {
      flexDirection: 'row',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:5
    },
    card: {
      margin: 10,
      width:300,
      height:400,
      padding: 10,
      borderRadius: 20,
      backgroundColor:"white"
    },
    card1: {
      margin: 10,
      width:900,
      height:544,
      padding: 1,
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor:"white",
      borderColor:'#b0b0b0'
    },
    cardContainer: {
      flexDirection: 'row',
    },
    text:{
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      color:'blue',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: { 
      marginLeft: 200, 
      marginTop:-20
    },
    card2:{
      margin:20,
      backgroundColor:'white',
      width:80,
      height:40
    },
    card3:{
      margin:0,
      backgroundColor:'white',
    },
    img:{
      borderRadius:5
    },
    wrong:{
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      color:'red',
      paddingLeft:12
    }
  });
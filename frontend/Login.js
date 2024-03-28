import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button,ImageBackground, SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import bg from './login-piccard.png'
import axios from 'axios';
export default function App() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
    };

    const onClicklog=()=>{
      console.log("login")
      const data={
          username:username,
          password:password
      }
      axios.get("http://10.64.43.110:5000/login",data)
      .then(response=>{
        console.log(response.data)
        setUsername("")
        setPassword("")
      })
      .catch(error=>{
        console.log(error.response)
      })
    }

    return(
        <SafeAreaView style={styles.container}>
            {/* <Text>Teest login</Text> */}

              {/* <View style={styles.cardContainer}> */}

          <Card style={styles.card1}>

            <ImageBackground source={bg} style={styles.img}>
                    <View style={styles.cardContainer}>
                      <View style={styles.container2}>

                      <Card style={styles.card}>
                        <Text style={styles.text}>Login</Text> 
                          <TextInput 
                          style={styles.input}
                          onChangeText={setUsername}
                          value={username}
                          placeholder="Username or Email"
                          />
                          <View style={styles.input}>

                          <TextInput 
                          // style={styles.input}
                          onChangeText={setPassword}
                          value={password}
                          placeholder="Password"
                          secureTextEntry={!showPassword}
                          />
                          <MaterialCommunityIcons 
                          name={showPassword ? 'eye-off' : 'eye'} 
                          size={24} 
                          color="#aaa"
                          style={styles.icon} 
                          onPress={toggleShowPassword} 
                          /> 
                          </View>
                         
                        <View style={styles.center}>
                          <Card style={styles.card2}>
                            <Button 
                            title="Login"
                            color="green"
                            onPress={onClicklog}
                            />
                          </Card>
                          <Card style={styles.card3}>
                            <Button 
                            title="Create account"
                            color="green"
                            // onPress={}
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
    }
  });
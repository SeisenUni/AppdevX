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

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [login, setLogin] = useState("");
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
      axios.post("http://192.168.185.166:5000/login",data)
      .then(response=>{
        navigation.navigate("Year")
        console.log(response.data)
        setUsername("")
        setPassword("")
        setLogin("")
      })
      .catch(error=>{
        console.log(error.response)
        setLogin("Something wrong!!!")
      })
    }

    return(
        <SafeAreaView style={styles.container}>
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
                          placeholder="Username"
                          />
                          <View style={styles.input}>

                          <TextInput 
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
                          <Text style={styles.wrong}>{login}</Text>
                         
                        <View style={styles.center}>
                          <Card style={styles.card2}>
                            <Button 
                            title="Login"
                            color="#545454"
                            onPress={onClicklog}
                            />
                          </Card>
                          <Card style={styles.card3}>
                            <Button 
                            title="Create account"
                            color="#545454"
                            onPress={() =>navigation.navigate("Regis")}
                            />
                          </Card>
                          <Card style={styles.card4}>
                            <Button 
                            title="Forget Password"
                            color="#545454"
                            onPress={() =>navigation.navigate("Forget")}
                            />
                          </Card>
                            
                            </View>
                      </Card>
                      </View>
                    </View>
            </ImageBackground>
          </Card>

           
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
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'no',
      padding: 60,
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
      backgroundColor:"#b4b4b4",
      borderColor:'#b0b0b0'
    },
    cardContainer: {
      flexDirection: 'row',
    },
    text:{
      fontSize: 30,
      color:'black',
      margin:10
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
      margin:10,
      backgroundColor:'white',
      width:80,
      height:40
    },
    card3:{
      margin:0,
      backgroundColor:'white',
    },
    card4:{
      margin:10,
      backgroundColor:'white',
    },
    img:{
      borderRadius:5
    },
    wrong:{
      fontSize: 15,
      marginTop:-7,
      color:'red',
      paddingLeft:12
    }
  });
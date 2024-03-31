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
    const [email,setEmail]=useState("");
    const [newemail,setNewemail]=useState("");
    const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [worng,setWrong]=useState("");
    // const toggleShowPassword = () => { 
    //   setShowPassword(!showPassword); 
    // };

    const onClicklog=()=>{
      console.log("Change mail !!")
      const data={
          email:email,
          newemail:newemail
      }
      axios.post("http://10.64.43.110:5000/reset_email",data)
      .then(response=>{
        console.log(response.data)
        setEmail("")
        setNewemail("")
        setWrong("")
        navigation.navigate("Year")
      })
      .catch(error=>{
        console.log(error.response)
        setWrong("Something Wrong")
        
      })
    }

    return(
        <SafeAreaView style={styles.container}>
            <Card style={styles.card1}>
                <ImageBackground source={bg} style={styles.img}>
                    <View style={styles.cardContainer}>
                        <View style={styles.container2}>
                            <Card style={styles.card}>
                                <Text style={styles.text}>Change Email</Text> 
                                <TextInput 
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                                placeholder="New Email"
                                />
                                <View style={styles.input}>

                                    <TextInput 
                                    // style={styles.input}
                                    onChangeText={setNewemail}
                                    value={newemail}
                                    placeholder="Confirm Email"
                                    //   secureTextEntry={!showPassword}
                                    />
                                    {/* <MaterialCommunityIcons 
                                    name={showPassword ? 'eye-off' : 'eye'} 
                                    size={24} 
                                    color="#aaa"
                                    style={styles.icon} 
                                    onPress={toggleShowPassword} 
                                    />  */}
                                </View>
                                    
                                <View style={styles.center}>
                                    <Card style={styles.card2}>
                                        <Button 
                                        title="Change Email"
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
      width:150,
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
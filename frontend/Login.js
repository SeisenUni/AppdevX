import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button,ImageBackground, SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import bg from './login-piccard.png'
export default function App() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
    };

    return(
        <SafeAreaView style={styles.container}>
            {/* <Text>Teest login</Text> */}

              {/* <View style={styles.cardContainer}> */}

                  {/* <Card style={styles.card1}> */}

            <ImageBackground source={bg} style={styles.container1}>
                    <View style={styles.cardContainer}>
                      <View style={styles.container}>

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

                            <Button 
                            title="Login"
                            color="green"
                            // onPress={}
                            />
                            <Button 
                            title="Create account"
                            color="green"
                            // onPress={}
                            />
                            <Text> </Text>
                            <Text style={styles.text}> {"\n"}Planner</Text>
                            </View>
                      </Card>
                      </View>
                    </View>
            </ImageBackground>
                  {/* </Card> */}

              {/* </View> */}
           
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'no',
      padding: 60,
      // borderWidth:1
    },
    container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'pink',
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
      borderWidth: 5,
      borderRadius: 20,
      backgroundColor:"white"
    },
    card1: {
      margin: 10,
      width:900,
      height:600,
      padding: 10,
      borderWidth: 3,
      borderRadius: 5,
      backgroundColor:"white"
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
  });
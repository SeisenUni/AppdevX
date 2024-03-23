import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button,Image, SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card, Title } from 'react-native-paper';
export default function App() {
    const Profile ={ uri:'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
    width: 250,
    height: 150,};

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [login, setLogin] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            {/* <Text>Teest login</Text> */}

              <View style={styles.cardContainer}>

                  <Card style={styles.card1}>

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
                          <TextInput 
                          style={styles.input}
                          onChangeText={setPassword}
                          value={password}
                          placeholder="Password"
                          />
                         
                        <View style={styles.center}>

                            <Button 
                            title="Login"
                            color="blue"
                            // onPress={}
                            />
                            <Button 
                            title="Create account"
                            color="blue"
                            // onPress={}
                            />
                            <Text> </Text>
                            <Text style={styles.text}>Planner</Text>
                            </View>
                      </Card>
                      </View>
                    </View>
                    <View style={styles.center}>

                    <Text style={styles.text}>Login</Text>
                    </View>
                  </Card>

              </View>
           
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'no',
      padding: 8,
    },
    cardContainer: {
      flexDirection: 'row',
    },
    card: {
      margin: 10,
      width:300,
      height:450,
      padding: 10,
      borderWidth: 5,
      borderRadius: 10,
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
    },
    card1: {
      margin: 10,
      width:900,
      height:600,
      padding: 10,
      borderWidth: 5,
      borderRadius: 10,
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
      marginLeft: 10, 
  }, 
  });
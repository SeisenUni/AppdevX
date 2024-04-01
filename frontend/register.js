
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-native-paper';
import axios from "axios";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const [person, setPerson] = useState([]);
 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const onClickcreat = () => {
    const data = {
      email: email,
      username: username,
      phone_number: phone_number,
      password: password
    }
    axios.post("http://192.168.185.166:5000/register", data)
      .then(response => {
        console.log(response.data)
        navigation.navigate("Login")
        setPerson(response.data.person)
        setEmail("")
        setUsername("")
        setPhoneNumber("")
        setPassword("")
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
   
      <ScrollView >
        <SafeAreaView style={styles.container}>
          
          <View style={styles.cardContainer}>
            <Card style={styles.card1}>
          
            <Icons.Button name="back" color="black" backgroundColor="transparent" size={40} marginLeft={-10} marginTop={-10} underlayColor="transparent" onPress={()=>navigation.navigate("Login")}/>
        

              <View style={styles.cardContainer}>
                <View style={styles.container}>

                  <Card style={styles.card}>
                    <Text style={styles.text}>Create Account</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={setEmail}
                      value={email}
                      // ref={myInputRef1}
                      placeholder="Email"
                    />

                    <TextInput
                      style={styles.input}
                      onChangeText={setUsername}
                      value={username}
                      // ref={myInputRef2}
                      placeholder="Username"
                    />

                    <TextInput
                      style={styles.input}
                      onChangeText={setPhoneNumber}
                      value={phone_number}
                      placeholder="Telephone Number"
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

                    <View style={styles.center}>
                      <Card style={styles.card2}>
                        <Button
                          title="Create account"
                          color="#545454"
                          
                          onPress={onClickcreat}
                        />
                      </Card>
  
                    </View>
                  </Card>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.center}>
                </View>

              </View>
            </Card>

          </View>

        </SafeAreaView>
      </ScrollView>
    

  );


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 8,
    flexDirection: 'row',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  card: {
    margin: 10,
    width: 300,
    height: 450,
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  card1: {
    margin: 10,
    width: 1000,
    height: 750,
    padding: 30,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  cardContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    color: 'black'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 200,
    marginTop: -20
  },
  card2: {
    marginTop: 40,
    backgroundColor: 'white',
  },
});
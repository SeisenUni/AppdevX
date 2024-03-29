
import { StyleSheet, Text, View,TextInput, Button,Image, SafeAreaView ,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card} from 'react-native-paper';
import axios from "axios";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation =useNavigation();
    const [person,setPerson]=useState([]);
    // useEffect(()=>{
    //   onClick();
    // },[]);
    // const Profile ={ uri:'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
    // width: 250,
    // height: 150,};
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [phone_number,setPhoneNumber]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword, setShowPassword] = useState(false); 
    // const [create, setcreate] = useState(false);
    // const myInputRef1= React.createRef();
    // const myInputRef2= React.createRef();
    // const myInputRef3= React.createRef();
    // const myInputRef4= React.createRef();
    const onClickcreat=()=>{
      const data={
        email:email,
        username:username,
        phone_number:phone_number,
        password:password
      }
      axios.post("http://10.64.43.110:5000/register",data)
      .then(response=>{
          console.log(response.data)
          navigation.navigate("Login")
          setPerson(response.data.person)
          setEmail("")
          setUsername("")
          setPhoneNumber("")
          setPassword("")
        })
        .catch(error=>{
          console.log(error.response)
        })
      }

    const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
    }; 


    return(
      <ScrollView>

        <SafeAreaView style={styles.container}>
            {/* <Text>Teest login</Text> */}
              <View style={styles.cardContainer}>
                  <Card style={styles.card1}>
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
                            // ref={myInputRef3}
                            placeholder="Telephone Number"
                            />

                            <View style={styles.input}>

                              <TextInput 
                              // style={styles.input}
                              onChangeText={setPassword}
                              value={password}
                                // ref={myInputRef4}
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
                                  color="green"
                                  onPress={onClickcreat}
                                  // onPress={() =>navigation.navigate("Login")}
                                  />
                            </Card>
                                  <Text style={styles.text}>{"\n"}Planner</Text>
                              </View>
                        </Card>
                      </View>
                    </View>

                    <View style={styles.center}>
                    <Text style={styles.text}>Create Account</Text>
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
      backgroundColor: 'no',
      padding: 8,
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
      height:450,
      padding: 10,
      borderWidth: 5,
      borderRadius: 20,
      backgroundColor:'white'
    },
    card1: {
      margin: 10,
      width:1000,
      height:600,
      padding: 30,
      borderWidth: 5,
      borderRadius: 10,
      backgroundColor:'white'
    },
    cardContainer: {
      flexDirection: 'row',
    },
    text:{
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      color:'blue'
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: { 
      marginLeft:200,
      marginTop:-20
    },
    card2:{
      margin:0,
      backgroundColor:'white',
    },
  });
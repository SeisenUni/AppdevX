import { StatusBar } from 'expo-status-bar';
import Icons from 'react-native-vector-icons/AntDesign';

import { StyleSheet, Text, View,TextInput, Button,ImageBackground, SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import bg from './login-piccard.png'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
export default function App() {
    const navigation =useNavigation();
    const [worng,setWrong]=useState("");
    const [newpassword,setNewpassword]=useState("");
    const [conpassword,setConpassword]=useState("");
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
    };

    const onClickpass=()=>{
      console.log("reset password !!")
      const data={
          newpassword:newpassword,
          conpassword:conpassword
      }
      axios.post("http://10.64.43.110:5000/reset_pass",data)
      .then(response=>{
        console.log(response.data)
        navigation.navigate("Login")
        setNewpassword("")
        setConpassword("")
        setWrong("")
      })
      .catch(error=>{
        console.log(error.response)
        setWrong("Wrong")
      })
    }

    return(
        <SafeAreaView style={styles.container}>   
         {/* // <Icons.Button name="back" color="black" backgroundColor="transparent" size={40} marginLeft={1} marginTop={-10} underlayColor="black" justifyContent='right' alignItems = 'right' onPress={()=>navigation.navigate("Login")}/> */}
            <Card style={styles.card1}>
              <ImageBackground source={bg} style={styles.img}>
                  <View style={styles.cardContainer}>
                    <View style={styles.container2}>
                      <Card style={styles.card}>
                            <Text style={styles.text}>Reset Password</Text> 
                                <TextInput 
                                style={styles.input}
                                onChangeText={setNewpassword}
                                value={newpassword}
                                placeholder="New Password"
                                />
                              <View style={styles.input}>

                                <TextInput 
                                // style={styles.input}
                                onChangeText={setConpassword}
                                value={conpassword}
                                placeholder="Confirm Password"
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
                              <Text style={styles.wrong}>{worng}</Text>
                              <View style={styles.center}>
                                <Card style={styles.card2}>
                                    <Button 
                                    title="Change Password"
                                    color="black"
                                    onPress={onClickpass}
                                    />
                                </Card>
                                <Card style={styles.card3}>
                                    <Button 
                                    title="Return to login"
                                    color="black"
                                    onPress={()=>navigation.navigate("Login")}
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
      // borderWidth:1
    },
    container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'white',
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
      backgroundColor:"#b4b4b4",
      borderColor:'#b0b0b0'
    },
    cardContainer: {
      flexDirection: 'row',
    },
    text:{
      fontSize: 30,
      //fontWeight: 'bold',
      //fontFamily: 'Cochin',
      color:'black',
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
        backgroundColor:'white'
    },
    card3:{
      marginTop:0,
      backgroundColor:'white'
  },
    img:{
      borderRadius:5
    },
    wrong:{
      fontSize: 15,
      //fontWeight: 'bold',
     // fontFamily: 'Cochin',
      color:'red',
      paddingLeft:12
    }
  });





// import { StyleSheet, Text, View,TextInput, Button,Image, SafeAreaView ,ScrollView} from 'react-native';
// import React,{useState,useEffect} from 'react';
// import { Card, Title} from 'react-native-paper';
// import axios from "axios";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// export default function App() {
//     // const [person,setPerson]=useState([]);
//     // const [email,setEmail]=useState('');
//     // const [username,setUsername]=useState('');
//     // const [phone_number,setPhoneNumber]=useState('');
//     const [newpassword,setNewpassword]=useState('');
//     const [conpassword,setConpassword]=useState('');

//     return(
//      <SafeAreaView style={styles.container}>
//      <Card style={styles.card}>
//         <Title style={styles.tilreset}> {"\n"}Reset Your Password</Title>
//         <View style={styles.center}>
//             <Card style={styles.card1}>
//                 <View style={styles.center}>
//                     <TextInput 
//                         style={styles.input}
//                         onChangeText={setNewpassword}
//                         value={newpassword}
//                         placeholder="New Password"/>
//                     <TextInput 
//                         style={styles.input1}
//                         onChangeText={setConpassword}
//                         value={conpassword}
//                         placeholder="Confirm Password"/>
//                     <Card style={styles.card3}>
//                     <Button title='Reset Password'/>
//                     </Card>
//                 </View>
//             </Card>
//         </View>
//      </Card>
//      </SafeAreaView>
//     );


// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'top',
//       alignItems: 'center',
//       backgroundColor: 'no',
//       borderWidth:1,
//       marginTop:100,
//     //   backgroundColor:'skyblue'
//     },
//     tilreset:{
//         fontSize:40,
//         borderWidth:1,
//         width:500,
//         height:100,
//         textAlign: 'center',
//         marginTop:10,
//         marginBottom:10,
//         margin:50,
        
//     },
//     input:{
//         borderWidth:1,
//         height:40,
//         width:320,
//         margin:40,
//         borderRadius:5
        
//     },
//     input1:{
//         borderWidth:1,
//         height:40,
//         width:320,
//         margin:0,
//         borderRadius:5
        
//     },
//     card:{
//         width:600,
//         height:600,
//         backgroundColor:'white'
//     },
//     card1:{
//         width:400,
//         height:420,
//         backgroundColor:'white'
//     },
//     card3:{
//         margin:40,
//         backgroundColor:'white'
//     },
//     center: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//   });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button,ImageBackground, SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import bg from './login-piccard.png'
export default function App() {

    // const [username,setUsername]=useState("");
    const [newpassword,setNewpassword]=useState("");
    const [conpassword,setConpassword]=useState("");
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
                         
                        <View style={styles.center}>
                            <Card style={styles.card2}>
                                <Button 
                                title="Reset Password"
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
                  {/* </Card> */}

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
    card2:{
        margin:20,
        backgroundColor:'white'
    },
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
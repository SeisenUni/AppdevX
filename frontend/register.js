import { StyleSheet, Text, View,TextInput, Button,Image, SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card} from 'react-native-paper'
export default function App() {
    // const [person,setPerson]=useState([]);
    // useEffect(()=>{
    //   onClick();
    // },[]);
    const Profile ={ uri:'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
    width: 250,
    height: 150,};
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [tel,setTel]=useState("");
    const [password,setPassword]=useState("");
    // const [create, setcreate] = useState(false);
    // const myInputRef1= React.createRef();
    // const myInputRef2= React.createRef();
    // const myInputRef3= React.createRef();
    // const myInputRef4= React.createRef();
    // const onClickcreat=()=>{
    //     const data={
    //         email:myInputRef1.current.value,
    //         username:myInputRef2.current.value,
    //         tel:myInputRef3.current.value,
    //         password:myInputRef4.current.value
    //     }
    //     // axios.post("",data)
    //     .then(response=>{
    //       console.log(response.data)
    //       setPerson(response.data.books)
    //       setEmail("")
    //       setUsername("")
    //       setTel("")
    //       setPassword("")
    //     })
    //     .catch(error=>{
    //       console.log(error.response)
    //     })
    //   }


    return(
        <SafeAreaView style={styles.container}>
            {/* <Text>Teest login</Text> */}

              <View style={styles.cardContainer}>

                  <Card style={styles.card1}>

                    <View style={styles.container}>
                      <Card style={styles.card}>
                        <Text style={styles.text}>Create Account</Text> <br/>
                          
                         <TextInput 
                          style={styles.input}
                          onChangeText={setEmail}
                          value={email}
                        //   ref={myInputRef1}
                          placeholder="Email"
                          />
                          <TextInput 
                          style={styles.input}
                          onChangeText={setUsername}
                          value={username}
                        //   ref={myInputRef2}
                          placeholder="Username"
                          />
                          <TextInput 
                          style={styles.input}
                          onChangeText={setTel}
                          value={tel}
                        //   ref={myInputRef3}
                          placeholder="Telephone Number"
                          />
                          <TextInput 
                          style={styles.input}
                          onChangeText={setPassword}
                          value={password}
                        //   ref={myInputRef4}
                          placeholder="Password"
                          />
                         <View style={styles.center}>
                            <Button 
                            title="Create account"
                            color="blue"
                            // onPress={onClickcreat}
                            />
                            <br/>
                            <Text style={styles.text}>Planner</Text>
                            </View>
                      </Card>
                    </View>
                    <View style={styles.center}>

                    <Text style={styles.text}>Create Account</Text>
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
    },
    card: {
      margin: 10,
      width:300,
      height:450,
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
      color:'blue'
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: { 
      marginLeft: 10, 
  }, 
  });
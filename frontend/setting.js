import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Modal,Button } from 'react-native';
import React,{useState} from 'react';
import { Card, Title } from 'react-native-paper';
export default function App() {
  const [show,setShow]=useState(false);
  
  return (
    <View style={styles.test}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <View style={styles.left}> */}
      <Button title='Button'onPress={()=> setShow(true)}/>
      {/* </View> */}
      <Modal
        transparent={true}
        visible={show}
        onRequestClose={()=>{
          setShow(!show)
        }}
      >

        <View style={styles.test2}>
          <View style={styles.test3}>
          <Card style={styles.cardContainer}>
            <Title style={styles.title}>{"\n"}Setting</Title>
            <Card style={styles.cardContainerin1}>
            {/* <Card style={styles.cardContainer2}> */}
            <View style={styles.butsetting}>
              <Button title='Change Email'/>
            </View>
            <View style={styles.butsetting}>
              <Button title='Reset Password'/>
            </View>
            <View style={styles.butsetting}>
              <Button title='Theme'/>
            </View>
            </Card>

            </Card>
          {/* </Card> */}
            <View style={styles.butleft}>

            <Button title='exit' onPress={()=> setShow(!show)}/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:100
  },
  test:{
    flex:1,
    marginTop:100
  },
  test2:{
    backgroundColor:"#000000aa",
    flex:1,
  },
  test3:{
    backgroundColor:"white",
    margin:350,
    marginTop:200,
    padding:40,
    borderRadius:10,
    height:500,
    width:500,
  },
  butleft:{
    backgroundColor:"white",
    marginLeft:390,
    marginTop:-70,
    height:40,
    width:60,
    borderRadius:5
  },
  setting:{
    justifyContent:'center',
    alignItems: 'center',
    // marginTop:-20,
    height:80,
    width:700
  },
  title:{
    fontSize:40,
    // backgroundColor:'pink',
    width:490,
    height:60,
    textAlign:'center',
    color:"white",
    // flexDirection:'row'
  },
  cardContainer: {
    flexDirection: 'row',
    height:80,
    width:500,
    marginLeft:-40,
    marginTop:-42,
    backgroundColor:'gray',
    borderRadius:5
  },
  cardContainerin1: {
    flexDirection: 'row',
    height:450,
    width:500,
    marginTop:10,
    backgroundColor:'pink',
    borderRadius:5,
  },
  cardContainer2: {
    flexDirection: 'row',
    height:150,
    width:420,
    marginTop:20,
    marginLeft:40,
    backgroundColor:'white',
    borderRadius:5,
  },
  butsetting:{
    backgroundColor:"white",
    marginLeft:40,
    height:50,
    width:420,
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
    marginTop:10
  },

  

});

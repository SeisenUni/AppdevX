import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Modal,Button } from 'react-native';
import React,{useState} from 'react';
export default function App() {
  const [show,setShow]=useState(false);
  
  return (
    <View style={styles.test}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <View style={styles.left}> */}
      <Button title='Button' style={styles.bu} onPress={()=> setShow(true)}/>
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
            <Text>Modal Text</Text>
            <View style={styles.left}>

            <Button title='exit' style={styles.exit} onPress={()=> setShow(!show)}/>
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
  exit:{
    width:200
  },
  left:{
    backgroundColor:"blue",
    marginLeft:390,
    marginTop:-50,
    height:40,
    width:60
  }
  

});

// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button,Image, SafeAreaView } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Card } from 'react-native-paper';
export default function App() {
    const Profile ={ uri:'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
    width: 250,
    height: 150,};

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    return(
        <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                <Card.Content>
                    <Image source={NoteBook}/>
                    <Title>Login your account</Title>
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
                    {/* <Paragraph>Gpu : NVIDIA GeForce RTX 4060 </Paragraph>
                    <Paragraph>RAM : 16 GB DDR5 4800 MHz </Paragraph>
                    <Paragraph>Stroage : 512GB SSD PCIe M.2 Gen4</Paragraph>
                    <Paragraph>Price : 49,990.-</Paragraph> */}

          </Card.Content>
        </Card>

        
      </View>
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
  });


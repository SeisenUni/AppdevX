// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import React,{useState,useEffect} from 'react';
export default function App() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
  return (
    <View style={styles.container}>
      <Text>Login</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder='Email or Username'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    // secureTextEntry
                    // right={<TextInput.Icon icon="eye" />}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Forgot password?" color="black" onPress={()=>alert("in reset password")}></Button> <br/>
                <Button title="Login" color="black" onPress={()=>alert("success!!")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 20,
    margin: 5,
    borderWidth: 2,
    padding: 10,
  }
});


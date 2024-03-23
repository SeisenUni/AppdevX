import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{Card} from 'react-native-paper';
import Setto from './frontend/setting.js';
import Login from './frontend/Login.js';
import Month from './frontend/Month.js';
import Register from './frontend/register.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Card><Text>Open udwdadwadp App.js to start working on your app!</Text></Card>
      <StatusBar style="auto" />
    {/* <Login/> */}
    {/* <Setto/> */}
    {/* <Register/> */}
    <Month/>
    </View>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{Card} from 'react-native-paper';
import Setto from './frontend/setting.js';
import Login from './frontend/Login.js';
import Month from './frontend/Month.js';
import Register from './frontend/register.js';
import Mainmonth from './frontend/MainMonth.js';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Login/> */}
    {/* <Setto/> */}
    {/* <Register/> */}
    {/* <Month/> */}
   <Mainmonth/>
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
});
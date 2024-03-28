import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{Card} from 'react-native-paper';
import Setto from './frontend/setting.js';
import Login from './frontend/Login.js';
import Month from './frontend/Month.js';
import Register from './frontend/register.js';
import Mainmonth from './frontend/MainMonth.js';
import Bar from './frontend/menubar.js';
import Reset from './frontend/resetpass.js';
import Remail from './frontend/resetmail.js';
import Yearbar from './frontend/yearbar.js';
export default function App() {
  return (
    <View style={styles.container}>
    <Bar/>
    {/* <Yearbar/> */}
    {/* <Login/> */}
    {/* <Setto/> */}
    {/* <Register/> */}
    {/* <Month/> */}
   {/* <Mainmonth/> */}
   {/* <Reset/> */}
    {/* <Mainmonth/> */}
    {/* <Reset/> */}
    {/* <Remail/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
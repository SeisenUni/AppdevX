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
import Week from './frontend/week.js';
import Adding from './frontend/adding.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Week">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Regis" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Year"  component={Yearbar} options={{ headerShown: false }}/>
        <Stack.Screen name="Bar"  component={Bar} options={{ headerShown: false }}/>
        <Stack.Screen name="Week"  component={Week} options={{ headerShown: true }}/>
        <Stack.Screen name="Setto"  component={Setto} /*options={{ headerShown: false }}*//>
        <Stack.Screen name="Adding"  component={Adding} /*options={{ headerShown: false }}*//>

      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //{/* <Bar/> */}
   // {/* <Yearbar/> */}
   //{/* <Login/> */}
    //{/* <Setto/> */}
//{/* <Register/> */}
    //{/* <Month/> */}
   //{/* <Mainmonth/> */}
  // {/* <Reset/> */}
  //  {/* <Mainmonth/> */}
  //  {/* <Reset/> */}
  //  {/* <Remail/> */}
    // </View>
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
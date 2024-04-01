import { StyleSheet, Text, View } from 'react-native';
import Login from './frontend/Login.js';
import List from './frontend/list.js';
import Register from './frontend/register.js';
import Month from './frontend/menubar.js';
import Reset from './frontend/resetpass.js';
import Remail from './frontend/resetmail.js';
import Yearbar from './frontend/yearbar.js';
import Week from './frontend/week.js';
import Forget from './frontend/forget.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Regis" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Year"  component={Yearbar} options={{ headerShown: false }}/>
        <Stack.Screen name="Month"  component={Month} options={{ headerShown: false }}/>
        <Stack.Screen name="Week"  component={Week} options={{ headerShown: false }}/>
        <Stack.Screen name="ResetPass" component={Reset} options={{ headerShown: false }}/>
        <Stack.Screen name="Changemail" component={Remail} options={{ headerShown: false }}/>
        <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }}/>
        <Stack.Screen name="List"  component={List} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
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
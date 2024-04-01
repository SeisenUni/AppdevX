import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, TouchableOpacity, Alert ,Button, Dimensions} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { target } from './keytime';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Year from './yearbar';
import Pagemonth from './menubar.js';

function Yearcan({ navigation }) {
    const renderMonth = (item) => {
        switch (item) {
            case '1': return 'January';
            case '2': return 'February';
            case '3': return 'March';
            case '4': return 'April';
            case '5': return 'May';
            case '6': return 'June';
            case '7': return 'July';
            case '8': return 'August';
            case '9': return 'September';
            case '10': return 'October';
            case '11': return 'November';
            case '12': return 'December';
            default: return 'January';
        }
    }
    const getAccessTo = (value) => {
        navigation.navigate('MonthDetail');
        target(value); // Assuming target is defined correctly
      }
    
      const data = [];
      for (let i = 1; i <= 12; i++) {
        data.push({ key: i, month: `${i}` });
      }
    
      const printmonth = ({ item }) => {
        return (
          <TouchableOpacity onPress={() => getAccessTo(item.month)}>
            <Card style={styles.Toch}>
              <Title>{renderMonth(item.month)}</Title>
            </Card>
          </TouchableOpacity>
        );
      };
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
            <Year/>
            <FlatList
              data={data}
              renderItem={(item) => printmonth(item)}
              numColumns={4}
              contentContainerStyle={styles.flatListContent}
            />
        </SafeAreaView>
      );
    }
    
    function MonthDetail({ navigation }) {
      return (
        <Pagemonth/>
      );
    }
    
    const Stack = createStackNavigator();
    
    function App() {
      const { width, height } = Dimensions.get('window'); 
      return (
        <SafeAreaView style={{ flex: 1, width: width, height: height ,backgroundColor:'#FFFFFF'}}>
         <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Year Calendar" component={Yearcan} options={{ headerShown: true }}/>
            <Stack.Screen name="MonthDetail" component={MonthDetail}  options={{ headerShown: true }}/> 
          </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      Toch: {
          width: 250,
          height: 220,
          zIndex: 1,
          margin: 10,
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
      },
    });
    
    export default App;

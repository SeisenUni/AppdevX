import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, TouchableOpacity, Alert ,Button, Dimensions} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Month from './menubar.js';
import Year from './yearbar.js';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="first" component={Month} />
                <Stack.Screen name="second" component={Year} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView,TouchableOpacity} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function App() {
    const data = [];
    for (let i = 0; i < 30; i++) {
        data.push({ key: i, title: `${i + 1}` });
    }

    const createday = ({ item }) => (
        <Card style={styles.card}>
            <Title style={styles.textst}>{item.title}</Title>
        </Card>
    );
    
    return (
        <SafeAreaView style={styles.container}>
            <Card style={styles.menubar}>
            <Title style={{textAlign: 'center'}}>This is menubar</Title>
            </Card>
            <Card style={styles.month}>
                <View style={styles.week}>
                    <Title style={styles.dayweek}>Sunday</Title>
                    <Title style={styles.dayweek}>Monday</Title>
                    <Title style={styles.dayweek}>Tuesday</Title>
                    <Title style={styles.dayweek}>Wednesday</Title>
                    <Title style={styles.dayweek}>Thursday</Title>
                    <Title style={styles.dayweek}>Friday</Title>
                    <Title style={styles.dayweek}>Saturday</Title>
                </View>
                <FlatList
                data={data}
                renderItem={createday}
                numColumns={7}
                contentContainerStyle={styles.flatListContent}
            /></Card>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        margin: 0,
        padding: 1,
    },
    flatListContent: {
        alignItems: 'left',
    
    },
    card: {
        marginTop:4,
        marginRight: 4,
        marginBottom:4,
        borderRadius:3,
        backgroundColor: 'white',
        width: 120,
        height: 120,
        justifyContent: 'top',
        alignItems: 'left',
        borderWidth: 2, // กำหนดความหนาของเส้น
        borderColor: 'black', // กำหนดสีของเส้น
    },
    menubar: {
        marginBottom: 5,
        borderRadius:0,
        width: 1050,
        height: 75,
    },
    month:{
        marginLeft:5,
        marginTop:5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    textst:{
        marginLeft:5,
        alignItems: 'center',
        
    },
    week:{
        flexDirection: 'row',
        marginBottom: 5,
        borderRadius:0,
        marginRight:5,
    },
    dayweek:{
        flex: 1, 
        textAlign: 'center', 
    },
});

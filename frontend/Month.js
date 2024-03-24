import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function App() {

    const getloldday =(item) =>
    {
        const x = 5;
        return  x;
    }
    const data = [];
    const day = [];
    for (let i = getloldday(5); i < 31; i++) {
        if (i == 31) 
        {
            switch (7 % (i + 1)) {
                case 0:
                    day.push({ key: i, name: `${7}` });
                    break;
                case 1:
                    day.push({ key: i, name: `${1}` });
                    break;
                case 2:
                    day.push({ key: i, name: `${2}` });
                    break;
                case 3:
                    day.push({ key: i, name: `${3}` });
                    break;
                case 4:
                    day.push({ key: i, name: `${4}` });
                    break;
                case 5:
                    day.push({ key: i, name: `${5}` });
                    break;
                case 6:
                    day.push({ key: i, name: `${6}` });
                    break;
            }
        }

        data.push({ key: i, title: `${i}` });
    }

    const createday = ({ item }) => {
        var count = 0;
        var getday =5;
        let setday = item.title;
        
            if (item.title >= 1 && item.title <= 10) {
                count++;
                if (count > 1) {
                    return (
                        <Card style={styles.selectday}>
                            <Title style={styles.textst}>{item.title}</Title>
                            <Paragraph>Abstract final</Paragraph>
                        </Card>
                    );
                }
                else {
                    return (
                        <Card style={styles.selectday}>
                            <Title style={styles.textst}>{item.title}</Title>
                            <Paragraph>Abstract final</Paragraph>
                            <Paragraph>18:30 - 19:40</Paragraph>
                        </Card>
                    );
                }
            } else {
                return (
                    <Card style={styles.card}>
                        <Title style={styles.textst}>{item.title}</Title>
                    </Card>
                );
            }
    };


    return (
        <SafeAreaView style={styles.container}>
            <Card style={styles.menubar}>
                <Title style={{ textAlign: 'center' }}>This is menubar</Title>
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
        marginTop: 4,
        marginRight: 4,
        marginBottom: 4,
        borderRadius: 3,
        backgroundColor: 'white',
        width: 120,
        height: 120,
        justifyContent: 'top',
        alignItems: 'left',
        borderWidth: 2, // กำหนดความหนาของเส้น
        borderColor: 'black', // กำหนดสีของเส้น
    },
    selectday: {
        marginTop: 4,
        marginRight: 4,
        marginBottom: 4,
        borderRadius: 3,
        backgroundColor: 'gray',
        width: 120,
        height: 120,
        justifyContent: 'top',
        alignItems: 'left',
        borderWidth: 2, // กำหนดความหนาของเส้น
        borderColor: 'black', // กำหนดสีของเส้น
    },
    menubar: {
        marginBottom: 5,
        borderRadius: 0,
        width: 1050,
        height: 75,
    },
    month: {
        marginLeft: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    textst: {
        marginLeft: 5,
        alignItems: 'center',

    },
    week: {
        flexDirection: 'row',
        marginBottom: 5,
        borderRadius: 0,
        marginRight: 5,
    },
    dayweek: {
        flex: 1,
        textAlign: 'center',
    },
});

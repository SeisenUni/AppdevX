import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { oldd, newm, oldm} from './keytime.js';

export default function App() {
   
    const data = [];
    for (let i = 1; i < 36; i++) {
         data.push({ key: i, title: `${i}` });
    }
    var countday = 0;
    const createday = ({ item }) => {
        if (countday >= oldd() && item.title <= newm() + 2) {
            let newday = (item.title - countday);
            if (newday >= 1 && newday <= 10) {
                return (
                    <Card style={styles.selectday}>
                        <Title style={styles.textst}>{newday}</Title>
                        <Paragraph>Algorithm</Paragraph>
                        <Paragraph>18:30 - 19:40</Paragraph>
                    </Card>
                );

            } else {
                return (
                    <Card style={styles.card}>
                        <Title style={styles.textst}>{newday}</Title>
                    </Card>
                );
            }
        }
        else {
            countday++;
            if (item.title < oldm()) {
                let setto = oldm() - oldd();
                let newday2 = (setto + countday);
                if (newday2 >= 0 && newday2 <= 1) {
                    return (
                        <Card style={styles.selectday}>
                            <Title style={styles.textst}>{newday2}</Title>
                            <Paragraph>Abstract</Paragraph>
                            <Paragraph>18:30 - 19:40</Paragraph>
                        </Card>
                    );

                } else {
                    return (
                        <Card style={styles.oldmonth}>
                            <Title style={styles.textst}>{newday2}</Title>
                        </Card>
                    );
                }
            }
        }

    };


    return (
            <SafeAreaView style={styles.container}>
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
                        renderItem={(item) => createday(item)}
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
        zIndex: 2,
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
        backgroundColor: '#979A9A',
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
    oldmonth: {
        marginTop: 4,
        marginRight: 4,
        marginBottom: 4,
        borderRadius: 3,
        backgroundColor: '#616A6B',
        width: 120,
        height: 120,
        justifyContent: 'top',
        alignItems: 'left',
        borderWidth: 2, // กำหนดความหนาของเส้น
        borderColor: 'black', // กำหนดสีของเส้น
    }
});

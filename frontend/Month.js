import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { oldd, newm, oldm, gotmonth, startd, gettd, stacked, dequeue } from './keytime.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
    
// Const [allData,setAllData] =useState();

//     useEffect(() => {
//         axios.get('http://192.168.227.165:5000/get_by_user')
//             .then(response => {
//                 const infoArray = response.data;
//                 setAllData(infoArray);
//             })
//             .catch(error => {
//                 console.error('Error fetching info:', error);
//             });
//     }, []);
const [key, setKey] = useState(999); // เก็บค่า key และกำหนดค่าเริ่มต้นเป็น 999


useEffect(() => {
    axios.post('http://192.168.227.165:5000/test',{value : 2})
        .then(response => {
          
            console.log("success i sad");
            setKey(1); 
        })
        .catch(error => {
            console.log("nokub i sad");

            setKey(0); 
        });
}, []);



    // const list = Array.from({ length: 13 }, () => Array(40).fill());

    
    // let send = 
    // const send =()=>{
    // return 
    // }
    // const get =(start)=>{
    //     return
    // }
    // const checkcancreate = (startData, endData) => {
    //     data.some(item => {
    //         const number = Number(item.title);
    //         const StartData = Number(startData.substring(0, 2));
    //         const EndData = Number(endData.substring(0, 2));
    //         const start = Number(startData.substring(3, 5));
    //         const end = Number(startData.substring(3, 5));
    //         const month = gotmonth();
    //         if (number >= StartData && number <= EndData && (start >= Number(gotmonth()) && end <= Number(gotmonth()))) 
    //         {
    //            const number = Number(item.title);
    //            const EndData = Number(endData.substring(0, 2));
    //            startd(number);
    //            stacked(EndData);
    //            return 1;

    //         } else {
    //             return 0;
    //         }
    //     });
    // }
    // let valuebuild = 0 ;
    // useEffect(() => {
    //     allData.forEach(info => {
    //         data.forEach(item => {
    //             console.log("check");
    //             if (item.title <= Number(info.date_start.substring(0, 2))) {
    //                 console.log("getnow");
    //             }
    //             else {

    //             }
    //         });

    //     });
    // }, [allData]);
    const route=(value)=>
    {
        switch(value)
        {
            case 1: return '01';
            case 2: return '02';
            case 3: return '03';
            case 4: return '04';
            case 5: return '05';
            case 6: return '06';
            case 7: return '07';
            case 8: return '08';
            case 9: return '09';
            default :return value;

        }
    }
    const data = [];
    for (let i = 1; i < 40; i++) {
        data.push({ key: i, title: `${i}` });
    }
    var countday = 0;
    const createonselect=(value)=>
    {
        console.log("flow this = ",value);
        return (
            <Card style={styles.selectday}>
                <Title style={styles.textst}>{value}</Title>
                <Paragraph>Algorithm</Paragraph>
                <Paragraph>18:30 - 19:40</Paragraph>
            </Card>
        );
    }
    const createnormal=(value)=>
    {
        return (
            <Card style={styles.card}>
                <Title style={styles.textst}>{value}</Title>
            </Card>
        );
    }
    const createday = ({ item }) => {
        let newday = item.title - countday;
        let start = route(newday) + '-' + gotmonth();
        let time = '0';
    
    
        if (countday >= oldd() && item.title <= newm() + 2) {
            if (key === 1) {
                return (
                    <Card style={styles.selectday}>
                        <Title style={styles.textst}>{newday}</Title>
                        <Paragraph>Algorithm</Paragraph>
                        <Paragraph>19:40-13:00</Paragraph>
                    </Card>
                );
            } else{
                return (
                    <Card style={styles.card} key={item.key}>
                        <Title style={styles.textst}>{newday}</Title>
                    </Card>
                );
            }
        } else {
            countday++;
            if (item.title < oldm()) {
                let setto = oldm() - oldd();
                let newday2 = setto + countday;
                if (newday2 >= 0 && newday2 <= 1) {
                    return (
                        <Card style={styles.selectday} key={item.key}>
                            <Title style={styles.textst}>{newday2}</Title>
                            <Paragraph>Abstract</Paragraph>
                            <Paragraph>18:30 - 19:40</Paragraph>
                        </Card>
                    );
                } else {
                    return (
                        <Card style={styles.oldmonth} key={item.key}>
                            <Title style={styles.textst}>{newday2}</Title>
                        </Card>
                    );
                }
            }
        }
        return null;
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
                />
            </Card>
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

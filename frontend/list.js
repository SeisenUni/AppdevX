import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View,Alert  } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import Iconss from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default function App() {
    const navigation = useNavigation();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.185.166:5000/get_by_user")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const sortingprio = (value) => {
        switch (value) {
            case 1: return 'Do';
            case 2: return 'Decide';
            case 3: return 'Delegate';
            case 4: return 'Dump';
            default: return 'Not found any Piority';

        }
    }
    const gencycle = (value) => {
        let iconColor, iconName,style;
    
        switch (value) {
            case 1:
                iconColor = '#FF6565';
                iconName = 'circle';
                style = 'piored';
                break;
            case 2:
                iconColor = '#FFA841';
                iconName = 'circle';
                style = 'pioorange';
                break;
            case 3:
                iconColor = '#6587FF';
                iconName = 'circle';
                style = 'pioblue';

                break;
            case 4:
                iconColor = '#78c388';
                iconName = 'circle';
                style = 'piogreen';

                break;
            default:
                iconColor = 'gray';
                style = 'piogray';
                iconName = 'exclamation-circle';
                break;
        }
    
        return (
            <>
                <View style={{flexDirection:'row'}}>
                <Icon name={iconName} color={iconColor} backgroundColor="white" size={40} margin={5} />
                <Text style={styles[style]}>{sortingprio(value)}</Text>

                </View>
            </>
        );
    }
    
    const getstyle =(value)=>
    {
        switch(value)
        {
            case 1 : return 'listred';
            case 2 : return 'listorange';
            case 3 : return 'listblue';
            case 4 : return 'listgreen';
            default: return 'listlec';
        }
    }
    const checkfinish =(value)=>
    {
        if(value)
        {
            return 'Yes';
        }
        else
        {
            return 'No'
        }
    }
    const renderItem = ({ item }) => (
        <Card style={styles[getstyle(item.priority)]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    {gencycle(item.priority)}
                </View>
                <Icons.Button
                    name="closecircle"
                    color="black"
                    size={20}
                    margin={0}
                    backgroundColor={"transparent"}
                    onPress={() => del(item._id)}
                />
            </View>
            <Title style={styles.title}>Context : {item.title}</Title>
            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <Paragraph>Start : </Paragraph>
                <Paragraph style={{ color: 'gray' }}>{moment(item.date_start).format('DD MMMM YYYY')}</Paragraph>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <Paragraph>End : </Paragraph>
                <Paragraph style={{ color: 'gray' }}>{moment(item.date_end).format('DD MMMM YYYY')}</Paragraph>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <Paragraph>Time : </Paragraph>
                <Paragraph style={{ color: 'gray' }}>{item.time}</Paragraph>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <Paragraph style={styles.finishText}>Finish : </Paragraph>
                <Paragraph style={{ color: 'gray' }}>{checkfinish(item.finish)}</Paragraph>
            </View>
        </Card>
    );
    
    const del = (id) => {
        // แสดง Confirm Alert ก่อนลบ
        Alert.alert(
          'Finish???',
          'Are you already finish??',
          [
            { text: 'Not yet', style: 'cancel' },
            {
              text: 'Yes i finish now',
              onPress: () => {
                axios.delete(`http://192.168.185.166:5000/delete_info/${id}`)
                  .then(response => {
                    axios.get("http://192.168.185.166:5000/get_by_user")
                      .then(response => {
                        setData(response.data);
                      })
                      .catch(error => {
                        console.error('Error fetching data:', error);
                      });
                  })
                  .catch(error => {
                    console.error('Error deleting data:', error);
                  });
              }
            }
          ],
          { cancelable: true }
        );
      }
    
    

 
    const back = () => {
        navigation.navigate("Year");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.menubar}>
                <Icons.Button name="back" color="black" backgroundColor="white" size={40} onPress={back}></Icons.Button>
                <View style={styles.cardlist}>
                    <Text style={styles.fontlist}>List</Text>
                </View>

            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: 'white'
    },
    menubar: {
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'right',
        flexDirection: 'row',
        backgroundColor: 'white',
        zIndex: 200000,
        // transparent
    },
    cardlist: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    fontlist: {
        fontSize: 32.5,
        marginRight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'black',
    },
    textin:
    {
        marginLeft:5,

    },
    title:
    {
        marginLeft:5,
    },






    ///////////setting about border and color
    piored: {
        fontSize: 25,
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FF6565',
    },
    piogreen: {
        fontSize: 25,
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#78c388',
    },
    pioblue: {
        fontSize: 25,
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#6587FF',
    },
    pioorange: {
        fontSize: 25,
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFA841',
    },
    piogray: {
        fontSize: 25,
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'gray',
    },
    listlec: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 4,
        height: 200,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'gray',
    },
    listred:
    {
        borderColor: '#FF6565',
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 4,
        height: 200,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    listorange:
    {
        borderColor: '#FFA841',
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 4,
        height: 200,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    listblue:
    {
        borderColor: '#6587FF',
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 4,
        height: 200,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    listgreen:
    {
        borderColor: '#78c388',
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 4,
        height: 200,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    
});

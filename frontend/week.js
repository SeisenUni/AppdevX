import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';
import { renderweek, week, getmonth } from './keytime';
import { useNavigation } from '@react-navigation/native';
import { target } from './keytime';

export default function App() {
    const navigation = useNavigation();
    const adding = () => {
        navigation.navigate("Adding");
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { value: '1', label: 'January' },
        { value: '2', label: 'February' },
        { value: '3', label: 'March' },
        { value: '4', label: 'April' },
        { value: '5', label: 'May' },
        { value: '6', label: 'June' },
        { value: '7', label: 'July' },
        { value: '8', label: 'Auguest' },
        { value: '9', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
    ]);

    const renderw = (value) => {
        const [open1, setOpen1] = useState(false);
        const [value1, setValue1] = useState(null);
        const [items1, setItems1] = useState([
            { value: '1', label: 'Week1' },
            { value: '2', label: 'Week2' },
            { value: '3', label: 'Week3' },
            { value: '4', label: 'Week4' },
            { value: '5', label: 'Week5' },
        ]);

        const [open2, setOpen2] = useState(false);
        const [value2, setValue2] = useState(null);
        const [items2, setItems2] = useState([
            { value: '1', label: 'Week1' },
            { value: '2', label: 'Week2' },
            { value: '3', label: 'Week3' },
            { value: '4', label: 'Week4' },
            { value: '5', label: 'Week5' },
            { value: '6', label: 'Week6' },
        ]);

        if (renderweek(value) === '0') {
            return (
                <Card style={styles.dropdownunder}>
                    <DropDownPicker
                        open={open1}
                        value={value1}
                        items={items1}
                        setOpen={setOpen1}
                        setValue={setValue1}
                        setItems={setItems1}
                        style={styles.boxdrop}
                        placeholder='Week'
                        placeholderStyle={styles.yearst}
                        dropDownContainerStyle={[styles.dropdownchoose, open && { color: 'red' }]}
                        onSelectItem={(item) => genday(item.value)}
                        textStyle={styles.yearst}
                    />
                </Card>
            );
        }
        else {
            return (
                <Card style={styles.dropdownunder}>
                    <DropDownPicker
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                        style={styles.boxdrop}
                        placeholder='Week'
                        placeholderStyle={styles.yearst}
                        dropDownContainerStyle={[styles.dropdownchoose, open && { color: 'red' }]}
                        onSelectItem={(item) => genday(item.value)}
                        textStyle={styles.yearst}
                    />
                </Card>
            );
        }
    }

    const data = [];
    for (let i = 1; i <= 7; i++) {
        data.push({ key: i, title: `${i}` });
    }
    const createday = ({ item }) => {
        if(item.title <= 7)
        {
            return (
                <Card style={styles.createday}>
                    <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>{item.title}</Text>
                </Card>
            );
        }
    }
    let forturn =0;
    const genday = (item) => 
    {
        forturn =item;
        gotomonth(forturn);
    }
   const gotomonth =(value)=>
   {
       navigation.navigate("Bar");
     
   }
    return ( 
        <SafeAreaView style={styles.container}>
            <Card style={styles.monthandbutton}>
                <Text style={styles.monthtext}>
                    {getmonth()}</Text>
                <Text style={styles.yeartext}>
                    2024</Text>
                <Card style={styles.forbuttombox}>
                    <TouchableOpacity style={styles.butoom} onPress={adding}>
                        <Icons name="plus" size={40} color="black" />
                    </TouchableOpacity>
                </Card>
                <Card style={styles.forbuttombox}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.boxdrop}
                        placeholder='Month'
                        placeholderStyle={styles.yearst}
                        dropDownContainerStyle={[styles.dropdownchoose, open && { color: 'red' }]}
                        onSelectItem={(item) => week(item.value)}
                        textStyle={styles.yearst}
                    />
                    {renderw(value)}
                </Card>
                <TouchableOpacity onPress={(item) => genday(forturn)} style={{top:100}}>
                <Card style={styles.Toch}>
                    <ImageBackground
                        source={require('../month/1/jan.png')}
                        style={styles.png}
                    ></ImageBackground>
                </Card>
            </TouchableOpacity>  
                  
              
              
            </Card>

            <View style={styles.dayconpo}>
                <FlatList
                    data={data}
                    renderItem={(item) => createday(item)}
                    numColumns={4}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        flex: 1,
        justifyContent: 'right',
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 8,
    },
    monthandbutton: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        width: 290,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        padding: 8,
    },
    weekgen: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 8,
    },
    monthtext: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        margin: 20,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    yeartext: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        marginTop: -20,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    butoom: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        marginTop: 20,
        height: 50,
        width: 150,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    forbuttombox: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: 'transparent',
        zIndex: 1,
    },
    dropdownunder: {
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        zIndex: 1,
    },
    boxdrop: { // Use containerStyle instead of style
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        height: 50,
        width: 150,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',


    },
    dropdownchoose: {
        marginRight: 10,
        height: 120,
        width: 150,
        borderColor: 'gray',
        color: 'red',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    yearst: {
        fontSize: 20.5,
        textAlign: 'center',
    },
    flatListContent: {
        alignItems: 'left',
    },
    dayconpo: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'white',
    },
    createday: {
        width: 170,
        height: 325,
        margin: 5,
        marginLeft: 10,
        borderColor:'black',
        borderWidth:2,
        backgroundColor: 'white',
    },
    Toch: {
        width: 250,
        height: 220,
        zIndex: 1,
        margin: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black', 
    },
    png:{
        width:250,
        height:220,
        zIndex :1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 235, 
        height: 200, 
    },
});

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconbar from 'react-native-vector-icons/FontAwesome';
import { Card, Paragraph, Title } from 'react-native-paper';

export default function App(props) {
  const myIcon = <Icon name="calendar" size={30} color="black" />;
  const back = <Icon name="reply" size={30} color="black" style={styles.iconbar}/>;
  const add = <Icon name="reply" size={30} color="black" style={styles.iconbar}/>;
  const plus = <Icon name="plus-circle" size={30} color="black" style={styles.iconbar}/>;

  function getMonth(month) {
    switch (month) {
      case 1:
        return { monthName: 'January', year: 2024 };
      case 2:
        return { monthName: 'February', year: 2024 };
      case 3:
        return { monthName: 'March', year: 2024 };
      case 4:
        return { monthName: 'April', year: 2024 };
      case 5:
        return { monthName: 'May', year: 2024 };
      case 6:
        return { monthName: 'June', year: 2024 };
      case 7:
        return { monthName: 'July', year: 2024 };
      case 8:
        return { monthName: 'August', year: 2024 };
      case 9:
        return { monthName: 'September', year: 2024 };
      case 10:
        return { monthName: 'October', year: 2024 };
      case 11:
        return { monthName: 'November', year: 2024 };
      case 12:
        return { monthName: 'December', year: 2024 };
      default:
        return { monthName: 'Invalid Month', year: null };
    }
  }

  const { monthName, year } = getMonth(props.month);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menubar}>
      <Icon.Button name="reply" backgroundColor="transparent" size={40}></Icon.Button>

        <Card style={styles.daystand}>
          <Title>{monthName}</Title>
          <Paragraph>{year}</Paragraph>
        </Card>
       
 <TouchableOpacity style={styles.iconstyle}>
  <Title style={styles.textinic}>Week</Title>
  <Icon.Button
    name="plus"
    backgroundColor="transparent"
    size={40}
    style={{ alignItems: 'center', justifyContent: 'center' }}
  >
  </Icon.Button>
</TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menubar: {
    marginBottom: 5,
    borderRadius: 0,
    width: 1050,
    height: 75,
    alignItems: 'center',
    justifyContent: 'right',
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  iconbar: {
    margin: 10,
  },
  daystand:{
    flex:1,
    marginLeft:5,
    backgroundColor: 'white',
    // transparent
  },
  iconstyle:{
    backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    borderColor:'black',
    borderWidth: 2,
  },
  textinic:{
    alignItems: 'center',
   
  }
});

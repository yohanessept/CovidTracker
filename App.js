import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Greeting from './components/Greeting';
import Header from './components/Header';
import TextBody from './components/TextBody';
import TextSubBody from './components/TextSubBody';
import Global from './components/Global';
import DataIndonesia from './components/DataIndonesia';
import CovidIndonesia from './components/CovidIndonesia';
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Header/>
        </View>
        <View style={styles.boxSub}>
            <Greeting/>
            <Global/>
        </View>
        <View style={styles.boxSubBody}>
        <TextBody/>
        <DataIndonesia/>
        </View>
        <View style={styles.boxBody}>
          <TextSubBody/>
          <CovidIndonesia/>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#EBEBEB',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxHeader: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSub: {
      flex: 4,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSubBody: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'white'
},
  boxBody: {
      flex: 10
  }
})

export default App;
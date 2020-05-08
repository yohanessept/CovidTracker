import React from 'react';
import { View, StyleSheet} from 'react-native';
import Greeting from './components/Greeting';
import Header from './components/Header';
import LastUpdateGlobal from './components/LastUpdateGlobal';
import TextBody from './components/TextBody';
import TextSubBody from './components/TextSubBody';
import Global from './components/Global';
import LastUpdate from './components/LastUpdate';
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
            <LastUpdateGlobal/>
        </View>
        <View style={styles.boxSubBody}>
        <TextBody/>
        <DataIndonesia/>
        <LastUpdate/>
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
      flex: 8,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSub: {
      flex: 10,
      alignItems: 'center',
      backgroundColor: 'mistyrose'
  },
  boxSubBody: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: 'lightsalmon'
},
  boxBody: {
      flex: 12
  }
})

export default App;
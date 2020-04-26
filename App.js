import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from'./components/Greeting';
import Input from './components/Input';
import Layout from './components/Layout';
import List from './components/List';

class App extends Component {
  
    constructor(){
      super();
      this.state = {
        greeting : 'Selamat Datang.'
  }
    }

    componentDidMount(){

    }

    render() {
      return (
          // <Layout />
          <List />
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
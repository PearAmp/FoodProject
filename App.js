import * as React from 'react';

import { Text, View, StyleSheet } from 'react-native';


import Home from './components/Home';


export default function App() {
  return (
   <View style={style.container} >
     <Home/>
   </View>
  )
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },

});
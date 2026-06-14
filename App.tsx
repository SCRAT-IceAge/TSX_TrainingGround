/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type HMProps = {
  nombre?: string;
};

const HolaMundo: React.FC<HMProps> = ({ nombre = 'Mundo' }) => (
  <View style={styles.container}>
    <Text>Hola {nombre}</Text>
  </View>
);

const App: React.FC = () => (
  <View style={styles.container}>
    <HolaMundo nombre="Damian"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
*/

import React from 'react';
import { View, StyleSheet } from 'react-native';
import HMCentrado from './Lecciones/Leccion1/Ej1/HolaMundoCentrado';

const App: React.FC = () => (
  <View style={styles.container}>
    <HMCentrado/>
  </View>
);

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

export default App;

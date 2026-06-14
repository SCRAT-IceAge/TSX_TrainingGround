import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

const App: React.FC = () => {
  return (
    <View>
      <Text style={styles.container}>HEADER</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({ 
container: { 
flexDirection: 'row',
flex: 1, 
justifyContent: 'center',  
alignItems: 'center', 
backgroundColor: 'white', 
}, 
});
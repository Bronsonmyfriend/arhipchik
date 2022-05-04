import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default function App({ onSubmit }) {
const [value, setValue] = useState('')

const pressHandler = () => {
if (value.trim()) {
  onSubmit(value)
  setValue('')
} else {
  Alert.alert('Enter product name')
}
}

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} 
      onChangeText={text => setValue(text)}
      value={value}
      placeholder='Enter product name...'
      autoCorrect={true}
      autoCapitalize='sentences'
      />
      <Button title='Add product' onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input : {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'black'

  }
});

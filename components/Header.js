import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>Shopping list</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      paddingTop: 50,
      height: 100,
      backgroundColor: 'yellow'
    },
    text: {
      fontSize: 20,
      color: 'black',
      textAlign: 'center'
    }
  });
  
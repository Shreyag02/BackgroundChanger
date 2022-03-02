/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState('rgb(30, 30, 30)');

  const getRandomColor = () => {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256,
    )},${Math.floor(Math.random() * 256)})`;
    setBgColor(randomColor);
  };

  const resetBgColor = () => setBgColor('rgb(0, 0, 0)');

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity onPress={getRandomColor} style={styles.btn}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetBgColor} style={styles.btn}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 50,
    margin: 10,
    width: 100,
  },
  text: {
    fontWeight: '900',
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;

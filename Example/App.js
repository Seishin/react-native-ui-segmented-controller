import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {SegmentedController, SegmentedItem} from 'react-native-ui-segmented-controller';

const App = () => {
  const [color, setColor] = useState('Blue');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <SegmentedController style={styles.controller} onSegmentSelected={index => setColor(index == 0 ? 'Blue' : 'Red')}>
          <SegmentedItem title="Blue" />
          <SegmentedItem title="Red" />
        </SegmentedController>

        <View style={{...styles.content, borderColor: color.toLowerCase()}}>
          <Text style={styles.text}>{color}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controller: {
    margin: 16,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#eee',
    margin: 16,
    borderWidth: 8,
  },
  text: {
    fontSize: 48,
  },
});

export default App;

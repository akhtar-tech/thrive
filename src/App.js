import * as React from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import Rootstack from './asset/Rootstack';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#05375a" barStyle="light-content" hidden={false} />
        <Rootstack />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

});

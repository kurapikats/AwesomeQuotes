import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const zenImage = require('./assets/zen.png');

class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onStartHandler}>
          <Image source={zenImage} style={styles.buttonImage} />
          <Text style={styles.readyText}>Im ready to relax</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad',
  },
  readyText: {
    fontSize: 22,
    fontStyle: 'italic',
    marginTop: 20,
    color: '#ffffff',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#889dad',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20
  },
  buttonImage: {
    height: 200,
    width: 200
  }
});

export default StartScreen;

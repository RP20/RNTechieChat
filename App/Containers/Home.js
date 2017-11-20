import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
const window = Dimensions.get('window');

export default class Login extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Welcome ${navigation.state.params.screen}`,
            headerLeft: null
        }
    };

    render() {
      const { state, navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
            
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: window.height,
        width: window.width,
    }
  });
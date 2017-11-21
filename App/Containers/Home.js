import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


const window = Dimensions.get('window');

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: [],
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  static navigationOptions = ({ navigation }) => {
      return {
          title: `Welcome ${navigation.state.params.screen}`,
          headerLeft: null
      }
  };

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
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
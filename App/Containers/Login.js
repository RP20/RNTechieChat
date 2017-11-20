import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const window = Dimensions.get('window');

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            email: ''
        };
    }

    static navigationOptions = {
        header: () => null,
      };

    _onPressEnterChat() {
        const { navigate } = this.props.navigation;
        navigate('Home', { screen: this.state.userName });
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Image source={require('../Images/bg1.jpg')} style={styles.bgImageStyle}>*/}
                    
                    <Text style={styles.whoAreYou}>
                        Who are you ?
                    </Text>

                    <TextInput
                        style={styles.name}
                        maxLength={10}
                        autoFocus={true}
                        placeholder={'User Name'}
                        selectionColor={'#e67e22'}
                        placeholderTextColor={'#f39c12'}
                        autoCorrect={false}
                        onChangeText={(userName) => this.setState({userName})}
                        value={this.state.userName}
                    />

                    <TextInput
                        style={styles.email}
                        maxLength={30}
                        placeholder={'Valid Email'}
                        selectionColor={'#e67e22'}
                        placeholderTextColor={'#f39c12'}
                        autoCorrect={false}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />

                    <TouchableOpacity style={styles.enterToChatButton} onPress={() => this._onPressEnterChat()}>
                        <Text style={styles.enterToChatText}>
                            Enter
                        </Text>
                    </TouchableOpacity>

                {/*</Image>*/}

            </View>
        );
        }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        height: window.height,
        width: window.width,
    },
    bgImageStyle: {
       //flex: 1,
    },
    whoAreYou: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'HelveticaNeue-Light',
        color: '#8e44ad',
        marginBottom: 90,
    },
    name: {
        borderColor: '#f39c12',
        borderWidth: 1,
        width: window.width - 50,
        height: 50,
        borderRadius: 30,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#e74c3c'
    },
    email: {
        borderColor: '#f39c12',
        borderWidth: 1,
        width: window.width - 50,
        height: 50,
        borderRadius: 30,
        marginBottom: 60,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        textAlign: 'center'
    },
    enterToChatButton: {
        borderColor: '#9b59b6',
        borderWidth: 1,
        width: window.width - 100,
        height: 70,
        borderRadius: 30,
        marginBottom: 20,
        backgroundColor: '#9b59b6',
        justifyContent: 'center'
    },
    enterToChatText: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'HelveticaNeue-Light',
        color: '#ecf0f1',
        marginBottom: 20,
    }
  });
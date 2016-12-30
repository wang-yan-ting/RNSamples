'use strict';

import React, {Component} from 'react';
import {
  View,
  Navigator,
  Button,
  TouchableOpacity,
  Text}
  from 'react-native';
import SecondScene from "./SecondScene";
import NavBar from './NavBar'
import {NavBarStyle, TestVar} from './Style'

export default class FirstScene extends Component {

  _onPress() {
    var nav = this.props.navigator;
    if(nav) {
      nav.push({component:SecondScene});
    }
  }

  _renderScene() {
    return (
      <View style={{paddingTop:NavBarStyle.height}}>
      <Button title="hello, firsr scence!"
        onPress={this._onPress.bind(this)}
        />
      </View>
    );
  }

  render() {
    console.log("xxx", Navigator.NavigationBar.StylesIOS.General.TotalNavHeight);
    console.log("xxx", NavBarStyle.height);
    console.log("xxx", TestVar);
    return (
      <Navigator
        renderScene={this._renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={<NavBar
          title="First Scene"
          titleLeft="Back"
          actionLeft={() => {this.props.navigator.pop()}}
          titleRight="Forwrod"
          actionRight={this._onPress.bind(this)}
          />}
      />
    );
  }
}

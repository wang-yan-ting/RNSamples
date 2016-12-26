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

export default class FirstScene extends Component {

  _onPress() {
    var nav = this.props.navigator;
    if(nav) {
      nav.push({component:SecondScene});
    }
  }

  _renderScene() {
    return (
      <View style={{paddingTop:Navigator.NavigationBar.Styles.General.NavBarHeight}}>
      <Button title="hello, firsr scence!"
        onPress={this._onPress.bind(this)}
        />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        renderScene={this._renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
        }
      />
    );
  }
}

  var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          返回
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          主页
        </Text>
      </TouchableOpacity>
    );
  }
};

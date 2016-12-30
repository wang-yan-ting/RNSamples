import React, {Component} from 'react';
import {
  View,
  Navigator,
  Button,
  TouchableOpacity,
  Text}
  from 'react-native';
import NavBar from './NavBar'
import {NavBarStyle} from './Style'

export default class SecondScene extends Component {
  _back() {
    var nav = this.props.navigator;
    if(nav) {
      nav.pop();
    }
  }
  _renderScene() {
    return (
      <View style={{paddingTop:NavBarStyle.height}}>
      <Button title="hello, Second scence!"
        onPress={()=>{}}
        />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        renderScene={this._renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={<NavBar
          title="Second Scene"
          titleLeft="Back"
          actionLeft={() => {this.props.navigator.pop()}}
          />}
      />
    );
  }
}

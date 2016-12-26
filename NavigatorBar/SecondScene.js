import React, {Component} from 'react';
import {
  View,
  Navigator,
  Button,
  TouchableOpacity,
  Text}
  from 'react-native';

export default class SecondScene extends Component {
  _back() {
    var nav = this.props.navigator;
    if(nav) {
      nav.pop();
    }
  }
  _renderScene() {
    return (
      <View style={{paddingTop:Navigator.NavigationBar.Styles.General.NavBarHeight}}>
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

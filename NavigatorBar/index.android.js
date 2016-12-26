/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {AppRegistry,
  View,
  Navigator,
  Button,
  Text}
  from 'react-native';
import FirstScene from './FirstScene';
import SecondScene from "./SecondScene";

export default class TestProj extends Component {
    constructor(props) {
        super(props);
        this.state= {
          title:null
        }
    }

    _buttonOnClick() {
    }

    componentDidMount() {
      this.setState({
        title:this.props.title
      });
    }

    _renderScene(route, nav) {
      var page = route.component;

      if(page === FirstScene) {
        return (
          <FirstScene navigator={nav}/>
        );
      } else if(page === SecondScene) {
        return (
          <SecondScene navigator={nav}/>
        );
      }
    }


    render() {
        return (
          <Navigator
            initialRoute={{title:'hello, navigator - 1!', component:FirstScene}}
            renderScene={this._renderScene.bind(this)}
          />
        );
    }
}

AppRegistry.registerComponent('TestProj', () => TestProj);

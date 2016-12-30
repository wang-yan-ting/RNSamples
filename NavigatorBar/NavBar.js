'use strict';

import React, {Component} from 'react';
import {
  Navigator,
  TouchableOpacity,
  Text}
  from 'react-native';


export default class NavBar extends Component {

  _getRouteMapper(title, leftTitle, leftAction, rightTitle, rightAction) {
    return (
      {
        LeftButton(route, navigator, index, navState) {
          if(leftTitle) {
            return (
              <TouchableOpacity style={{justifyContent: 'space-between', marginLeft:8}}
                  onPress={leftAction}>
                <Text style={{color: 'white'}}>
                  {leftTitle}
                </Text>
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        },
        RightButton(route, navigator, index, navState) {
          if(leftTitle) {
            return (
              <TouchableOpacity style={{justifyContent: 'center', marginRight:8}}
                  onPress={rightAction}>
                <Text style={{color: 'white'}}>
                  {rightTitle}
                </Text>
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        },
        Title(route, navigator, index, navState) {
          return (
            <TouchableOpacity style={{alignItems:'center'}}>
              <Text style={{color: 'white', alignItems:'center', fontSize: 16}}>
                {title}
              </Text>
            </TouchableOpacity>
          );
        }
      }
    ); /* end of return */
  } /* end of getRouteMapper */



  render() {
    // let mapper = this._getRouteMapper();
    let title = this.props.title;
    let titleLeft = this.props.titleLeft;
    let actionLeft = this.props.actionLeft;
    let titleRight = this.props.titleRight;
    let actionRight = this.props.actionRight;

    let mapper = this._getRouteMapper(title, titleLeft, actionLeft, titleRight, actionRight);
    return (<Navigator.NavigationBar
        {...this.props}
        style={{backgroundColor: '#246dd5'}}
        navigationStyles={Navigator.NavigationBar.StylesIOS}
        routeMapper={mapper} />);
  }
}

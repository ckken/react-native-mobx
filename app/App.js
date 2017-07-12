import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from 'app/page/Home'
import About from 'app/page/About'
import {observer,appStore} from 'app/store/index'
import {StackNavigator} from 'react-navigation';
const MainNavigator = StackNavigator({
  Home: {screen: Home},
  About: {screen: About}
});
const storeName = {
  dev:'home/dev'
}
@observer
export default class App extends Component {
  componentDidMount() {
    // this.props.screenProps.store.register(storeName);
    // this.devData = this.props.screenProps.store[storeName.dev].data
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator screenProps={appStore} />
      </View>
    );
  }
}
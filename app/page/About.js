import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {inject,observer} from 'app/store/index'
@observer
export default class  extends Component {
static navigationOptions = {
    title: 'about',
  };
	render(){
		const { navigate ,goBack} = this.props.navigation;
		//console.log(`this.props.navigatio`,this.props.navigation)
		return (
			<View style={{flex: 1,marginTop:44,marginLeft:20}}>
			     <Text>About</Text>
			     <Button onPress={() => goBack()} title="to home" />
			  </View>
			)
	}
}
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {inject,observer} from 'app/store/index'
const storeName = {
  dev:'home/dev'
}
@observer
export default class  extends Component {
  static navigationOptions = {
    title: 'home',
  };
    componentDidMount() {
    	console.log(`this.props.screenProps.store`,this.props)
    //this.props.screenProps.store.store.register(storeName);
    
  }
	render(){
		const { navigate } = this.props.navigation;
		//console.log(`this.props.screenProps.store`,this.props.screenProps.store)
		//const {data} = this.props.screenProps.store.store[storeName.dev]
		return (
			<View style={{flex: 1,marginTop:44,marginLeft:20}}>
			     <Text>Home</Text>
			     <Button onPress={() => navigate('About')} title="to about" />
			     <Text>{}</Text>
			  </View>
			)
	}
}
import React from 'react';
import Touchable from 'react-native-platform-touchable';
import {View, Text, StyleSheet} from 'react-native';

export default class ItemJoke extends React.Component{
	render(){
		return(
		<View style={this.props.style}>
			<Touchable
				background={Touchable.Ripple('#ccc', false)}
				onPress={this.props.onPress}
			>
				<Text numberOfLines={1} style={styles.text}>
					{this.props.text}
				</Text>
			</Touchable>
		</View>
		)
	}
}

styles = StyleSheet.create({
	text: {
		fontSize: 20,
	},
});

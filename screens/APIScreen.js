import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native';

export default class APIScreen extends React.Component {
	static navigationOptions = {
		title: 'API',
	};

	render() {
		return (
			<View style={styles.container}>
				<WebView
					style={styles.web}
					useWebKit={true}
					source={{uri: 'http://www.icndb.com/api/'}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	web: {
		backgroundColor: '#fff',
	}
});

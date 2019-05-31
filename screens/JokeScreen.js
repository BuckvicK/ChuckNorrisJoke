import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const key = "key=trnsl.1.1.20190531T194228Z.0b7a6854d76e328a.2deccbdd2f7d190bf1c5fb495aa0a2a331d50fb6";
const lang = "&lang=en-ru";
const apiTranslate = "https://translate.yandex.net/api/v1.5/tr.json/translate?"+key+lang;

export default class JokeScreen extends React.Component{
	state = {
		data: [],
	};

	translate = async() =>{
		const item = this.props.navigation.state.params;
		const link = apiTranslate + "&text="+encodeURI(item.joke);
		const response = await fetch(link);
		const data = await response.json();
		this.setState({data});
	}

	render(){
		var item = this.props.navigation.state.params;
		console.log(this.state);
		return(
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={require('../src/img/chuck_norris.png')}
					style={styles.chuckImg}
				/>
				{ 
					item.categories.length != 0 ?
						<Text style={styles.jokeText}>
							Категория: {item.categories.map(item => (
								<Text key={item}>{item}</Text>
							))}
						</Text>
					: null
				}
				<View style={styles.textContainer}>
					<Text style={styles.jokeText}>
						{item.joke}
					</Text>
				</View>
				{
					this.state.data.length == 0 ?
						<View style={styles.button}>
							<Button
								onPress={this.translate}
								title="На русском"
								color="#fff"
							/>
						</View>
					: null
				}
				{
					this.state.data.length != 0 ?
						<View style={styles.textContainer}>
							<Text style={styles.jokeText}>
								{this.state.data.text}
							</Text>
						</View>
					: null
				}
			</View>
		</ScrollView>
		)
	}
}

styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
	},
	textContainer: {
		flex: 1,
		marginVertical: 10,
	},
	chuckImg: {
		height: 250,
		width: 250,
		alignSelf: 'center',
		marginBottom: 10,
	},
	jokeText: {
		fontSize: 16,
	},
	button: {
		backgroundColor: '#3498db',
		fontSize: 20,
		borderRadius: 100,
		width: 200,
		alignSelf: 'center',
	},
})

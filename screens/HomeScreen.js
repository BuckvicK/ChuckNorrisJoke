import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button
} from 'react-native';
import ItemJoke from '../src/ItemJoke';
import { TextInput } from 'react-native-gesture-handler';

const apiURL = "http://api.icndb.com/jokes/random/";
const escapeChar = "?escape=javascript";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Jokes',
  };

  state = {
    jokes: [],
    countJoke: "0",
  };

  count = "10";

  createLINK(){
    link = apiURL + this.count + escapeChar;
    return link;
  }

  downloadJokes = async () => {
    const link = this.createLINK();
    const response = await fetch(link);
    const data = await response.json();
    const jokes = data.value;
    this.setState({jokes});
    this.setState({countJoke: this.count});
  }

  componentDidMount(){
    this.downloadJokes();
  }

  render() {
    const { jokes } = this.state;
    console.log(this.state);
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={70}
        style={styles.container}
        behavior="padding"
        enabled
      >
          <ScrollView style={styles.containerJoke}>
              {
                this.count ? 
                jokes.map(item => (
                  <ItemJoke
                    text={item.joke}
                    key={item.id}
                    onPress={() => this.props.navigation.navigate('Joke', item)}
                    style={styles.itemJoke}
                  />
                )) : null
              }
          </ScrollView>
          <View style={styles.containerTabBar}>
            <TextInput
              style={styles.input}
              placeholder="Количество шуток"
              keyboardType="number-pad"
              onChangeText={(countJoke) => this.count = countJoke}
            />
            <View style={styles.button}>
              <Button
                onPress={this.downloadJokes}
                title="Загрузить"
                color="#fff"
              />
            </View>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerJoke: {
    flex: 5,
  },
  containerTabBar: {
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    alignItems: 'center',
  },
  tabBarText: {
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    fontSize: 20,
    paddingVertical: 5,
    width: 200,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#3498db',
    fontSize: 20,
    borderRadius: 100,
    width: 200,
  },
  itemJoke: {
    fontSize: 20,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
  }
});

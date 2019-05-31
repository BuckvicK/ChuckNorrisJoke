import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import APIScreen from '../screens/APIScreen';
import JokeScreen from '../screens/JokeScreen';

const Jokes = createStackNavigator({
	Home: HomeScreen,
	Joke: JokeScreen,
},
{
	initialRouteKey: 'Home',
}
);

Jokes.navigationOptions = {
	tabBarLabel: 'Jokes',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={`ios-information-circle${focused ? '' : '-outline'}`
			}
		/>
	),
};

const LinksStack = createStackNavigator({
	Links: APIScreen,
});

LinksStack.navigationOptions = {
	tabBarLabel: 'API',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={'ios-link'}
		/>
	),
};

export default createBottomTabNavigator({
	Jokes,
	LinksStack,
});

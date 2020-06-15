import React from 'react';

import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
	const greeting = 'Hi There'
	const testtext = <Text style = {styles.textstyle3}>Bye There</Text>

	return <View>
		<Text style = {styles.textstyle}>This is Component Screen 2</Text>
		<Text style = {styles.textstyle2}>{greeting}</Text>
		{testtext}
	</View>
};

const styles = StyleSheet.create({
	textstyle: {
		fontSize: 15
	},
	textstyle2: {
		fontSize: 30
	},
	textstyle3: {
		fontSize: 45
	}
});

export default ComponentScreen;
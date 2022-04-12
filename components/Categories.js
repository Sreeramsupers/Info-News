import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

import { categories } from '../config/api';

export default class Categories extends Component {
	state = {};
	render() {
		return (
			<View>
				<Text style={{ ...styles.heading, color: 'black' }}>Popular Categories</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{categories.slice(1, categories.length).map((category, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => this.props.navigation.navigate('GetNews', { category })}>
							<View>
								<Text style={styles.text}>
									{category.name.charAt(0).toUpperCase() + category.name.substring(1).toLowerCase()}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
		fontSize: 19,
		margin: 10,
		borderRadius: 10,
	},
	heading: {
		fontWeight: '700',
		marginLeft: 10,
		marginBottom: 10,
		marginTop: 10,
		fontSize: 24,
	},
});

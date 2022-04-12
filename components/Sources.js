import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

import { sources } from '../config/api';

export default class Sources extends Component {
	render() {
		return (
			<View>
				<Text style={{ ...styles.heading, color: 'black' }}>Popular Sources</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{sources.map((source, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => this.props.navigation.navigate('GetSources', { source })}>
							<View style={{ margin: 10 }}>
								{source.pic ? (
									<Image source={{ uri: source.pic }} style={{ height: 150, width: 150 }} />
								) : (
									<Image
										source={{ uri: require('../assets/placeholder.png') }}
										style={{ height: 150, width: 150 }}
									/>
								)}
								<Text style={styles.text}>{source.name}</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	heading: {
		fontWeight: '700',
		marginLeft: 10,
		marginBottom: 10,
		fontSize: 24,
	},
	text: {
		fontSize: 15,
		fontWeight: '400',
		textAlign: 'center',
		marginTop: 5,
	},
});

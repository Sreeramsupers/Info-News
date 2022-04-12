import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				{this.props.ShowBackButton ? (
					<TouchableOpacity
						style={styles.left}
						onPress={() => this.props.navigation.navigate('Home')}>
						<SimpleLineIcons name='arrow-left' size={15} color='black' />
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={styles.left}
						onPress={() => this.props.navigation.navigate('Settings')}>
						<Ionicons name='ios-settings-outline' size={24} color='black' />
					</TouchableOpacity>
				)}

				<Text style={styles.center}>{this.props.headText}</Text>

				{/* <TouchableOpacity style={styles.right}>
					<Text style={styles.text}>
						<AntDesign name='arrowright' size={24} color='black' />
					</Text>
				</TouchableOpacity> */}
				{this.props.home ? (
					<TouchableOpacity
						style={styles.left}
						onPress={() => this.props.navigation.navigate('AllNews')}>
						<Text style={styles.text}>All News</Text>
						<SimpleLineIcons name='arrow-right' size={15} color='black' />
					</TouchableOpacity>
				) : this.props.settings ? (
					<TouchableOpacity
						style={styles.right}
						onPress={() => this.props.navigation.navigate('Home')}>
						<Text style={styles.text}>Done</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={styles.right}
						onPress={() => this.props.navigation.navigate('Settings')}>
						<Ionicons name='ios-settings-outline' size={24} color='black' />
					</TouchableOpacity>
				)}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		alignItems: 'center',
		borderBottomColor: 'black',
		borderBottomWidth: 0.5,
	},
	center: {
		paddingBottom: 6,
		borderBottomColor: 'black',
		borderBottomWidth: 5,
		borderRadius: 10,
		fontSize: 16,
		fontWeight: '700',
		textAlign: 'center',
	},
	left: {
		flexDirection: 'row',
		alignItems: 'center',
		width: 80,
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 16,
		fontWeight: '700',
		textAlign: 'center',
	},
	right: {
		width: 80,
		alignItems: 'flex-end',
	},
});

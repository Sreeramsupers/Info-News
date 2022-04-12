import { Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';

import Categories from '../components/Categories';
import Sources from '../components/Sources';
import HomeNews from '../components/HomeNews';
import Header from '../components/Header';
import AllNews from './AllNews';
import Settings from './Settings';

export default class HomeScreen extends Component {
	render() {
		const showBackButton = false;
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header
					headText='Home'
					navigation={this.props.navigation}
					ShowBackButton={showBackButton}
					home
				/>
				<Categories navigation={this.props.navigation} />
				<Sources navigation={this.props.navigation} />

				<HomeNews navigation={this.props.navigation} />
				{/* <Settings navigation={this.props.navigation} /> */}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({});

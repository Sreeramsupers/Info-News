import { Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import Header from '../components/Header';
import SettingComponent from '../components/SettingComponent';

export default function Settings({ navigation }) {
	const [country, setCountry] = React.useState('India');

	const showBackButton = true;
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Header
				headText='Settings'
				navigation={navigation}
				ShowBackButton={showBackButton}
				settings
			/>

			<SettingComponent country={country} setCountry={setCountry} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({});

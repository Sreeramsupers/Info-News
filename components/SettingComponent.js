import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { nativeApplicationVersion } from 'expo-application';
import * as Device from 'expo-device';

import AppModal from './AppModal';
import SettingsList from 'react-native-settings-list';
import Icon from './Icon';
import { useEffect } from 'react';
// import { countries } from '../config/api';

export default function SettingComponent({ country, setCountry }) {
	const [modalVisible, setModalVisible] = React.useState(false);
	const [switchValue, setSwitchValue] = React.useState(false);

	const saveSetting = (key, value) => {
		AsyncStorage.setItem(key, value);
	};

	const onValueChange = (value) => {
		setSwitchValue(value);
	};

	const settingOptions = {
		prefernces: [
			{
				title: 'Country',
				subtitle: country,
				onPress: () => {
					setModalVisible(true);
				},
			},
			{
				title: 'News Update',
				subtitle: 'Latest',
				onPress: () => {
					Alert.alert('You are on the latest update');
				},
			},
			// Theme goes here
		],
		appDetails: [
			{
				title: 'App Version',
				subtitle: nativeApplicationVersion,
				onPress: () => {
					Alert.alert(`Your App version is ${settingOptions.appDetails[0].subtitle}`);
				},
			},
			{
				title: 'Update',
				subtitle: '1.5.0',
				onPress: () => {
					Alert.alert(`You are on the latest update`);
				},
			},
			{
				title: 'API by',
				subtitle: 'Saurav Kanchan',
				onPress: () => {
					Alert.alert(`@https://github.com/SauravKanchan/NewsAPI`);
				},
			},
		],
		deviceDetails: [
			{
				title: 'Device Name',
				subtitle: Device.deviceName != null ? Device.deviceName : 'Unknown',
				onPress: () => {
					Alert.alert(`Your Device Name is ${settingOptions.deviceDetails[0].subtitle}`);
				},
			},
			{
				title: 'Device Brand',
				subtitle: Device.brand != null ? Device.brand : 'Unknown',
				onPress: () => {
					Alert.alert(`Your Device Brand is ${settingOptions.deviceDetails[1].subtitle}`);
				},
			},
			{
				title: 'Device Model',
				subtitle: Device.modelName != null ? Device.modelName : 'Unknown',
				onPress: () => {
					Alert.alert(`Your Device model is ${settingOptions.deviceDetails[2].subtitle}`);
				},
			},
			{
				title: 'Device Version',
				subtitle: Device.osVersion != null ? Device.osVersion : 'Unknown',
				onPress: () => {
					Device.osName == 'Android'
						? Alert.alert(`Your Android Version is ${settingOptions.deviceDetails[3].subtitle}`)
						: Device.osName == 'iOS'
						? `Your iOs Version is ${settingOptions.deviceDetails[2].subtitle}`
						: `Your Os Version is ${settingOptions.deviceDetails[2].subtitle}`;
				},
			},
		],
	};
	const options = [
		{
			code: 'in',
			name: 'India',
			selected: country == 'India' ? true : false,
			onPress: () => {
				saveSetting('Country', JSON.stringify(options[0]));
				setCountry('India');
				setModalVisible(false);
			},
		},
		{
			code: 'us',
			name: 'USA',
			selected: country === 'USA' ? true : false,
			onPress: () => {
				saveSetting('Country', JSON.stringify(options[1]));
				setCountry('USA');
				setModalVisible(false);
			},
		},
		{
			code: 'au',
			name: 'Australia',
			selected: country === 'Australia' ? true : false,
			onPress: () => {
				saveSetting('Country', JSON.stringify(options[2]));
				setCountry('Australia');
				setModalVisible(false);
			},
		},
		{
			code: 'ru',
			name: 'Russia',
			selected: country === 'Russia' ? true : false,
			onPress: () => {
				saveSetting('Country', JSON.stringify(options[3]));
				setCountry('Russia');
				setModalVisible(false);
			},
		},
		{
			code: 'fr',
			name: 'France',
			selected: country === 'France' ? true : false,
			onPress: () => {
				saveSetting('Country', JSON.stringify(options[4]));
				setCountry('France');
				setModalVisible(false);
			},
		},
		{
			code: 'gb',
			name: 'United Kingdom',
			selected: country === 'United Kingdom' ? true : false,
			onPress: () => {
				saveSetting('Country', JSON.stringify(options[5]));
				setCountry('United Kingdom');
				setModalVisible(false);
			},
		},
	];

	const getSettings = async () => {
		const countryOption = JSON.parse(await AsyncStorage.getItem('Country'));

		if (countryOption) {
			setCountry(countryOption.name);
		}
	};

	useEffect(() => {
		getSettings();
	}, []);

	return (
		<>
			<AppModal
				modalVisible={modalVisible}
				modalFooter={<></>}
				modalBody={
					<View>
						{options.map((country, index) => (
							<View key={index}>
								<TouchableOpacity
									onPress={country.onPress}
									style={{ ...styles.optionContainer, flexDirection: 'row', alignItems: 'center' }}>
									{country.selected && <Icon size={17} type='material' name='check' />}
									<Text style={{ fontSize: 17, paddingLeft: country.selected ? 15 : 30 }}>
										{country.name}
									</Text>
								</TouchableOpacity>
							</View>
						))}
					</View>
				}
				title='Change Country'
				setModalVisible={setModalVisible}
				closeOnTouchOutside={false}
			/>
			<View>
				<SettingsList>
					<SettingsList.Header headerText='Prefrences' />
					{settingOptions.prefernces.map((option, index) => (
						<SettingsList.Item
							key={index}
							itemWidth={60}
							title={option.title}
							hasNavArrow={true}
							titleInfo={option.subtitle}
							onPress={option.onPress}
							// hasSwitch={true}
							// switchState={switchValue}
							// switchOnValueChange={onValueChange}
						/>
					))}
					<SettingsList.Header headerText='App Details' />
					{settingOptions.appDetails.map((option, index) => (
						<SettingsList.Item
							key={index}
							itemWidth={60}
							title={option.title}
							hasNavArrow={true}
							titleInfo={option.subtitle}
							onPress={option.onPress}
							// hasSwitch={true}
							// switchState={switchValue}
							// switchOnValueChange={onValueChange}
						/>
					))}
					<SettingsList.Header headerText='Device Details' />
					{settingOptions.deviceDetails.map((option, index) => (
						<SettingsList.Item
							key={index}
							itemWidth={60}
							title={option.title}
							hasNavArrow={true}
							titleInfo={option.subtitle}
							onPress={option.onPress}
							// hasSwitch={true}
							// switchState={switchValue}
							// switchOnValueChange={onValueChange}
						/>
					))}
				</SettingsList>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	optionContainer: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: 'black',
		padding: 15,
	},
});

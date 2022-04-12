import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
	Text,
	StyleSheet,
	View,
	ActivityIndicator,
	ScrollView,
	Image,
	TouchableOpacity,
	Dimensions,
	Alert,
} from 'react-native';
import Header from '../components/Header';
import axios from 'axios';

const BASE_URL = 'https://saurav.tech/NewsAPI/';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function AllNews({ navigation }) {
	const [news, setNews] = React.useState([]);
	const [countryCode, setCountryCode] = React.useState('in');

	const getSettings = async () => {
		const countryOption = JSON.parse(await AsyncStorage.getItem('Country'));

		if (countryOption) {
			setCountryCode(countryOption.code);
			console.log(countryOption.code);
		}
	};

	useEffect(() => {
		navigation.addListener('focus', async () => {
			axios
				.get(`${BASE_URL}/top-headlines/category/general/${countryCode}.json'`)
				.then((res) => res.json())
				.then((response) => {
					setNews(response.articles);
				})
				.catch((error) => Alert.alert(error));
		});
	}, []);

	const showBackButton = true;
	return (
		<View>
			<Header headText='All News' navigation={navigation} ShowBackButton={showBackButton} />
			<View style={styles.container}>
				{news.length === 0 ? (
					<ActivityIndicator style={styles.loader} size='large' color='black' />
				) : (
					<ScrollView showsVerticalScrollIndicator={false}>
						{news.slice(0, 40).map((news, index) => (
							<TouchableOpacity
								key={index}
								onPress={() =>
									this.props.navigation.navigate('WebView', {
										url: news.url,
									})
								}>
								<View style={{ ...styles.flexContainer, backgroundColor: 'white' }}>
									{news?.urlToImage ? (
										<Image source={{ uri: `${news.urlToImage}` }} style={styles.image} />
									) : (
										<Image source={require('../assets/placeholder.png')} style={styles.image} />
									)}
									<Text style={styles.text}>{news.title}</Text>
								</View>
							</TouchableOpacity>
						))}
					</ScrollView>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	heading: {
		fontWeight: '700',
		marginLeft: 10,
		marginBottom: 10,
		fontSize: 24,
	},
	loader: {
		width: deviceWidth,
		height: deviceHeight,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 10,
	},
	flexContainer: {
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 10,
		elevation: 4,
		width: deviceWidth - 30,
		marginVertical: 7,
	},
	text: {
		width: deviceWidth - 130,
		paddingLeft: 10,
		paddingTop: 5,
	},
});

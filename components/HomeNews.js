import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	View,
	ActivityIndicator,
	ScrollView,
	Image,
	TouchableOpacity,
	Dimensions,
} from 'react-native';

const BASE_URL = 'https://saurav.tech/NewsAPI/';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class HomeNews extends Component {
	state = {
		news: [],
	};
	componentDidMount() {
		fetch(`${BASE_URL}/top-headlines/category/general/in.json`)
			.then((res) => res.json())
			.then((response) => {
				this.setState({
					news: response.articles,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.news.length === 0 ? (
					<ActivityIndicator style={styles.loader} size='large' color='black' />
				) : (
					<View>
						<Text style={styles.heading}>Breaking News In India</Text>
						{this.state.news.slice(0, 40).map((news, index) => (
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
					</View>
				)}
			</View>
		);
	}
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

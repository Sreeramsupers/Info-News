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
import Header from '../components/Header';

const BASE_URL = 'https://saurav.tech/NewsAPI/';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class GetNews extends Component {
	state = {
		news: [],
	};
	componentDidMount() {
		this.props.navigation.setOptions({
			title:
				this.props.route.params.category.name.charAt(0).toUpperCase() +
				this.props.route.params.category.name.substring(1).toLowerCase() +
				' News',
		});

		fetch(`${BASE_URL}/top-headlines/category/${this.props.route.params.category.name}/in.json`)
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
		const showBackButton = true;
		return (
			<View>
				<Header
					headText={
						this.props.route.params.category.name.charAt(0).toUpperCase() +
						this.props.route.params.category.name.substring(1).toLowerCase() +
						' News'
					}
					navigation={this.props.navigation}
					ShowBackButton={showBackButton}
				/>
				<View style={styles.container}>
					{this.state.news.length === 0 ? (
						<ActivityIndicator style={styles.loader} size='large' color='black' />
					) : (
						<ScrollView showsVerticalScrollIndicator={false}>
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
						</ScrollView>
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import GetNews from './screens/GetNews';
import WebViewComponent from './components/WebView';
import GetSources from './screens/GetSources';
import AllNews from './screens/AllNews';
import Settings from './screens/Settings';

export default function App() {
	const Stack = createStackNavigator();
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='GetNews' component={GetNews} />
					<Stack.Screen name='GetSources' component={GetSources} />
					<Stack.Screen name='AllNews' component={AllNews} />
					<Stack.Screen name='Settings' component={Settings} />
					<Stack.Screen
						name='WebView'
						component={WebViewComponent}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
});

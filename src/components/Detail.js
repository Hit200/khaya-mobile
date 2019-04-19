import React from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	ScrollView,
	Fragment,
	TouchableWithoutFeedback
} from 'react-native';
import { Appbar, Text, Button, Card } from 'react-native-paper';
import Stars from 'react-native-stars';
import { Ionicons } from '@expo/vector-icons';

const Details = props => (
	<Fragment>
		<Appbar.Header style={styles.AppBarTheme}>
			<Appbar.BackAction onPress={() => console.log('Going Back')} />
			<Appbar.Content title="Khaya" subtitle="Property Details" />
			<Appbar.Action icon="menu" onPress={() => props.navigation.navigate('Login')} />
		</Appbar.Header>
		<View style={styles.Container}>
			<View style={styles.Filters}>
				<Button
					color={'#ffffff'}
					style={styles.Button}
					mode="outlined"
					onPress={() => console.log('Pressed')}>
					Apply Filters
				</Button>
			</View>
		</View>
		<ScrollView horizontal={true}>
			<FlatList
				data={[
					'https://via.placeholder.com/150',
					'https://via.placeholder.com/150',
					'https://via.placeholder.com/150'
				]} //media
				renderItem={({ item }) => {
					<Card>
						<Card.Content>
							<View>
								<Title>15 Skymaster Drive, Belvedere, Harare</Title>
							</View>
							<View style={styles.Filters}>
								<Stars
									display={4.0}
									spacing={8}
									count={5}
									starSize={20}
									backingColor="white"
									fullStar={<Ionicons name="md-star" size={20} color="black" />}
									emptyStar={<Ionicons name="md-star" size={20} color="white" />}
								/>
								<Text>540 Reviews</Text>
							</View>
							<View>
								<Text>When you something, something, this is the property description.</Text>
							</View>
						</Card.Content>
						<Card.Cover
							source={{
								uri: item
							}}
						/>
					</Card>;
				}}
			/>
		</ScrollView>
	</Fragment>
);

const styles = StyleSheet.create({
	AppBarTheme: {
		backgroundColor: '#000000',
		color: '#ffffff'
	},
	Container: {
		marginLeft: 40,
		marginRight: 40,
		marginTop: 5,
		marginBottom: 5
	},

	Title: {
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 40,
		marginBottom: 5
	},
	Divider: {
		borderBottomColor: '#000000',
		borderBottomWidth: 0.5,
		marginTop: 20
	},
	Filters: {
		paddingTop: 10
	},
	Button: {
		color: '#ffffff',
		backgroundColor: '#000000',
		borderRadius: 15,
		width: 150,
		marginTop: 20,
		marginBottom: 20
	},
	SearchBar: {
		borderColor: '#000000',
		borderWidth: 2
	},
	Info: {
		marginTop: 10
	}
});

export default Details;

import React from 'react';
import { StyleSheet, View, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Appbar, Text, Button, Searchbar, Card } from 'react-native-paper';
import Stars from 'react-native-stars';
import { Ionicons } from '@expo/vector-icons';
import { InstantSearch } from 'react-instantsearch/native';
import { connectSearchBox, connectInfiniteHits } from 'react-instantsearch/connectors';

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
	return (
		<Searchbar
			placeholder="Search eg unlimited WIFI"
			value={currentRefinement}
			onChangeText={text => refine(text)}
			style={styles.SearchBar}
			clearButtonMode="always"
			spellCheck={false}
			autoCorrect={false}
			autoCapitalize="none"
		/>
	);
});

const Results = connectInfiniteHits(({ hits, hasMore, refine }) => {
	const onEndReached = () => {
		if (hasMore) {
			refine();
		}
	};
	return (
		<FlatList
			data={hits}
			onEndReached={onEndReached}
			keyExtractor={property => property.objectID}
			renderItem={({ item }) =>
				hits === [] ? <Text>No Houses Found</Text> : <Property pty={item} id={item.objectID} />
			}
		/>
	);
});

const Property = ({ pty, id }, props) => {
	return (
		<TouchableWithoutFeedback>
			<Card onPress={() => props.navigation.navigate('Details', { id })}>
				<Card.Title subtitle={pty.location} />
				<Card.Cover
					source={{
						uri: pty.media[0]
					}}
				/>
				<Card.Content>
					<View style={styles.Filters}>
						<Stars
							display={pty.overallRating}
							spacing={8}
							count={5}
							starSize={20}
							backingColor="white"
							fullStar={<Ionicons name="md-star" size={20} color="black" />}
							emptyStar={<Ionicons name="md-star" size={20} color="white" />}
						/>
						<Text>{pty.verified === false ? 'Not Verified' : 'Verified'}</Text>
					</View>
					<View>
						<Text style={styles.Info}>
							{pty.shared === true ? 'Shared - ' : ''} {pty.room.length} rooms
						</Text>
						<Text style={styles.Info}>
							${pty.minPrice} - ${pty.maxPrice} / month
						</Text>
					</View>
				</Card.Content>
			</Card>
		</TouchableWithoutFeedback>
	);
};
const Properties = props => (
	<InstantSearch
		appId="D97UPSIQ04"
		apiKey="4aab387d93c9f7129edfe6d2bda44ff0"
		indexName="Properties">
		<Appbar.Header style={styles.AppBarTheme}>
			<Appbar.BackAction onPress={() => console.log('Going Back')} />
			<Appbar.Content title="Khaya" subtitle="Home" />
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
			<SearchBox />
		</View>
		<ScrollView>
			<Results />
		</ScrollView>
	</InstantSearch>
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
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
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

export default Properties;

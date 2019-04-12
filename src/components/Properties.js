import React, { Fragment } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Appbar, Text, Button, Switch, Searchbar, Card } from 'react-native-paper';
import Stars from 'react-native-stars';
import { Ionicons } from '@expo/vector-icons';

const Properties = () => (
	<Fragment>
		<Appbar.Header style={styles.AppBarTheme}>
			<Appbar.BackAction onPress={() => console.log('Going Back')} />
			<Appbar.Content title="Khaya" subtitle="Home" />
			<Appbar.Action icon="menu" onPress={() => console.log('See Options')} />
		</Appbar.Header>
		<View style={styles.Container}>
			<Text style={{ marginBottom: -30 }}>Show Map</Text>
			<View style={styles.Filters}>
				<Switch
					color={'#000000'}
					value={false}
					onValueChange={() => console.log('Switch Toggled')}
				/>
				<Button
					color={'#ffffff'}
					style={styles.Button}
					mode="outlined"
					onPress={() => console.log('Pressed')}>
					Apply Filters
				</Button>
			</View>
			<Searchbar
				placeholder="Search ex: unlimited WIFI"
				onChangeText={query => console.log('Searched here')}
				style={styles.SearchBar}
			/>
		</View>
		<ScrollView>
			<Card>
				<Card.Title subtitle="15 Skymaster Drive, Belvedere, Harare" />
				<Card.Cover
					source={{
						uri:
							'https://images.pexels.com/photos/2063258/pexels-photo-2063258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
					}}
				/>
				<Card.Content>
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
						<Text>Not Verified</Text>
					</View>
					<View>
						<Text style={styles.Info}>Shared - 9 rooms</Text>
						<Text style={styles.Info}>$100 - $150 / month</Text>
					</View>
				</Card.Content>
			</Card>
			<Card>
				<Card.Title subtitle="15 Skymaster Drive, Belvedere, Harare" />
				<Card.Cover
					source={{
						uri:
							'https://images.pexels.com/photos/2063258/pexels-photo-2063258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
					}}
				/>
				<Card.Content>
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
						<Text>Not Verified</Text>
					</View>
					<View>
						<Text style={styles.Info}>Shared - 9 rooms</Text>
						<Text style={styles.Info}>$100 - $150 / month</Text>
					</View>
				</Card.Content>
			</Card>
			<Card>
				<Card.Title subtitle="15 Skymaster Drive, Belvedere, Harare" />
				<Card.Cover
					source={{
						uri:
							'https://images.pexels.com/photos/2063258/pexels-photo-2063258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
					}}
				/>
				<Card.Content>
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
						<Text>Not Verified</Text>
					</View>
					<View>
						<Text style={styles.Info}>Shared - 9 rooms</Text>
						<Text style={styles.Info}>$100 - $150 / month</Text>
					</View>
				</Card.Content>
			</Card>
			<Card>
				<Card.Title subtitle="15 Skymaster Drive, Belvedere, Harare" />
				<Card.Cover
					source={{
						uri:
							'https://images.pexels.com/photos/2063258/pexels-photo-2063258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
					}}
				/>
				<Card.Content>
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
						<Text>Not Verified</Text>
					</View>
					<View>
						<Text style={styles.Info}>Shared - 9 rooms</Text>
						<Text style={styles.Info}>$100 - $150 / month</Text>
					</View>
				</Card.Content>
			</Card>
			<Card>
				<Card.Title subtitle="15 Skymaster Drive, Belvedere, Harare" />
				<Card.Cover
					source={{
						uri:
							'https://images.pexels.com/photos/2063258/pexels-photo-2063258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
					}}
				/>
				<Card.Content>
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
						<Text>Not Verified</Text>
					</View>
					<View>
						<Text style={styles.Info}>Shared - 9 rooms</Text>
						<Text style={styles.Info}>$100 - $150 / month</Text>
					</View>
				</Card.Content>
			</Card>
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

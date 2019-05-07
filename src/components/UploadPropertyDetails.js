import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

class UploadPropertyDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			owner: '',
			description: '',
			facilities: [],
			media: this.props.navigation.getParam('images'),
			location: '',
			shared: false,
			room: [],
			roomPrices: [],
			roomPrefs: [],
			roomCapacities: [],
			roomNumbers: []
		};
	}

	getCurrentUser = () => {
		fetch(`http://khaya-api.herokuapp.com/getCurrentUser`)
			.then(res => res.json())
			.then(owner => this.setState({ owner }))
			.catch(error => console.log(error));
	};

	setRoomPrefs = () => {
		const { roomNumbers, roomPrices, roomPrefs, roomCapacities } = this.state;
		const result = [];

		for (let i = 0; i < roomNumbers.length; i++) {
			result.push({
				number: roomNumbers[i],
				shared: roomCapacities[i] !== 1 ? true : false,
				price: roomPrices[i],
				current: 0,
				gender: roomPrefs[i],
				capacity: roomCapacities[i]
			});
		}

		return this.setState({ room: result });
	};

	handleSubmit = () => {
		this.getCurrentUser();
		this.setRoomPrefs();

		console.log(this.state);

		const { roomCapacities, roomNumbers, roomPrefs, roomPrices, ...rest } = this.state;

		fetch(`https://khaya-api.herokuapp.com/newProperty`, {
			method: 'POST',
			body: JSON.stringify(rest),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(res => {
				console.log(res);
				return this.props.navigation.navigate('Login');
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<ScrollView>
				<View style={styles.Container}>
					<Image
						source={require('../../assets/logo.png')}
						resizeMode="contain"
						style={styles.Image}
					/>
				</View>
				<View style={styles.Divider} />
				<View style={styles.Container}>
					<Text style={styles.Text}>ADD NEW PROPERTY LISTING</Text>
				</View>
				<View style={styles.Form}>
					<TextInput
						mode="outlined"
						label="Description"
						value={this.state.description}
						onChangeText={text => this.setState({ description: text })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Facilities"
						value={this.state.facilities}
						onChangeText={text => this.setState({ facilities: text.split(',') })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Address"
						value={this.state.location}
						onChangeText={text => this.setState({ location: text })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Shared"
						value={this.state.shared}
						onChangeText={text => this.setState({ shared: JSON.parse(text) })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Room Numbers"
						value={this.state.roomNumbers}
						onChangeText={text => this.setState({ roomNumbers: text.split(',') })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Room Prices"
						value={this.state.roomPrices}
						onChangeText={text => this.setState({ roomPrices: text.split(',') })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Room Capacities"
						value={this.state.roomCapacities}
						onChangeText={text => this.setState({ roomPrefs: text.split(',').map(Number) })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Room Preferences"
						value={this.state.roomPrefs}
						onChangeText={text => this.setState({ confirm: text.split(',') })}
						style={styles.Inputs}
					/>
				</View>
				<View style={styles.Container}>
					<Button
						color={'#000000'}
						style={styles.Button}
						mode="contained"
						onPress={() => this.handleSubmit()}>
						Add Property Listing
					</Button>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	Text: {
		textAlign: 'left',
		fontWeight: 'bold',
		marginTop: 60,
		marginBottom: 5
	},
	Divider: {
		borderBottomColor: '#000000',
		borderBottomWidth: 0.5,
		marginTop: 2
	},
	Image: {
		width: 200,
		marginTop: 20
	},

	Container: {
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	Button: {
		color: '#000000',
		borderRadius: 15,
		width: 200,
		marginTop: 20,
		marginBottom: 20
	},
	Form: {
		paddingLeft: 40,
		paddingRight: 40,
		marginTop: 5
	},
	Inputs: {
		marginBottom: 20
	}
});

export default UploadPropertyDetails;

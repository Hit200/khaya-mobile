import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

class AsStudent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			contact: '',
			address: '',
			role: 'student',
			password: '',
			confirm: ''
		};
	}

	handleSubmit = () => {
		const { confirm, ...rest } = this.state;
		console.log(rest);

		fetch(`https://khaya-api.herokuapp.com/signUp`, {
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
					<Text style={styles.Text}>REGISTER AS STUDENT</Text>
				</View>
				<View style={styles.Form}>
					<TextInput
						mode="outlined"
						label="Name"
						value={this.state.username}
						onChangeText={text => this.setState({ username: text })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Email"
						value={this.state.email}
						onChangeText={text => this.setState({ email: text })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Contact"
						value={this.state.contact}
						onChangeText={text => this.setState({ contact: text })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Address"
						value={this.state.address}
						onChangeText={text => this.setState({ address: text })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Password"
						value={this.state.password}
						onChangeText={text => this.setState({ password: text })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Confirm Password"
						underlineColor={this.state.password === this.state.confirm ? 'purple' : 'red'}
						value={this.state.confirm}
						onChangeText={text => this.setState({ confirm: text })}
						style={styles.Inputs}
					/>
				</View>
				<View style={styles.Container}>
					<Button
						color={'#000000'}
						style={styles.Button}
						mode="contained"
						onPress={() => this.handleSubmit()}>
						Sign Up
					</Button>
					<Text onPress={() => this.props.navigation.navigate('Login')}>
						I already have an account
					</Text>
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

export default AsStudent;

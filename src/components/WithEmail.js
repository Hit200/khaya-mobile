import React, { Component, Fragment } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';


class WithEmail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}

	handleSubmit = () => {
		const { username, password } = this.state;
		fetch(`https://khaya-api.herokuapp.com/parse/login?username=${username}&password=${password}`, {
			method: 'GET',
			headers: {
				'X-Parse-Application-Id': 'parse-khaya-app-ID'
			}
		})
			.then(res => res.json())
			.then(res => {
				const { success, ...user } = res;
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<Fragment>
				<View style={styles.Container}>
					<Image
						source={require('../../assets/logo.png')}
						resizeMode="contain"
						style={styles.Image}
					/>
				</View>
				<View style={styles.Divider} />
				<View style={styles.Container}>
					<Text style={styles.Text}>Please fill in your credentials</Text>
				</View>
				<View style={styles.Form}>
					<TextInput
						mode="outlined"
						label="Email"
						value={this.state.username}
						onChangeText={text => this.setState({ username: text })}
						style={styles.Inputs}
					/>
					<TextInput
						mode="outlined"
						label="Password"
						value={this.state.password}
						onChangeText={text => this.setState({ password: text })}
						style={styles.Inputs}
					/>
				</View>
				<View style={styles.Container}>
					<Button
						color={'#000000'}
						style={styles.Button}
						mode="outlined"
						onPress={() => this.handleSubmit()}>
						Login
					</Button>
					<Text>Signup instead ?</Text>
				</View>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	Text: {
		textAlign: 'center',
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

export default WithEmail;
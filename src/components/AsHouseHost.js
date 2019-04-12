import React, { Fragment } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AsHouseHost = () => (
	<ScrollView>
		<View style={styles.Container}>
			<Image source={require('../../assets/logo.png')} resizeMode="contain" style={styles.Image} />
		</View>
		<View style={styles.Divider} />
		<View style={styles.Container}>
			<Text style={styles.Text}>REGISTER AS HOME OWNER</Text>
		</View>
		<View style={styles.Form}>
			<TextInput
				mode="outlined"
				label="Name"
				value={''}
				onChangeText={text => text}
				style={styles.Inputs}
			/>
			<TextInput
				mode="outlined"
				label="Email"
				value={''}
				onChangeText={text => text}
				style={styles.Inputs}
			/>
			<TextInput
				mode="outlined"
				label="Contact"
				value={''}
				onChangeText={text => text}
				style={styles.Inputs}
			/>
			<TextInput
				mode="outlined"
				label="Address"
				value={''}
				onChangeText={text => text}
				style={styles.Inputs}
			/>
			<TextInput
				mode="outlined"
				label="Password"
				value={''}
				onChangeText={text => text}
				style={styles.Inputs}
			/>
			<TextInput
				mode="outlined"
				label="Confirm Password"
				value={''}
				onChangeText={text => text}
				style={styles.Inputs}
			/>
		</View>
		<View style={styles.Container}>
			<Button
				color={'#000000'}
				style={styles.Button}
				mode="contained"
				onPress={() => console.log('Pressed')}>
				Sign Up
			</Button>
			<Text>I already have an account</Text>
		</View>
	</ScrollView>
);

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
export default AsHouseHost;

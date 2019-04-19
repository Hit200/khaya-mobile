import React, { Fragment } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Signup = props => (
	<Fragment>
		<View>
			<Text style={styles.Text}>Create an account</Text>
		</View>
		<View style={styles.Container}>
			<Image source={require('../../assets/logo.png')} resizeMode="contain" style={styles.Image} />
		</View>
		<View style={styles.Container}>
			<Button
				color={'#000000'}
				style={styles.Button}
				mode="outlined"
				onPress={() => props.navigation.navigate('AsStudent')}>
				As Student
			</Button>
			<Button
				color={'#000000'}
				style={styles.Button}
				mode="outlined"
				onPress={() => props.navigation.navigate('AsHouseHost')}>
				As Home Owner
			</Button>
		</View>
	</Fragment>
);

const styles = StyleSheet.create({
	Text: {
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 200,
		marginBottom: 10
	},
	Image: {
		width: 200
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
	}
});
export default Signup;

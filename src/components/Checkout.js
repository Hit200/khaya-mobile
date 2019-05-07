import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Title, Text, Button } from 'react-native-paper';

const makePayment = (id, room) => {
	fetch(`https://khaya-api.herokuapp.com/property/${id}/room/${room}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(res => res.json())
		.then(res => console.log(res))
		.catch(error => console.log(error));
};

const Checkout = props => {
	// Navigation Parameters
	const id = props.navigation.getParam('id');
	const room = props.navigation.getParam('room');
	const price = props.navigation.getParam('price');
	const address = props.navigation.getParam('address');

	console.log(id);
	return (
		<Fragment>
			<Appbar.Header style={styles.AppBarTheme}>
				<Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
				<Appbar.Content title="Khaya" subtitle="Booking a room" />
			</Appbar.Header>
			<View style={styles.Container}>
				<Title style={[{ color: 'rgba(0,0,0,0.5)' }, styles.Title]}>Check Total</Title>
				<Title style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>RTGS$ {price}</Title>
			</View>
			<View style={styles.Divider} />
			<View style={styles.SummaryContainer}>
				<Title style={{ color: 'rgba(0,0,0,0.5)', fontSize: 18, fontStyle: 'normal' }}>
					PAYMENT METHOD
				</Title>
				<View style={styles.PaymentMethod}>
					<Text>ECOCASH</Text>
					<Text style={styles.Mobile}>0783620957</Text>
					<Text>CHANGE</Text>
				</View>
			</View>
			<View style={styles.Divider} />
			<View style={styles.SummaryContainer}>
				<Title style={{ color: 'rgba(0,0,0,0.5)', fontSize: 18, fontStyle: 'normal' }}>
					SUMMARY
				</Title>
				<View style={styles.PaymentMethod}>
					<Text>ADDRESS</Text>
					<Text style={styles.Mobile}>{address}</Text>
				</View>
				<View style={styles.PaymentMethod}>
					<Text>ROOM NUMBER</Text>
					<Text style={styles.Mobile}>{room}</Text>
				</View>
			</View>
			<View style={styles.Divider} />
			<View style={styles.Container}>
				<Button
					color={'#000000'}
					style={styles.Button}
					mode="contained"
					onPress={async () => {
						const res = makePayment(id, room);
						return props.navigation.navigate('Details', { id: id });
					}}>
					Pay ${price} With Paynow
				</Button>
			</View>
		</Fragment>
	);
};

const styles = StyleSheet.create({
	AppBarTheme: {
		backgroundColor: '#000000',
		color: '#ffffff'
	},
	Container: {
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	SummaryContainer: {
		padding: 20,
		display: 'flex',
		justifyContent: 'flex-start'
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
	PaymentMethod: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 20
	},
	Mobile: {
		fontWeight: 'bold'
	},
	Button: {
		color: '#000000',
		borderRadius: 15,
		width: 250,
		marginTop: 20,
		marginBottom: 20
	}
});

export default Checkout;

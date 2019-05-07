import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Title, Card, Appbar, ActivityIndicator, Colors } from 'react-native-paper';
import Stars from 'react-native-stars';
import { Button } from 'galio-framework';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { fetchSelectedProperty } from '../actions/fetchSelectedProperty';

class Details extends Component {
	constructor(props) {
		super(props);

		this.state = {
			property: {}
		};
	}
	componentDidMount = () => {
		const id = this.props.navigation.getParam('id');
		console.log(id);
		console.log('Fetching data');

		fetch(`https://khaya-api.herokuapp.com/property/${id}/details`, {
			method: 'GET'
		})
			.then(res => res.json())
			.then(async res => {
				const { success, ...property } = res;
				console.log(property);
				this.setState({
					property: property.property
				});
			})
			.catch(error => console.log(error));
	};

	render() {
		const {
			location,
			description,
			overallRating,
			likes,
			facilities,
			media,
			room
		} = this.state.property;

		const id = this.props.navigation.getParam('id');

		return (
			<ScrollView>
				<Appbar.Header style={styles.AppBarTheme}>
					<Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
					<Appbar.Content title="Khaya" subtitle="Property Details" />
				</Appbar.Header>
				<View style={styles.Container}>
					<Title>{location}</Title>
					<View style={styles.Stars}>
						<Stars
							display={overallRating}
							spacing={8}
							count={5}
							starSize={20}
							backingColor="white"
							fullStar={<Ionicons name="md-star" size={20} color="black" />}
							emptyStar={<Ionicons name="md-star" size={20} color="black" />}
						/>
						<Text style={styles.Recommended}>{overallRating}</Text>
					</View>
					<Text style={styles.Description}>{description}</Text>
					<Text style={styles.Recommended}>Recommended by {likes} people</Text>
					<Text style={[styles.Description, styles.Recommended]}>Facilities</Text>
					{facilities === undefined ? (
						<View />
					) : (
						facilities.map((value, i) => (
							<View style={styles.Stars} key={i}>
								<Ionicons name="md-checkmark-circle-outline" size={20} color="black" />
								<Text style={styles.Recommended}> {value}</Text>
							</View>
						))
					)}

					<View style={styles.Divider} />
					<Text style={styles.Recommended}>Property Images</Text>
					<ScrollView horizontal={true} style={{ display: 'flex', flexDirection: 'row' }}>
						{media === undefined ? (
							<View />
						) : (
							media.map((value, i) => (
								<Card key={i} style={{ width: 320, marginTop: 20, marginLeft: 5 }}>
									<Card.Cover
										source={{
											uri: value
										}}
									/>
								</Card>
							))
						)}
					</ScrollView>
					<View style={styles.Divider} />
					<Text style={styles.Recommended}>Rooms</Text>
					<ScrollView horizontal={true} style={{ display: 'flex', flexDirection: 'row' }}>
						{room === undefined ? (
							<View />
						) : (
							room.map((value, i) => (
								<Card key={i} style={{ width: 320, marginTop: 20, marginLeft: 5 }}>
									<Card.Cover
										source={require('../../assets/surface.jpeg')}
										style={{ height: 50 }}
									/>
									<Card.Content>
										<Title style={styles.Recommended}>Room : {value.number}</Title>
										<Text style={styles.Recommended}>
											{value.gender} - {value.current} / {value.capacity} people
										</Text>
										<Text style={styles.Recommended}>${value.price} per month</Text>
									</Card.Content>
									<Card.Actions>
										<Button
											color="#000"
											onPress={() =>
												this.props.navigation.navigate('Checkout', {
													id: id,
													room: value.number,
													price: value.price,
													address: location
												})
											}>
											Rent This Room
										</Button>
									</Card.Actions>
								</Card>
							))
						)}
					</ScrollView>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	ActivityIndicator: {
		display: 'flex',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	AppBarTheme: {
		backgroundColor: '#000000',
		color: '#ffffff'
	},
	Container: {
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 50
	},
	Divider: {
		borderBottomColor: '#000000',
		borderBottomWidth: 0.5,
		marginTop: 20
	},
	Stars: {
		display: 'flex',
		flexDirection: 'row',
		paddingTop: 10
	},
	Description: {
		paddingTop: 20,
		marginBottom: 5
	},
	Recommended: {
		fontWeight: 'bold'
	}
});

const mapStateToProps = state => ({
	selectedProperty: state.selectedProperty.property
});

export default connect(
	mapStateToProps,
	{ fetchSelectedProperty }
)(Details);

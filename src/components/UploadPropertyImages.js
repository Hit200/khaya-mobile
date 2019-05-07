import React, { Component } from 'react';
import { View, WebView } from 'react-native';

class UploadProperty extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: []
		};

		this.onWebViewMessage = this.onWebViewMessage.bind(this);
	}

	onWebViewMessage = event => {
		console.log(event.nativeEvent.data);
		this.setState({ images: event.nativeEvent.data.url });
		this.props.navigation.navigate('UploadDetails', { images: this.state.images });
	};

	render() {
		return (
			<View style={{ flex: 1, marginTop: 20, height: '100%', overflow: 'hidden' }}>
				<WebView
					source={{ uri: `http://khaya-api.herokuapp.com/uploadPropertyImages` }}
					scalesPageToFit={true}
					javaScriptEnabled={true}
					useWebKit={true}
					onMessage={event => this.onWebViewMessage(event)}
				/>
			</View>
		);
	}
}

export default UploadProperty;

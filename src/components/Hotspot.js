import React, { Component, useCallback } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Image } from 'react-native';
import {Icon, Header, Avatar} from 'react-native-elements';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {userContribution, userReports} from './const';
import { connect } from 'react-redux';
import { updateMap, updateUserInfo} from './actions/user';

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			latitude: null,
			longitude: null,
			userAddress: null
		};
	}
	getLocation(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(this.getCoordinates);
		} else {
			alert('Geolocation not supported');
		}
	}
	
	getCoordinates(position){
		this.setState({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		})
	}

    handleEmail = (text) => {
        this.setState({ email: text })
	 }

	render() {
		const { user, navigation, acc} = this.props;
		const points = user.userInfo.points;
		const uname = user.userInfo.uname;
		let m = false;
		if(user.userInfo.uname === 'rathisbakc'){
			m = true;
		} else {
			m = false;
		}
		const listReports = acc.userRepo.map( (c) =>
			<Marker key={c.key} title={c.extraInfo} coordinate={{latitude: c.latitude, longitude: c.longitude}}>
				<Icon color='#ff5576' reverse name='circle-o' type='font-awesome' size={10}/>
				<Callout  style={{width: 150}}>
					<Text>Date Reported: {c.date}</Text>
					<Text>Information: {c.extraInfo}</Text>
					<Text>User: {c.uname} </Text>
					<Text>Location: {c.latitude}, {c.longitude}</Text>
				</Callout>
			</Marker>
		);
		return (
			<View style={styles.container}>
				{/* Upper Nav */}
				<View style={styles.upperNav}>
					<Text style={{marginLeft: 30 , color: 'black', fontWeight: 'bold'}}> {points} </Text><Icon style={{marginRight: 80}} name='leaf' type='font-awesome'/>
					{m === false ? 
					<Avatar
						size='medium'
						rounded
						source={{
							uri:
							'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
						}}
					/> : 
					<Avatar
					size='medium'
					rounded
					source={{
						uri:
							'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
					}}
					/>
					}
					<Text style={{marginLeft: 55, fontSize: 12, fontWeight: 'bold', color: 'black'}}>Hello, <Text style={{color: "#DA2C38"}}>{uname}</Text></Text>
				</View>
				{/* Map */}
				<View>
					{user.userInfo.uname === 'mdonuts' ? 
						<MapView
							style={{ marginTop: 20, width: 400, height: 400}}
							provider={PROVIDER_GOOGLE}
							showsUserLocation={true}
							region={{
								latitude: 42.6389,
								longitude: -71.304039,
								latitudeDelta: 0.04,
								longitudeDelta: 0.05,
							}}
						> 
						{listReports}
						</MapView>: 
						<MapView
							style={{ marginTop: 20, width: 400, height: 400}}
							provider={PROVIDER_GOOGLE}
							showsUserLocation={true}
							region={{
								latitude: 42.7410,
								longitude: -71.324039,
								latitudeDelta: 0.04,
								longitudeDelta: 0.05,
							}}
						>
						{listReports}
						</MapView>
					}
					
				</View>

				{/* Home Page Features */}
				<View style={{marginTop: 30}}>
					<View style={styles.homePageButtons}>
						<TouchableHighlight>
							<Icon color='#ff5576' reverse name='circle-o' type='font-awesome' size={10}/>
						</TouchableHighlight>
						<Text style={{fontWeight: 'bold'}}>Reports Around Area</Text>
					</View>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		fontFamily: 'Poppins'
	},
	upperNav: {
		flexDirection: 'row',
		alignItems: 'center',
		textAlign: 'center',
		backgroundColor:'#C6DABF',
		width: 390,
		height: 75,
		color: 'white'
	}, 
	homePageButtons:{
		flexDirection: 'row',
		marginTop: 10
	},
	bottomNav: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15
	}
});

// export default Main;

const mapStateToProps = state => ({
	user: state.user,
	acc: state.acc
  });
  
  const mapDispatchToProps = {
	  updateMap,
	  updateUserInfo,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)
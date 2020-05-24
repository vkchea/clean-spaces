
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import {Icon} from 'react-native-elements';

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
		};
	}
    
    handleEmail = (text) => {
        this.setState({ email: text })
     }

	render() {
        const {navigation} = this.props;
		return (
			<View style={styles.container}>
				{/* Upper Nav */}
				<View style={styles.upperNav}>
					<Text>You have [Leaf Icon] 20 </Text>
					<Text>[Profile Picture]</Text>
					<Text>Hello, Mdonuts</Text>
				</View>
				{/* Map */}
				<View>
					<Text>[MAP API]</Text>
				</View>

				{/* Home Page Features */}
				<View>
					<View style={styles.homePageButtons}>
						<TouchableHighlight>
							{/* <Image style={styles.imagestyle} source={require('./ic_action_name.png')} /> */}
							<Text>[+]</Text>
						</TouchableHighlight>
						<Text>Your Reports</Text>
					</View>
					<View style={styles.homePageButtons}>
						<TouchableHighlight>
							{/* <Image style={styles.imagestyle} source={require('./ic_action_name.png')} /> */}
							<Text>[+]</Text>
						</TouchableHighlight>
						<Text>Your Contributions</Text>
					</View>
				</View>

				{/* Bottom Nav */}
				<View style={styles.bottomNav}>
					<Icon 
					reverse
					name='fire'
					type='font-awesome'
					onPress= {() => navigation.navigate("Contribution")}/>
					<Icon 
					reverse
					name='plus-circle'
					type='font-awesome'
					onPress= {() => navigation.navigate("Contribution")}
					/>
					<Icon 
					reverse
					name='pencil'
					type='font-awesome'
					onPress= {() => this.viewHotSpot()}
					/>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	upperNav: {
		flexDirection: 'row'
	}, 
	homePageButtons:{
		flexDirection: 'row'
	},
	bottomNav: {
		flexDirection: 'row'
	}
});

export default Main;
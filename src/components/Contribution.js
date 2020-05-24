
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ImageBackground} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-picker'
import {Icon, Avatar, Button} from 'react-native-elements';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {userContribution} from './const';
import { connect } from 'react-redux';
import {updateMap, updateUserInfo} from './actions/user';

class Contribution extends Component {
	constructor(props){
        super(props);
        this.state = {
            contributionType:'Select Type of Contribution',
            photo: null,
        };
    }
    
    handleValueChange = (value) => {
        this.setState({
            contributionType: value,
        })
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response })
            }
        })
     }
    
    setSelectedValue = (itemValue) => {
        this.setState({
            selectedValue: itemValue
        })
    }

    handleSubmission = () => {
        const { updateMap, updateUserInfo, navigation} = this.props;
        const { user } = this.props;
        const date = new Date();
        const fullDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
        userInfo = user.userInfo;

        if(this.state.contributionType === 'Personal'){
            userInfo.points = user.userInfo.points + 10;
            updateUserInfo(userInfo);
        } else if(this.state.contributionType === 'Community'){
            userInfo.points = user.userInfo.points + 50;
            updateUserInfo(userInfo);
        } else {
            userInfo.points = user.userInfo.points + 0;
            updateUserInfo(userInfo);
        }

        newContrib = {
            key: user.userCont.length+1,
            contributionType: this.state.contributionType,
            latitude: user.userCont[user.userCont.length-1].latitude + .0100,
            longitude: -71.324059,
            img: this.state.photo, 
            date: fullDate
        }
        updateMap(newContrib);
        navigation.navigate("Main");
    }

    handleAddress = (text) => {
        this.setState({
            address: text
        })
    }

	render() {
        const { photo } = this.state;
        const {navigation} = this.props;
        const {user} = this.props;
		const uname = user.userInfo.uname;
		let m = false;
		if(user.userInfo.uname === 'rathisbakc'){
			m = true;
		} else {
			m = false;
		}
		const points = user.userInfo.points;
        const image = { uri: "https://i.ibb.co/HpYn4qP/BGcontributionbg.png"};
		return (
			<View style={styles.container}>
                <ImageBackground source={image} style={styles.image}> 
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

				{/* Drop down of Area of Contribution */}
                <View style={styles.areaPicker}>
                    <RNPickerSelect
                        onValueChange={(value) => this.handleValueChange(value)}
                        items={[
                            { label: 'Personal', value: 'Personal' },
                            { label: 'Community', value: 'Community' }
                        ]}
                    >   
                    <View style={styles.dropdown}>
                        <Text style={{marginLeft: 30, padding: 5, width: 200, textAlign: 'center'}}> {this.state.contributionType} </Text>
                        <Icon style={{marginLeft: 40}} name="caret-down" type="font-awesome"></Icon>
                    </View>
                    </RNPickerSelect>
                </View>

                {/* Address of Contribution*/}
                <View style={styles.areaPicker}>
                    <TextInput style = {{width: 300, height: 40, backgroundColor: 'white', borderRadius: 5, paddingLeft: 10, marginTop: 10}} placeholder="Search Area"/>
                </View>
                
                
                {/* Snapshot verification*/}
                <View style={{ flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
                    {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ marginTop: 10, width: 200, height: 200 }}
                    />
                    )}
                    <View>
                        <Text style={{fontWeight:'bold', marginRight: 20, marginBottom: 10, marginTop: 10}}> Upload Snapshot Here </Text>
                        <Icon name="camera-retro" type="font-awesome" onPress={this.handleChoosePhoto} />
                    </View>
                </View>

                <Button style={{marginBottom: 20, width: 300, padding: 10}} color= '#da2c3a' onPress={() => this.handleSubmission()} title="Submit Contribution"/>

                </ImageBackground>
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
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center'
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
    areaPicker: {
        flexDirection: 'column'
    },
    dropdown:{
        flexDirection: 'row',
        width: 300,
        padding: 5,
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: 'white'
    },
	bottomNav: {
		flexDirection: 'row',
		justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 15
	}
});

const mapStateToProps = state => ({
	user: state.user
  });

const mapDispatchToProps = {
    updateMap,
    updateUserInfo
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Contribution)
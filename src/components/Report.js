
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker'
import {userContribution, userReports} from './const';
import { connect } from 'react-redux';
import { updateMap } from './actions/user';
import {Icon, Avatar,  Button,} from 'react-native-elements';
import {updateMapRepo, updateUserInfo} from './actions/user';
import { updateAcc } from './actions/accumulative';

class Report extends Component {
	constructor(props){
        super(props);
        this.state = {
            address: ' ',
            photo: null,
            mode: 'date',
            extraInfo: ''
        };
    }
    componentDidMount(){
        const {acc} = this.props;
    }
    handleSubmission = () =>{
        const {updateMapRepo, updateUserInfo, updateAcc, acc, navigation} = this.props;
        const { user } = this.props;
        const date = new Date();
        const fullDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
        newReport = {
            date: fullDate,
            longitude: user.userRepo[user.userRepo.length-1].longitude + .0100,
            latitude:  user.userRepo[user.userRepo.length-1].latitude,
            extraInfo: this.state.extraInfo,
            photo: this.state.photo,
            uname: user.userInfo.uname
        }
        userInfo = user.userInfo;
        userInfo.points = user.userInfo.points + 12;
        newAcc = acc.userRepo;
        newAcc.push(newReport);
        updateAcc(newAcc);
        updateUserInfo(userInfo);
        updateMapRepo(newReport);
        navigation.navigate("Main");
    }
    handleExtraInfo = (value) => {
        this.setState({
            extraInfo: value
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

	render() {
        const {navigation} = this.props;
        const date  = new Date();
        const fullDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
        const mode = this.state.mode;
        const {user} = this.props;
		const uname = user.userInfo.uname;
		let m = false;
		if(user.userInfo.uname === 'rathisbakc'){
			m = true;
		} else {
			m = false;
		}
		const points = user.userInfo.points;
        const { photo } = this.state;
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

                    {/* Date Picker */}
                    <View style={styles.areaPicker}>
                        <TextInput style = {{width: 300, height: 40, backgroundColor: 'white', borderRadius: 5, paddingLeft: 10, marginTop: 10}} editable={false} selectTextOnFocus={false} placeholder={`Current Date: ${fullDate}`}/>
                    </View>

                    {/* Address of Affected Area*/}
                    <View style={styles.areaPicker}>
                        <TextInput style = {{width: 300, height: 40, backgroundColor: 'white', borderRadius: 5, paddingLeft: 10, marginTop: 10}} placeholder="Address of Effected Area"/>
                    </View>

                    {/*Extra Information*/}
                    <View style={styles.extraInfo}>
                        <Text style={{fontWeight: 'bold'}}>Extra Information</Text>
                        <TextInput style = {{width: 300, height: 40, backgroundColor: 'white', borderRadius: 5, paddingLeft: 10, marginTop: 10}} placeholder="ex. near the steps, lots of water bottles"/>
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
                            <Text style={{fontWeight:'bold', marginRight: 20, marginBottom: 10}}> Upload Snapshot Here </Text>
                            <Icon name="camera-retro" type="font-awesome" onPress={this.handleChoosePhoto} />
                        </View>
                    </View>
                    
                    <Button style={{marginBottom: 20, width: 300, padding: 10}} color= '#DA2C38' onPress={() => this.handleSubmission()} title="Submit Report"/>
                </ImageBackground>
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
    date: {
        color: 'black',
        width: 200,
        height: 20,
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 1
    },
    areaPicker: {
        flexDirection: 'column',
        width: 300,
    },
    extraInfo: {
        flexDirection: 'column',
        width: 300,
        marginTop: 15
    },
	bottomNav: {
		flexDirection: 'row'
	}
});

const mapStateToProps = state => ({
    user: state.user,
    acc: state.acc
  });
  
  const mapDispatchToProps = {
      updateMapRepo,
      updateUserInfo,
      updateAcc
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Report)
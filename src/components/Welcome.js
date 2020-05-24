
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {mdonuts, rathisbakc} from './users/index'
import Main from './Main';
import { connect } from 'react-redux';
import {currentUser} from './actions/user';

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            login: true
        };
    }
    
    handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     login = (props, email, pass) => {
         const { currentUser } = this.props;
         if(email.toLowerCase() === 'mdonuts' && pass === '1234'){
            this.setState({
                login: true
            })
            currentUser(mdonuts);
            const { navigation } = props;
            navigation.navigate('Main');
         } else if (email.toLowerCase() === 'rathisbakc' && pass === '54321'){
            this.setState({
                login: true
            })
            currentUser(rathisbakc);
            const { navigation } = props;
            navigation.navigate('Main');
         } else {
             this.setState({
                 login: false
             })
         }
     }

	render() {
        const {navigation} = this.props;
		return (
            <View style={styles.container}>
                <Image source={{uri:'https://i.ibb.co/0tX2qRJ/download-1-1hellopicture.png'}} style={{marginTop:50, height: 300, width: 350}}/>
                <View style={{alignItems: 'center', marginTop: 0}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to </Text>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Clean Spaces</Text>
                    <View style={{marginTop: 10, marginLeft: 10}}>
                        <Text style={{fontSize: 12, width: 250, textAlign: 'center'}}>Our mission is to create a tool for people to come together and create clean spaces for their homes, communities, and the planet. </Text>
                    </View>
                    <TouchableOpacity style={{borderRadius: 10}} onPress = {() => navigation.navigate("Login")}>
                        <Text style = {styles.signInText}> Sign In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius: 10, height: 25}} onPress = {() => navigation.navigate("Login")}>
                        <Text style = {styles.createAccountText}>  Create an Account </Text>
                    </TouchableOpacity>
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
    image: {
        flex: 1,
        alignItems: 'center'
    },
     signInText:{
        fontWeight: 'bold',
        marginTop: 10,
        height: 35,
        width: 300,
        borderWidth: 0,
        borderRadius: 10,
        padding: 5,
        borderColor: 'black',
        backgroundColor: '#F4F0BB',
        textAlign: 'center'
     },
     createAccountText:{
        fontWeight: 'bold',
        marginTop: 10,
        height: 35,
        width: 300,
        borderWidth: 0,
        borderRadius: 10,
        padding: 5,
        borderColor: 'black',
        backgroundColor: '#219653',
        textAlign: 'center'
     },
     input: {
        height: 30,
        width: 200,
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 5,
        padding: 5
     }
});

const mapStateToProps = state => ({
	user: state.user
  });

const mapDispatchToProps = {
    currentUser
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
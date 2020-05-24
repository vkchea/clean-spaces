
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import {mdonuts, rathisbakc} from './users/index'
import Main from './Main';
import { connect } from 'react-redux';
import {currentUser} from './actions/user';

class Login extends Component {
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
        const image = {uri: 'https://i.ibb.co/KDbvsBy/BGloginpagebg.png?fbclid=IwAR1qMdsQ5yBRxSMj5NqBbDOYBVR9XamWyYoOr_VbSq3Wfm6V6tQp3OksEB4'};
		return (
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.container}>
                    <View style={{alignSelf: 'flex-start', marginTop: 20}}>
                        <Text style={{fontSize: 40, fontWeight: 'bold'}}>Welcome back</Text>
                        <View style={{marginTop: 10, marginLeft: 10}}>
                            <Text>New around here?</Text>
                            <Text style={{color: '#DA2C38'}}>Create new account</Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', marginTop: 230}}>
                        {this.state.login === true ? <Text> </Text> : <Text>Incorrect Username or Password</Text>}
                        <TextInput style = {{width: 300, height: 30, backgroundColor:'white', borderRadius: 2, paddingLeft: 10}} placeholder="Email" onChangeText = {this.handleEmail}/>
                        <TextInput style = {{marginTop: 10, width: 300, height: 30, backgroundColor:'white', borderRadius: 2, paddingLeft: 10}} secureTextEntry={true} placeholder="Password" onChangeText = {this.handlePassword}/>
                        <TouchableOpacity style={{borderRadius: 10}}
                            onPress = {() => this.login(this.props, this.state.email, this.state.password)
                        }>
                            <Text style = {styles.signInText}> Sign In </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>  
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
     signInText:{
        fontWeight: 'bold',
        marginTop: 10,
        height: 50,
        width: 300,
        borderWidth: 0,
        borderRadius: 10,
        padding: 15,
        borderColor: 'black',
        backgroundColor: '#F4F0BB',
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)
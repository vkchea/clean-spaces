
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Main from './Main';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    
    handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     login = (props, email, pass) => {
         if(email !== 'mdonuts' && pass !== '1234'){
            const { navigation } = props;
            navigation.navigate('Home');
         }
     }

	render() {
		return (
			<View style={styles.container}>
				<Text>Welcome back</Text>
				<Text>You don't have an account?</Text>
				<Text>Create new account</Text>
                <TextInput style = {styles.input}
                    placeholder = "Email"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}/>
                <TextInput style = {styles.input}
                    secureTextEntry={true}
                    placeholder = "Password"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}/>
                <TouchableOpacity
                    onPress = {() => this.login(this.props, this.state.email, this.state.password)
                }>
                <Text style = {styles.signInText}> Sign In </Text>
            </TouchableOpacity>
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
    text: {
        marginTop: 10,
        height: 50,
        width: 140,
        borderWidth: 1,
        padding: 15,
        borderColor: 'black',
        backgroundColor: '#F4F0BB',
        textAlign: 'center'
     },
     signInText:{
        marginTop: 10,
        height: 50,
        width: 200,
        borderWidth: 1,
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

export default Login;
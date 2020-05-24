
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'

class Contribution extends Component {
	constructor(props){
        super(props);
        this.state = {
            address: ' ',
            photo: null
        };
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

    handleAddress = (text) => {
        this.setState({
            address: text
        })
    }
	render() {
        const { photo } = this.state
		return (
			<View style={styles.container}>
				{/* Upper Nav */}
				<View style={styles.upperNav}>
					<Text>You have [Leaf Icon] 20 </Text>
					<Text>[Profile Picture]</Text>
					<Text>Hello, Mdonuts</Text>
				</View>

				{/* Drop down of Area of Contribution */}
                <View style={styles.areaPicker}>
                    <Text>Type of Contribution</Text>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Home', value: 'home' },
                            { label: 'Community', value: 'community' }
                        ]}
                    />
                </View>

                {/* Address of Contribution*/}
                <View style={styles.areaPicker}>
                    <Text>Address of Contribution</Text>
                    <TextInput style = {styles.input}
                    placeholder = "Email"
                    autoCapitalize = "none"
                    onChangeText = {this.handleAddress}/>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 300, height: 300 }}
                    />
                    )}
                    <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
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
    areaPicker: {
        flexDirection: 'row'
    }
});

export default Contribution;
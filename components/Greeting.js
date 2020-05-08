import React from 'react';
import { View, Text, Image} from 'react-native';

const Greeting = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>GLOBAL <Image
                source={{ uri: 'https://publicdomainvectors.org/photos/LowDetailGlobe.png'}}
                style={{ resizeMode: 'contain', width: 50, height: 50}}
            /></Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        height: 50,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default Greeting;
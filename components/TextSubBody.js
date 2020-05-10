import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const TextSubBody = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <ImageBackground source={{ uri: 'https://dslv9ilpbe7p1.cloudfront.net/HEbWu1P0t9q8CqLA6L-urw_store_header_image'}}
      style={{ resizeMode: 'contain', flex: 1, justifyContent: 'center'}}>
            <Text style = {textStyle}>#DiRumahAja               PROVINSI              #CegahCovid19</Text>
            </ImageBackground>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'mistyrose',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily:'sans-serif-light',
        color: 'black'
    }
}
export default TextSubBody;
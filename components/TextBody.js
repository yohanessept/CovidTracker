import React from 'react';
import { View, Text, Image } from 'react-native';

const TextBody = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>INDONESIA</Text><Image
                source={{ uri: 'https://www.shareicon.net/data/256x256/2015/07/23/73591_flag_256x256.png'}}
                style={{resizeMode: 'contain', width: 50, height: 50}}
            />
        </View>
    );
};


const styles = {
    viewStyle: {
        flex: 2,
        alignItems: 'center',
        height: 70,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default TextBody;
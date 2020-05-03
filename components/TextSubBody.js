import React from 'react';
import { View, Text } from 'react-native';

const TextSubBody = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>#DiRumahAja               Provinsi              #CegahCovid19</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'moccasin',
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
        fontWeight: 'bold'
    }
}
export default TextSubBody;
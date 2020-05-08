import React from 'react';
import { View, Text, Image } from 'react-native';

const TextBody = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>INDONESIA <Image
                source={{ uri: 'https://i.pinimg.com/originals/87/5d/80/875d8095922b780d7709927c9581a8eb.gif'}}
                style={{resizeMode: 'contain', width: 50, height: 50}}
            />
            </Text>
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
export default TextBody;
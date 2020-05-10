import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <ImageBackground source={{ uri: 'https://cdn.pixabay.com/photo/2016/12/17/10/27/virus-1913183_960_720.jpg'}}
                style={{ resizeMode: 'contain', flex: 5, justifyContent: 'center'}}>
           <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/31/22/06/boy-2027615_960_720.png'}}
                style={{ resizeMode: 'contain', marginLeft: 300, paddingTop: 20, paddingBottom: 20, width: 100, height: 100}}
            />
            <Text style = {textStyle}>Data Covid-19 Global & Indonesia</Text>
            </ImageBackground>
        </View>
    );
};


const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    textStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        fontFamily:'sans-serif-light'
    }
}
export default Header;
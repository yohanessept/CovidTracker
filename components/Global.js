import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';

class Global extends React.Component{
    constructor(){
        super();
        this.state = {
            api: [],
            positive: '',
            meninggal: '',
            sembuh: '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({positive: json.confirmed.value})
        this.setState({sembuh: json.recovered.value})
        this.setState({meninggal: json.deaths.value})
    }
   
    render(){
        return (
                   <View style={styles.container}>
                   <View style={styles.box1}>
                   <ImageBackground source={{ uri: 'https://www.setaswall.com/wp-content/uploads/2017/04/Flavescent-Solid-Color-Background-Wallpaper-5120x2880-768x432.png'}}
                style={{ resizeMode: 'contain', flex: 5, justifyContent: 'center'}}>
                       <Text style={styles.text}> Total Positif: {this.state.positive} orang </Text>
                    </ImageBackground>
                   </View>

                   <View style={styles.box2}>
                   <ImageBackground source={{ uri: 'https://www.setaswall.com/wp-content/uploads/2017/04/Teal-Deer-Solid-Color-Background-Wallpaper-5120x2880-768x432.png'}}
                style={{ resizeMode: 'contain', flex: 5, justifyContent: 'center'}}>
                       <Text style={styles.text}> Total Sembuh: {this.state.sembuh} orang </Text>
                    </ImageBackground>
                   </View>

                   <View style={styles.box3}>
                   <ImageBackground source={{ uri: 'https://www.setaswall.com/wp-content/uploads/2017/04/Fuzzy-Wuzzy-Solid-Color-Background-Wallpaper-5120x2880-768x432.png'}}
                style={{ resizeMode: 'contain', flex: 5, justifyContent: 'center'}}>
                   <Text style={styles.text}> Total Meninggal: {this.state.meninggal} orang </Text>
                   </ImageBackground>
                   </View>
               </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        position: 'relative'
    },
    box1: {
        flex: 1,
        width: 300,
        height: 80,
        borderRadius: 20,
        marginHorizontal: 10
    },
    box2: {
        flex: 1,
        width: 300,
        height: 80,
        backgroundColor: 'lime',
        borderRadius: 20,
        marginHorizontal: 10
    },
    box3: {
        flex: 1,
        width: 300,
        height: 80,
        backgroundColor: 'red',
        borderRadius: 20,
        marginHorizontal: 10
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily:'sans-serif-light'
    }
})


export default Global;
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class LastUpdateGlobal extends React.Component{
    constructor(){
        super();
        this.state = {
            api: [],
            update: '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({update: json.lastUpdate})
    }
   
    render(){
        return (
                   <View style={styles.container}>
                       <Text style={styles.text}>Last Update : {this.state.update}</Text>
               </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative'
    },
    text: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold'
    }
})


export default LastUpdateGlobal;
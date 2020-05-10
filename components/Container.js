import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, ImageBackground } from "react-native";

const { height } = Dimensions.get('window');

export default class Container extends React.Component {
  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={styles.content}>
          <ImageBackground source={{ uri: 'https://wallpapercave.com/wp/wp1862430.jpg'}}
                style={{ resizeMode: 'contain', flex: 5, justifyContent: 'center'}}>
            {this.props.children}
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  scrollview: {
    flexGrow: 5,
  },
  content: {
    flexGrow: 5,
    justifyContent: "space-between",
    padding: 1,
  },
});
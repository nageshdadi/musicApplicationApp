import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {Component} from 'react';

interface IProps {
  navigation?: any;
}
export class Splash extends Component<IProps> {
  componentDidMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate('bottomNavigation');
    }, 1200);
  }
  render() {
    return (
      <View style={styles.mainSplashCard}>
        <ImageBackground
          source={require('../images/BackgroundImg.png')}
          resizeMode="cover"
          style={styles.splashImagCard}>
          <Image
            style={styles.moonImg}
            source={require('../images/halfMoonImg.png')}
          />
          <Text style={styles.splashText}>Home of Music</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainSplashCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  splashImagCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: 250,
  },
  moonImg: {
    height: 150,
    width: 150,
  },
  splashText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 15,
  },
});
export default Splash;

import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, {backgroundColor: '#87cefa'}];

    return (
      <View style={viewStyles}>
        <Image
          source={require('../Assets/images/crownStack.png')}
          style={styles.img}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    height: 100,
    width: 140,
  },
});

export default SplashScreen;

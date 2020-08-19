import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',
    paddingTop: 15,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 100,
    width: '90%',
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  valueLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 0.3,
  },
  buttonText: {
    fontSize: 30,
  },
  img: {
    resizeMode: 'contain',
    height: 70,
    width: 110,
  },
});

export default styles;

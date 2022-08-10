import {StyleSheet} from 'react-native';
import {scale, Fonts, Colors} from '../../../utils/index';

const styles = StyleSheet.create({
  image: {
    width: scale(200),
    height: scale(150),
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  versionLabel: {
    fontSize: Fonts.size.label,
    color: Colors.white,
    alignSelf: 'center',
    position: 'absolute',
    bottom: scale(30),
    fontWeight: 'bold'
  },
  menuIcon:{
    height: scale(30),
    width: scale(30),
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 45,
    right: 16
  }
});

export default styles;

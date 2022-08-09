import {StyleSheet} from 'react-native';
import {scale, Fonts, Colors} from '../../../utils/index';

const styles = StyleSheet.create({
  image: {
    width: scale(250),
    height: scale(200),
    alignSelf: 'center'
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  versionLabel: {
    fontSize: Fonts.size.label,
    color: Colors.white,
    alignSelf: 'center',
    position: 'absolute',
    bottom: scale(30),
    fontWeight: 'bold'
  }
});

export default styles;

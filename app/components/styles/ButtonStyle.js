import {StyleSheet} from 'react-native';
import {scale, Fonts, Colors} from '../../utils/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: scale(55),
    width: scale(300),
    padding: scale(10),
    borderRadius: scale(8),
    borderColor: '#999999',
    borderWidth: 2
  },
  title: {
    fontSize: Fonts.size.label,
    color: Colors.white,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  rightIcon: {
    width: scale(30),
    height: scale(30),
    alignSelf: 'center',
    marginHorizontal: scale(10)
  }
});

export default styles;

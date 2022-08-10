import {StyleSheet} from 'react-native';
import {scale, Fonts, Colors} from '../../utils/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.shadeblue,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: scale(48),
    width: scale(300),
    padding: scale(10),
    borderRadius: scale(6),
    borderColor: Colors.shadeblue,
    borderWidth: 2
  },
  title: {
    fontSize: Fonts.size.medium,
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

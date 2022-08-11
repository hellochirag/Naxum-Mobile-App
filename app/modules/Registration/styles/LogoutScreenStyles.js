import { StyleSheet } from 'react-native';
import { scale, Fonts, Colors } from '../../../utils/index';

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
  title: {
    fontSize: Fonts.size.input,
    color: Colors.shadeblue,
    alignSelf: 'center',
    fontWeight: '500',
    marginLeft: scale(16),
    marginTop: scale(20)
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: scale(40)
  },
  buttonContainer: {
    height: scale(48),
    width: scale(150),
  }
});

export default styles;
import { StyleSheet } from 'react-native';
import { scale, Colors, Fonts } from '../../utils/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    flexDirection: 'row',
    height: scale(55),
    width: '100%',
  },
  logo: {
    position: 'absolute',
    left: -10,
    alignSelf: 'center',
    width: scale(125),
    height: scale(65)
  },
  centerLogo: {
    alignSelf: 'center',
    width: scale(125),
    height: scale(65)
  },
  rightIcon: {
    width: scale(30),
    height: scale(30),
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
    marginHorizontal: scale(5)
  },
  backButton: {
    width: scale(30),
    height: scale(30),
    alignSelf: 'center',
    position: 'absolute',
    left: 15,
    marginHorizontal: scale(10)
  },
  text: {
    fontSize: Fonts.size.medium,
    color: Colors.black,
    fontWeight: '400'
  },
  menu: {
    width: 210, 
    alignSelf: 'flex-end', 
    marginTop: 45,
  }
});

export default styles;

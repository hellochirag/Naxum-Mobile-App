import {StyleSheet} from 'react-native';
import {verticalScale, Fonts} from '../../utils';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    right: 0,
    left: 0,
    zIndex: 9999,
  },
  title: {
    fontSize: Fonts.size.small,
    marginTop: verticalScale(2),
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default styles;

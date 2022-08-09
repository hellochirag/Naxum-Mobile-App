import {StyleSheet} from 'react-native';
import {scale, Colors,Fonts} from '../../utils/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: scale(45),
    width: scale(300),
    borderRadius: scale(25),
    borderWidth: 1,
    borderColor: Colors.deActiveTab,
    marginVertical: scale(10),
    paddingHorizontal: scale(10)
  },
  rightIcon: {
    width: scale(30),
    height: scale(30),
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  input: {
    fontSize: Fonts.size.regular,
    color: Colors.black,
  }

});

export default styles;

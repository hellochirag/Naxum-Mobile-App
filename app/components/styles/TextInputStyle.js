import { StyleSheet } from 'react-native';
import { scale, Fonts, Colors, WINDOW } from '../../utils/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: scale(300),
    padding: scale(5),
    height: scale(45),
    borderColor: Colors.shadeGray,
    borderWidth:0,
    borderBottomWidth: 1,
    marginTop: scale(5)
  },
  title: {
    fontSize: Fonts.size.label,
    color: Colors.white,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  leftIcon: {
    width: scale(30),
    height: scale(30),
    alignSelf: 'center',
    marginHorizontal: scale(10)
  },
  registerInputField: {
    paddingLeft: scale(10),
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center'
  },
  inputStyle: {
    color: Colors.black,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.regular,
    letterSpacing: 0.5,
    paddingLeft: scale(10),
  },
  infoInputRaw: {
    flexDirection: 'row',
    height: scale(14),
    backgroundColor: Colors.transparent,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: scale(300),
    marginTop: scale(5)
  },
  errorInputRaw: {
    flex: 1,
    paddingLeft: scale(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  errorText: {
    color: Colors.red,
    fontFamily: Fonts.type.regular,
    fontSize: scale(12),
    letterSpacing: scale(0.5) >= 0.25 ? scale(0.5) : 0.25,
  },
  infoText: {
    fontFamily: Fonts.type.regular,
    fontSize: scale(12),
    color: Colors.infoText,
    marginTop: scale(6),
},
});

export default styles;

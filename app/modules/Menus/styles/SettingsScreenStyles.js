import { StyleSheet } from 'react-native';
import { scale, Fonts, Colors } from '../../../utils/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  childContainer: {
   marginHorizontal: scale(20),
   marginVertical: scale(10)
  },
  settingBannerContent: {
    width: '110%',
    height: scale(60),
    paddingVertical: scale(10),
    paddingHorizontal: scale(25),
    justifyContent: 'center'
  },
  titleText: {
    fontSize: Fonts.size.input,
    color: Colors.white,
    textAlign: 'left',
    fontWeight: 'bold',
    lineHeight: scale(25),
    textTransform: 'uppercase',
  },
  regularText: {
    fontSize: Fonts.size.label,
    color: Colors.deActiveTab,
    textAlign: 'left',
    fontWeight: '500',
  },
  mediumText: {
    fontSize: Fonts.size.label,
    color: Colors.black,
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: scale(25),
    marginTop: scale(10)
  },
  divider: {
    height: scale(1),
    backgroundColor: Colors.deActiveTab
  },
  childText: {
    fontSize: Fonts.size.small,
    color: Colors.deActiveTab,
    textAlign: 'left',
    fontWeight: '500',
    marginTop: scale(3)
  },
  checkBox: {
    position: 'absolute',
    right: -5,
    bottom: 10
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: scale(10)
  },
  radioButton: {
    fontSize: Fonts.size.label,
    color: Colors.black,
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: scale(25),
    alignSelf:'center',
    marginHorizontal: scale(5)
  }
});

export default styles;

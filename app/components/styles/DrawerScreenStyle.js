import { StyleSheet } from 'react-native';
import { scale, Fonts, Colors } from '../../utils/index';

const styles = StyleSheet.create({
  image: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(40),
    alignSelf: 'center',
    marginTop: scale(80)
  },
  activityIndicator: {
    width: scale(80),
    height: scale(80),
    marginTop: -90,
    alignSelf: 'center',
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
  menuIcon: {
    height: scale(30),
    width: scale(30),
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 45,
    right: 16
  },
  horizontalLine: {
    height: 1,
    backgroundColor: Colors.deActiveTab,
    width: scale(150),
    alignSelf: 'center',
    marginTop: scale(70)
  },
  title: {
    fontSize: Fonts.size.medium,
    color: Colors.black,
    alignSelf: 'flex-end',
    fontWeight: '500',
    marginLeft: scale(16),
    lineHeight: 16
  },
  dropdownContainer: {
    flexDirection: 'row',
    paddingHorizontal: scale(16),
    marginTop: scale(20),
    justifyContent: 'space-around',
  },
  dropdownRaw: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: scale(6)
  },
  myProfileRaw: {
    flexDirection: 'row',
    paddingHorizontal: scale(16),
    marginTop: scale(20)
  },
  logoutRaw: {
    flexDirection: 'row',
    paddingHorizontal: scale(14),
    marginTop: scale(20),
    justifyContent: 'space-around',
  },
  logoutContainer: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: scale(6)
  }
  // dropdown: {
  //   margin: 16,
  //   height: 50,
  //   borderBottomColor: 'gray',
  //   borderBottomWidth: 0.5,
  // },
  // icon: {
  //   marginRight: 5,
  // },
  // placeholderStyle: {
  //   fontSize: 16,
  // },
  // selectedTextStyle: {
  //   fontSize: 16,
  // },
  // iconStyle: {
  //   width: 20,
  //   height: 20,
  // },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  // },
});

export default styles;

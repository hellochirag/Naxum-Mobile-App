import { StyleSheet } from 'react-native';
import { scale, Fonts, Colors, WINDOW } from '../../../utils/index';

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
  title: {
    fontSize: Fonts.size.input,
    color: Colors.shadeblue,
    alignSelf: 'center',
    fontWeight: '500',
    marginLeft: scale(16),
    marginTop: scale(20)
  },
  actionableButton: {
    height: scale(80),
    width: scale(80),
    borderRadius: scale(40),
    backgroundColor: Colors.shadeblue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {
    fontSize: Fonts.size.small,
    color: Colors.gray,
    alignSelf: 'center',
    fontWeight: '500',
    marginTop: scale(20)
  },
  actionableButtonRaw: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: scale(16),
    marginTop: scale(40)
  },
  horizontalLine: {
    height: 1,
    backgroundColor: Colors.deActiveTab,
    width: scale(300),
    alignSelf: 'center',
    marginTop: scale(30)
  },
  searchButtonText: {
    textAlign: 'center',
    fontSize: Fonts.size.small,
    fontWeight: 'normal',
    padding: 0,
  },
  listContainer: {
    width: WINDOW.width - scale(48),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: scale(50),
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray
  },
  contactName: {
    fontSize: Fonts.size.small,
    color: Colors.black,
    alignSelf: 'center',
    fontWeight: '500',
  },
  contactImage: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    alignSelf: 'center',
    marginRight: scale(16)
  },
  input: {
    height: scale(32),
    marginTop: scale(18),
    width: scale(300),
    padding: scale(10),
    borderRadius: scale(6),
    borderColor: Colors.gray,
    borderWidth: 1,
    alignSelf: 'center'
  },
  listStyle: {
    marginTop: scale(50),
  },
  floatingButton: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
    backgroundColor: Colors.shadeblue,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: scale(70),
    right: scale(30)
  },
  emptyContent: {
    justifyContent: 'center',
    width: '100%',
  },
  emptyText: {
    fontSize: Fonts.size.label,
    alignSelf: 'center',
    flexWrap: 'wrap'
  }
});

export default styles;

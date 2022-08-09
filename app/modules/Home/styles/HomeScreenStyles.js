import { StyleSheet } from 'react-native';
import { scale, Fonts, Colors } from '../../../utils/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  homeBannerContent: {
    width: '110%',
    height: scale(100),
    paddingVertical: scale(10),
    paddingHorizontal: scale(25),
    justifyContent: 'center'
  },
  userName: {
    fontSize: Fonts.size.input,
    color: Colors.white,
    textAlign: 'left',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  email: {
    fontSize: Fonts.size.medium,
    color: Colors.white,
    textAlign: 'left',
    fontWeight: 'bold',
    lineHeight: scale(20)
  },
  name: {
    fontSize: Fonts.size.medium,
    color: Colors.deActiveTab,
    textAlign: 'left',
    lineHeight: scale(20)
  },
  parkingBannerContent: {
    width: scale(360),
    height: scale(75),
    alignSelf: 'center',
    paddingVertical: scale(10),
    paddingHorizontal: scale(25),
    justifyContent: 'center',
    margin: scale(10),
    opacity: 0.9
  },
  titleText: {
    fontSize: Fonts.size.regular,
    color: Colors.white,
    textAlign: 'left',
    fontWeight: 'bold',
    lineHeight: scale(25)
  },
  descText: {
    fontSize: Fonts.size.medium,
    color: Colors.white,
    textAlign: 'left',
    fontWeight: '400'
  },
  rightArrow: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 15
  },
  locationListContent: {
    position: 'absolute',
    backgroundColor: Colors.white,
    zIndex: 1,
    top: '50%',
    width: scale(360),
    alignSelf: 'center',
    paddingVertical: scale(10),
    paddingHorizontal: scale(25),
    marginHorizontal: scale(10),
    borderRadius: scale(8)
  },
  textLabel: {
    fontSize: Fonts.size.regular,
    marginBottom: scale(5)
  },
  locationItemContainer: {
    shadowColor: 'red',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    borderBottomColor: Colors.deActiveTab,
    borderBottomWidth: 1,
    paddingVertical: scale(10),
    marginHorizontal: scale(5)
  },
  itemText: {
    fontSize: Fonts.size.tabLabel,
    color: Colors.black,
    fontWeight: '200'
  }
});

export default styles;

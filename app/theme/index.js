/**
 * @Screen : Styles
 * @Description : App Global Styles Sheet.
 *
 * @providesModule Styles
 */
 import {StyleSheet, Platform} from 'react-native';
 import {
     WINDOW,
     headerHeight,
     scale,
     fontSizeMedium,
     fontSizeSmall,
     FONT_PRIMARY_REGULAR,
     iPhoneX,
     fontSizeContent,
 } from 'AppUtils';
 import Colors from '../utils/Colors';
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'black',
     },
     authBackgroundImage: {
         flex: 1,
         width: undefined,
         height: undefined,
         backgroundColor: 'transparent',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
     },
     inputStyle: {
         height: scale(40),
         width: scale(214),
         color: 'black',
         fontSize: fontSizeMedium,
         fontFamily: FONT_PRIMARY_REGULAR,
         letterSpacing: 0.5,
         paddingLeft: scale(10),
     },
     placeholder: {
         letterSpacing: 0.5,
         color: Colors.placeholderTextColor,
         fontSize: fontSizeContent,
         fontFamily: FONT_PRIMARY_REGULAR,
     },
     infoInputRaw: {
         flexDirection: 'row',
         height: scale(14),
     },
     errorInputRaw: {
         flex: 1,
         paddingLeft: scale(10),
         flexDirection: 'row',
         justifyContent: 'flex-start',
     },
     errorText: {
         color: Colors.errorText,
         fontFamily: FONT_PRIMARY_REGULAR,
         fontSize: scale(10),
         letterSpacing: scale(0.5) >= 0.25 ? scale(0.5) : 0.25,
     },
     infoRaw: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'flex-end',
     },
     infoText: {
         fontFamily: FONT_PRIMARY_REGULAR,
         fontSize: scale(12),
         color: Colors.infoText,
         marginTop: scale(6),
     },
     inputLabel: {
         fontFamily: FONT_PRIMARY_REGULAR,
         fontSize: fontSizeSmall,
         color: Colors.infoText,
         marginBottom: scale(4),
     },
     registerInputField: {
         paddingLeft: scale(10),
         borderColor: Colors.white,
         backgroundColor: Colors.white,
         borderRadius: scale(5),
         borderWidth: 0.7,
         width: WINDOW.width - 90,
         height: scale(40),
         justifyContent: 'flex-start',
         alignItems: 'center',
         flexDirection: 'row',
         shadowOffset: {
             height: 2,
             width: 1,
         },
         elevation: Platform.OS === 'ios' ? 5 : 10,
         shadowRadius: 3,
         shadowColor: 'black',
         shadowOpacity: 0.4,
     }, shadowButton: {
         borderRadius: scale(5),
         marginTop: scale(10),
         width: WINDOW.width - 90,
         height: scale(40),
         alignItems: 'center',
         justifyContent: 'space-between',
         backgroundColor: '#f47e27',
         flexDirection: 'row',
         shadowOffset: {
             height: 2,
             width: 1,
         },
         elevation: Platform.OS === 'ios' ? 5 : 10,
         shadowRadius: 5,
         shadowColor: 'black',
         shadowOpacity: 0.3,
     },
 });
 export default styles;
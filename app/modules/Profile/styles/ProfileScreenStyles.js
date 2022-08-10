import { StyleSheet } from "react-native";
import { scale, Fonts, Colors, WINDOW } from "../../../utils/index";

const styles = StyleSheet.create({
  image: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(60),
  },
  activityIndicator: {
    width: scale(100),
    height: scale(100),
    alignSelf: "center",
    position: "absolute",
    top: 10,
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  versionLabel: {
    fontSize: Fonts.size.label,
    color: Colors.white,
    alignSelf: "center",
    position: "absolute",
    bottom: scale(30),
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: Colors.white,
    //backgroundColor:'yellow',
    // width: WINDOW.width,
    // height: WINDOW.height - 40 - (Platform.OS === 'android' ? 24 : 0),
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    //borderColor: Colors.red
  },
  profileContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 30,
    //backgroundColor: 'skyblue'
    backgroundColor: Colors.white,
  },
  profileButton: {
    backgroundColor: Colors.shadeblue,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: scale(36),
    width: scale(100),
    //padding: scale(4),
    borderColor: Colors.shadeblue,
    borderWidth: 1,
  },
  title: {
    fontSize: Fonts.size.small,
    color: Colors.white,
    alignSelf: "center",
    fontWeight: "500",
  },
  badgeButtonText: {
    textAlign: "center",
    fontSize: Fonts.size.small,
    fontWeight: "normal",
    padding: 0,
  },
  editPhotoIcon: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    backgroundColor: Colors.shadeblue,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginLeft: 1,
    top: 90,
    right: 0,
  },
});

export default styles;

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
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 30,
    backgroundColor: Colors.white,
  },
  profileButton: {
    backgroundColor: Colors.shadeblue,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: scale(36),
    width: scale(100),
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
  textInput: {
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
  contactContainer: {
    justifyContent: 'center',
    marginVertical: scale(50),
    backgroundColor: Colors.white,
  }
});

export default styles;

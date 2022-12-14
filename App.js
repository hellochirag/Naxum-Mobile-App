import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { MainContainer } from "./app/modules/index";
import Store from "./app/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./app/navigation/index";
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <RootSiblingParent>
    <Provider store={Store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
        <MainContainer />
      </View>
    </Provider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});

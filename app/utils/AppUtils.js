import RNZebraBluetoothPrinter from 'react-native-zebra-bluetooth-printer';
import { Alert, Linking } from "react-native";

const print = (zpl = "^XA^FX Top section with company logo, name and address.^CF0,60^FO50,50^GB100,100,100^FS^ FO75,75 ^ FR ^ GB100, 100, 100 ^ FS^ FO88, 88 ^ GB50, 50, 50 ^ FS ^XZ") => {

  try {
    //TODO: Print ZEBRA device print only
    RNZebraBluetoothPrinter.isEnabledBluetooth().then((res) => {
      //do something with res
      if (res === 'false') {
        Alert.alert(
          "Enable Bluetooth",
          "Bluetooth is required for printing. Would you like to open your Bluetooth settings?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            {
              text: "OK", onPress: () => {
                try {
                  Linking.openURL('App-Prefs:Bluetooth')
                }
                catch (err) {
                  console.log('ERROR', err);
                }

              }
            }
          ]
        );
      } else {
        //TODO :: GET Connect Printer isConnect Process for print, else process for connection...

        RNZebraBluetoothPrinter.pairedDevices().then((deviceArray) => {
          console.log('PAIRED DEVICES :: ', deviceArray);
          //do something with deviceArray
          if (deviceArray?.length > 0) {
            //TODO :: SAVED PAIRED DEVICES ? YES : NO

            RNZebraBluetoothPrinter.connectDevice('F6B5A2E9-187A-DA52-DB9F-5EC7F6166D51').then((res) => {
              //do something with res
              //for android, device address is mac address
              //for iOS, device address is a long string like 0C347F9F-2881-9CCB-43B0-205976944626
              console.log('PRINTER :: ', res);

              RNZebraBluetoothPrinter.print(zpl).then((res) => {
                //do something with res
                console.log('Print ::::', res);
                Alert.alert(
                  "Print confirmation",
                  "Has the ticket printed successfully?",
                  [
                    {
                      text: "NO, TRY AGAIN",
                      onPress: () => console.log("Print again process here..")
                    },
                    {
                      text: "NO, PRINT LATER",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "Yes", onPress: () => console.log("OK Pressed") }
                  ]
                );

              })
            });
          } else {
            Alert.alert(
              "Enable Bluetooth",
              "No paired Bluetooth printer found",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                {
                  text: "OK", onPress: () => {
                    RNZebraBluetoothPrinter.scanDevices().then((deviceArray) => {
                      console.log("SCAN DEVICES ::", deviceArray);
                    })
                  }
                }
              ]
            );
          }
        })




      }
    })

    // RNZebraBluetoothPrinter.enableBluetooth().then(res => {
    //     console.log('RES ::', res);
    //   });
  }
  catch (err) {
    console.log('ERROR :', err);
  }

}

export { print };

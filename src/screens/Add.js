import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { Camera, CameraType } from "expo-camera";
import Icon from "@expo/vector-icons/AntDesign";

export default class Add extends React.Component {
  render() {
    // const [text, setText] = useState('');
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: "#FFF", height: "100%" }}>
        <View style={{ flex: 0.1 }}></View>

        <Image
          source={require("../images/hmb.jpg")}
          style={{
            //
            flexDirection: "center",
            width: "80px",
            height: "65px",
          }}
        />
        <Text
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Upload Image
        </Text>

        <View
          onPress={() => navigate("Register")}
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            // backgroundColor:"#00716F",
            paddingVertical: 10,
            borderColor: "#004AAD",
            borderWidth: "1px",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "SemiBold",
            }}
          >
            Upload photo
          </Text>
        </View>
        <View
          onPress={() => navigate("Register")}
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            paddingVertical: 10,
            borderColor: "#004AAD",
            borderWidth: "1px",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "SemiBold",
            }}
          >
            Take photo
          </Text>
        </View>
        <View
          style={{
            flex: 0.1,
          }}
        ></View>
        <View>
          <iframe src="..." allow="microphone; camera;">
            <Camera style={styles.camera} type={type}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={toggleCameraType}
                >
                  <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </iframe>
        </View>

        <View>
          <TextInput
            style={{
              marginHorizontal: 55,
              // alignItems:"center",
              // justifyContent:"center",
              // marginTop:30,
              // paddingVertical:10,

              height: "250px",
              borderWidth: "1px",
            }}
            placeholder="Type your  comment as well as address here if incident is at a different location from where you are at the moment"
          ></TextInput>
        </View>

        <View
          onPress={() => navigate("Register")}
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            paddingVertical: 10,
            backgroundColor: "#004AAD",
            borderWidth: "1px",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "SemiBold",
            }}
          >
            Complete
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "red",
            paddingVertical: 10,
          }}
        >
          <Text
            onPress={() => navigate("Landing")}
            style={{
              color: "white",
              fontFamily: "SemiBold",
            }}
          >
            Back
          </Text>
        </View>
      </View>
    );
  }
}

import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_17_24} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94e/caa5/f5550398a3b6549d6deaf91758e4b86d"
        }}
        style={styles.ImageBackground_17_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15d3/9045/8a62cabcf82ba1d953585afb39a84d7b"
        }}
        style={styles.ImageBackground_17_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1181/54d3/1262e58c0cb69355749ebb57c4c51143"
        }}
        style={styles.ImageBackground_17_27}
      />
      <View style={styles.View_17_28}>
        <Text style={styles.Text_17_28}>lens</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5249/0fa4/8e183dcd163fbce14ebb4005d720e30f"
        }}
        style={styles.ImageBackground_17_29}
      />
      <View style={styles.View_17_42}>
        <Text style={styles.Text_17_42}>Heron in the reeds</Text>
      </View>
      <View style={styles.View_17_44}>
        <Text style={styles.Text_17_44}>7/24/2020</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6177/dee0/55b7ca395a2a27b3b146384b4a8c46a5"
        }}
        style={styles.ImageBackground_23_0}
      />
      <View style={styles.View_23_3} />
      <View style={styles.View_23_4}>
        <Text style={styles.Text_23_4}>Add a comment</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_17_24: {
    width: 375,
    minWidth: 375,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 603,
    backgroundColor: "rgba(2, 131, 172, 1)"
  },
  ImageBackground_17_25: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 615
  },
  ImageBackground_17_26: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 168,
    top: 615
  },
  ImageBackground_17_27: {
    width: 45.128204345703125,
    minWidth: 45.128204345703125,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 619
  },
  View_17_28: {
    width: 31,
    minWidth: 31,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 30
  },
  Text_17_28: {
    color: "rgba(2, 131, 172, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_29: {
    width: 343,
    minWidth: 343,
    height: 343,
    minHeight: 343,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 84,
    resizeMode: "cover"
  },
  View_17_42: {
    width: 228,
    minWidth: 228,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 443
  },
  Text_17_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_44: {
    width: 103,
    minWidth: 103,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53,
    top: 476
  },
  Text_17_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_0: {
    width: 44,
    minWidth: 44,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 447
  },
  View_23_3: {
    width: 343,
    minWidth: 343,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 517,
    backgroundColor: "rgba(239, 239, 239, 1)"
  },
  View_23_4: {
    width: 164,
    minWidth: 164,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 523
  },
  Text_23_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 667 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

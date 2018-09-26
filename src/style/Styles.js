import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navBar: {
    backgroundColor: "#5B29C1",
    borderBottomColor: "#48209A",
    borderBottomWidth: 1
  },
  conatiner: {
    flex: 1,
    backgroundColor:'#F7F7F7'
  },
  textView: {
    flex: 1,
    margin: 5
  },
  textStyle: {
    marginTop: 15,
    fontSize: 15,
    alignSelf: "center",
    fontFamily:'MiloPro-Bold'
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EF1B1B",
    margin: 15,
    height: 40,
    width: "100%",
    alignSelf: "center"
  },
  buttonTextStyle: {
    fontSize: 15,
    color: "white",
    margin: 5,
    fontSize: 15,
    fontWeight: "bold"
  },
  inputText: {
    marginTop: 15,
    height: 40,
    borderBottomWidth: 1.0,
    borderBottomColor: "#767171",
    width: "100%"
  },
  imageStyle: {
    height: 180,
    width: '50%',
    resizeMode: "cover"
  },
});

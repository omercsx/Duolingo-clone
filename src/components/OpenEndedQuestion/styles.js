import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",

    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    width: '30%',
    aspectRatio: 1,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,

    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#ebebeb",
    alignSelf: "stretch",
    flex: 1,

    // borders
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,


    padding: 10,
    fontSize: 16,

    textAlignVertical: "top",
    textAlign: "left",
  },
})

export default styles

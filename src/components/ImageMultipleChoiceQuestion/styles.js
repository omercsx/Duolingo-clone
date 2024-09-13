import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",

  },

  optionsContainer: {
    width: '100%',
    flex: 1,
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingTop: 16
  }
})
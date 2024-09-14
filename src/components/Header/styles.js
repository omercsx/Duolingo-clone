import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },

  restart: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    marginRight: 10,
  },

  heart: {
    width: 30,
    aspectRatio: 1,
    marginHorizontal: 10,
  },

  lives: {
    fontSize: 24,
    fontWeight: "600",
    color: "red",
  }
});

export default styles

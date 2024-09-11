import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  optionContainer: {
    // border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: 'lightgrey',
    borderRadius: 20,

    // size
    width: '48%',
    height: '48%',

    // spacing
    padding: 10,

    // align
    alignItems: 'center',

  },

  optionImage: {
    width: '100%',
    flex: 1
  },

  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  selectedContainer: {
    borderColor: '#81D5FE',
    backgroundColor: '#DDF4FE'
  },

  selectedText: {
    color: '#40BEF7',
    fontWeight: "bold",
    fontSize: 18
  }
})

export default styles;
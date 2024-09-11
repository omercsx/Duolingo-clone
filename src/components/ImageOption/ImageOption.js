import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import PropTypes from 'prop-types'

const ImageOption = ({ image, text, isSelected, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.optionContainer, isSelected && styles.selectedContainer]}>
      <Image
        source={{
          uri: image
        }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={[styles.optionText, isSelected && styles.selectedText]}>{text}</Text>
    </TouchableOpacity>
  )
}

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  handlePress: PropTypes.func
}

ImageOption.defaultProps = {
  text: "Default Text",
  isSelected: true,
  handlePress: () => { }
}

export default ImageOption;
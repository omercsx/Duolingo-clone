import { Image, Text, View } from "react-native"
import styles from "./styles"
import PropTypes from 'prop-types'

const ImageOption = ({ image, text, isSelected }) => {
  return (
    <View style={[styles.optionContainer, isSelected && styles.selectedContainer]}>
      <Image
        source={{
          uri: image
        }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={[styles.optionText, isSelected && styles.selectedText]}>{text}</Text>
    </View>
  )
}

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool
}

ImageOption.defaultProps = {
  text: "Default Text",
  isSelected: true
}

export default ImageOption;
import { Image, Text, View } from "react-native"
import styles from "./styles"

const ImageOption = ({ image, text }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image
        }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  )
}

export default ImageOption;
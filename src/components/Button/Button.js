import { Pressable, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable style={[styles.container, disabled && styles.disabledContainer]} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  onPress: () => { },
  disabled: true,
}

export default Button;

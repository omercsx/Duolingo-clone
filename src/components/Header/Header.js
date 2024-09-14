import { View, TouchableOpacity, Text, Image } from "react-native"
import ProgressBar from "../ProgressBar"
import styles from "./styles"
import Heart from "../../../assets/images/heart.png"

const Header = ({ progress, onRestart, lives }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onRestart}>
        <Text style={styles.restart}>X</Text>
      </TouchableOpacity>
      <ProgressBar progress={progress} />
      <Image source={Heart} style={styles.heart} resizeMode="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  )
}

export default Header;
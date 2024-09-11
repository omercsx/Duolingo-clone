import { Text, View } from "react-native";
import styles from "./App.styles"
import ImageOption from "./src/components/ImageOption"

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "Glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png" text="Cup" />
        <ImageOption image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png" text="Glass" />
        <ImageOption image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png" text="Milk" />
        <ImageOption image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png" text="Coffee" />
      </View>
    </View>
  )
}

export default App;
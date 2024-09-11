import { Text, View, SafeAreaView } from "react-native";
import styles from "./App.styles"
import ImageOption from "./src/components/ImageOption"
import oneQuestionWithOption from "./assets/data/oneQuestionWithOption"

const App = () => {
  const { question, options } = oneQuestionWithOption

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map(option => {
          return <ImageOption key={option.id} image={option.image} text={option.text} />
        })}
      </View>
    </View>
  )
}

export default App;
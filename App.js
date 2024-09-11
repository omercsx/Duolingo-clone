import { useState } from 'react'
import { Text, View } from "react-native";
import styles from "./App.styles"
import ImageOption from "./src/components/ImageOption"
import oneQuestionWithOption from "./assets/data/oneQuestionWithOption"

const App = () => {
  const [selected, setSelected] = useState(null)
  const { question, options } = oneQuestionWithOption

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map(option => {
          return <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            handlePress={() => setSelected(option)}
          />
        })}
      </View>
    </View>
  )
}

export default App;
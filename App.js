import { useState } from 'react'
import { Text, View } from "react-native";

import styles from "./App.styles"
import oneQuestionWithOption from "./assets/data/oneQuestionWithOption"
import ImageOption from "./src/components/ImageOption"
import Button from "./src/components/Button"

const App = () => {
  const [selected, setSelected] = useState(null)
  const { question, options } = oneQuestionWithOption

  const onButtonPress = () => {
    console.log("Button pressed")
  }

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
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </View>
  )
}

export default App;
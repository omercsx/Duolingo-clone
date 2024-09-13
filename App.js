import { useState, useEffect } from 'react'
import { Alert, Text, View } from "react-native";

import styles from "./App.styles"
import ImageOption from "./src/components/ImageOption"
import Button from "./src/components/Button"
import questions from "./assets/data/imageMulatipleChoiceQuestions"

const App = () => {
  const [selected, setSelected] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])


  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You've reached the end of the game! You won! Restarting game...")
      setCurrentQuestionIndex(0)
    } else {
      setCurrentQuestion(questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex])

  const onButtonPress = () => {
    if (selected.correct) {

      // move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelected(null)

    } else {
      Alert.alert("Wrong")
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map(option => {
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
import { useState, useEffect } from 'react'
import { Alert, View } from "react-native";

import styles from "./App.styles"
import questions from "./assets/data/imageMulatipleChoiceQuestions"
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion';

const App = () => {
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

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const onWrong = () => {
    Alert.alert("Wrong")
  }

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestion
        currentQuestion={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  )
}

export default App;
import { useState, useEffect } from 'react'
import { Alert, View } from "react-native";

import styles from "./App.styles"
import questions from "./assets/data/allQuestions"
import OpenEndedQuestion from './src/components/OpenEndedQuestion';
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';
import Header from './src/components/Header';

const App = () => {
  const LIVES = 3
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])
  const [lives, setLives] = useState(LIVES)

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
    if (lives === 0) {
      Alert.alert("Game over! Restarting game...")
      restart()
    } else {
      Alert.alert("Wrong")
      setLives(lives - 1)
    }
  }

  const restart = () => {
    setCurrentQuestionIndex(0)
    setLives(LIVES)
  }

  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} onRestart={restart} lives={lives} />
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" ? (
        <ImageMultipleChoiceQuestion
          currentQuestion={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : (
        <OpenEndedQuestion
          currentQuestion={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

    </View>
  )
}

export default App;
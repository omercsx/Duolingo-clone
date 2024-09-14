import { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You've reached the end of the game! You won! Restarting game...")
      setCurrentQuestionIndex(0)
    } else {
      setCurrentQuestion(questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex])

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    saveDate()
  }, [lives, currentQuestionIndex, hasLoaded])

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

  const saveDate = async () => {
    await AsyncStorage.setItem("lives", lives.toString())
    await AsyncStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString())
  }

  const loadData = async () => {
    const savedLives = await AsyncStorage.getItem("lives")
    if (savedLives) {
      setLives(parseInt(savedLives))
    }

    const savedCurrentQuestionIndex = await AsyncStorage.getItem("currentQuestionIndex")
    if (savedCurrentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(savedCurrentQuestionIndex))
    }

    setHasLoaded(true)
  }

  if (!hasLoaded) {
    return <ActivityIndicator size="large" />
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
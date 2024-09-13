import { useState } from "react"
import { Text, View, Image, TextInput } from "react-native"
import styles from "./styles"
import PropTypes from "prop-types"

import Button from "../Button"
import mascot from "../../../assets/images/mascot.png"

const OpenEndedQuestion = ({ currentQuestion, onCorrect, onWrong }) => {
  const [userAnswer, setUserAnswer] = useState("")

  const handleCheck = () => {
    if (currentQuestion.answer.toLowerCase().trim() === userAnswer.toLowerCase().trim()) {
      onCorrect()
      setUserAnswer("")
    } else {
      onWrong()
    }
  }

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{currentQuestion.text}</Text>
        </View>

      </View>
      <TextInput style={styles.textInput} value={userAnswer} placeholder="Type in English" multiline={true} onChangeText={setUserAnswer} />
      <Button text="Check" onPress={handleCheck} disabled={!userAnswer} />
    </>
  )
}

OpenEndedQuestion.propTypes = {
  text: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

export default OpenEndedQuestion

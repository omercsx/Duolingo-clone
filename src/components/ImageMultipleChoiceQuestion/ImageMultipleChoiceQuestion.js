import { useState } from "react"
import { Text, View } from "react-native"
import Button from "../Button"
import ImageOption from "../ImageOption"
import { styles } from "./styles"

const ImageMultipleChoiceQuestion = ({ currentQuestion, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null)

  const onButtonPress = () => {
    if (selected.correct) {

      // move to next question
      onCorrect()
      setSelected(null)

    } else {
      onWrong()
    }
  }

  return (
    <>
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
    </>
  )
}

export default ImageMultipleChoiceQuestion
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuizTakingScreen = ({ route }) => {
  const { quizId } = route.params;

  // Dummy quiz data
  const quizData = {
    questions: [
      {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Rome', 'Berlin'],
        correctAnswer: 'Paris'
      },
      // Add more questions as needed
    ]
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null); // Reset selected option for the next question
    }
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <Text>Question {currentQuestionIndex + 1}:</Text>
      <Text>{currentQuestion.question}</Text>
      {currentQuestion.options.map(option => (
        <TouchableOpacity 
          key={option} 
          onPress={() => handleOptionPress(option)}
          style={{ backgroundColor: selectedOption === option ? 'lightblue' : 'transparent', padding: 5, marginVertical: 5, borderRadius: 5 }}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      {currentQuestionIndex < quizData.questions.length - 1 && (
        <TouchableOpacity onPress={handleNextQuestion} style={{ marginTop: 10 }}>
          <Text>Next Question</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default QuizTakingScreen;

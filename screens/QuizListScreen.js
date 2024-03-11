// QuizListScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuizListScreen = ({ navigation }) => {
  // Dummy quiz data
  const quizzes = [
    { id: 1, title: 'Math Quiz' },
    { id: 2, title: 'Science Quiz' },
    // Add more quizzes as needed
  ];

  return (
    <View>
      <Text>Available Quizzes:</Text>
      {quizzes.map(quiz => (
        <TouchableOpacity key={quiz.id} onPress={() => navigation.navigate('QuizTaking', { quizId: quiz.id })}>
          <Text>{quiz.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuizListScreen;

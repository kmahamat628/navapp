// DataStorage.js

import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveQuizResultToLocal = async (quizId, result) => {
  try {
    await AsyncStorage.setItem(`quiz_${quizId}_result`, JSON.stringify(result));
    console.log('Quiz result saved successfully.');
  } catch (error) {
    console.error('Error saving quiz result:', error);
  }
};

export const getQuizResultFromLocal = async (quizId) => {
  try {
    const resultJSON = await AsyncStorage.getItem(`quiz_${quizId}_result`);
    return resultJSON ? JSON.parse(resultJSON) : null;
  } catch (error) {
    console.error('Error getting quiz result:', error);
    return null;
  }
};

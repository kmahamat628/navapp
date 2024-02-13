import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.infoText}>Name: Khalil Mahamat </Text>
        <Text style={styles.infoText}>Country: Chad</Text>
        <Text style={styles.infoText}>Email: khaliltch2202@gmail.com</Text>
        <Text style={styles.infoText}>Phone: 0791568675</Text>
        <Text style={styles.infoText}>Job: Student</Text>
        <Text style={styles.infoText}>University: AUCA</Text>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileInfo: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ContactScreen = () => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Iradukunda', phone: '0791543566' },
    { id: '2', name: 'Khalil Mahamat', phone: '0788909786' },
    { id: '3', name: 'Alice Johnson', phone: '0791568675' },
    { id: '4', name: 'Lecturer Jerome', phone: '0788884429' },
    // Add more contacts as needed
  ]);

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  contactItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: '#666',
  },
});

export default ContactScreen;

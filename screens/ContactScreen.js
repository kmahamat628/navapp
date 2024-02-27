import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Contacts from 'react-native-contacts';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    Contacts.getAll((err, fetchedContacts) => {
      if (err) {
        console.log('Error fetching contacts: ', err);
      } else {
        setContacts(fetchedContacts);
      }
    });
  };

  return (
    <View>
      <Text>Contacts:</Text>
      {contacts.map(contact => (
        <Text key={contact.recordID}>{contact.displayName}</Text>
      ))}
    </View>
  );
};

export default ContactList;

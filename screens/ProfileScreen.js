import React, { useState } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker'; // Import ImagePicker

const Profile = () => {
  const [avatarSource, setAvatarSource] = useState(null);

  const selectImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => { // Use ImagePicker
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
  };

  const uploadImage = () => {
    // Logic to upload image to server
    // Once uploaded successfully, update user's profile with new image URL
    // You may use a library like axios to send a POST request to your server
    // Ensure you have appropriate backend setup to handle image uploads

    Alert.alert('Image Uploaded!', 'Your profile picture has been updated successfully.');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile</Text>
      <View style={{ marginBottom: 20 }}>
        {avatarSource && (
          <Image
            source={avatarSource}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        )}
      </View>
      <Button title="Select Profile Picture" onPress={selectImage} />
      <Button title="Upload Picture" onPress={uploadImage} />
    </View>
  );
};

export default Profile;

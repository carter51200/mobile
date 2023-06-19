import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const ProfileScreen = () => {
  const [isProfileImageExpanded, setProfileImageExpanded] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState('Donghyuk Choi');
  const [bio, setBio] = useState('Student');
  const [age, setAge] = useState('24');
  const [location, setLocation] = useState('Seoul');

  const toggleProfileImageSize = () => {
    setProfileImageExpanded(!isProfileImageExpanded);
  };

  const toggleEdit = () => {
    setEditing(!isEditing);
  };

  const profileImageStyle = isProfileImageExpanded
    ? styles.profileImageExpanded
    : styles.profileImage;

  const renderProfileInfo = () => {
    if (isEditing) {
      return (
        <>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={bio}
            onChangeText={setBio}
            placeholder="Bio"
          />
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            placeholder="Age"
          />
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Location"
          />
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{bio}</Text>
          <Text style={styles.text}>{age}</Text>
          <Text style={styles.text}>{location}</Text>
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleProfileImageSize}>
        <Image
          source={require('./assets/profileImage.png')}
          style={profileImageStyle}
        />
      </TouchableOpacity>
      {renderProfileInfo()}
      <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileImageExpanded: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ProfileScreen;
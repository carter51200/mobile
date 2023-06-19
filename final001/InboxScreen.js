import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.previewImage} />
      ) : (
        <Camera style={styles.camera} ref={(ref) => setCamera(ref)} />
      )}
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  uploadButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
  uploadButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  previewImage: {
    flex: 1,
  },
});

export default CameraScreen;

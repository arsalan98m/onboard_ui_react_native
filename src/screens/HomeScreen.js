import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewOnboarding');
    } catch (err) {
      console.log('Error @removeItem: ', err);
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>

      <TouchableOpacity
        onPress={clearOnboarding}
        style={{ borderWidth: 1, padding: 20 }}
      >
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from './src/components/Onboarding';
import HomeScreen from './src/screens/HomeScreen';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size='large' color='#000' />
    </View>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewOnboarding');
      if (value !== null) {
        setViewOnboarding(true);
      }
    } catch (err) {
      console.log('Error @checkOnboarding: ', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : viewOnboarding ? <HomeScreen /> : <Onboarding />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

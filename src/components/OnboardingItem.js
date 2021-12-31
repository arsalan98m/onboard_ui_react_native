import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from 'react-native';

function OnboardingItem({ image, title, description }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={image}
        style={[styles.image, { width, resizeMode: 'contain' }]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 0.7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },

  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
export default OnboardingItem;

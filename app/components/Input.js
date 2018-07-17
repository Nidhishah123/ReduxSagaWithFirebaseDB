import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import styles from '../assets/styles';

export default Input = (props) => {
  const {label, onChangeText, value} = props;

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>
        {label}
      </Text>
      <TextInput
        {...props}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}



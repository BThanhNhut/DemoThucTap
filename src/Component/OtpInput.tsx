import React, {useState, useRef, useEffect} from 'react';
import {Text} from 'react-native';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

interface OtpInputProps {
  length: number;
  onOtpChange: (otp: string) => void;
}

export default function OtpInput({length, onOtpChange}: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const textInputRef = useRef<TextInput>(null);

  const handleTextInputChange = (text: string) => {
    if (text.length <= length) {
      const newOtp = [...otp];
      for (let i = 0; i < length; i++) {
        newOtp[i] = text[i] || '';
      }
      setOtp(newOtp);
    }
  };
  return (
    <View style={styles.container}>
      {otp.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.border}
          onPress={() => textInputRef.current?.focus()}>
          <Text style={styles.input}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TextInput
        style={{width: 0, height: 0}}
        ref={textInputRef}
        keyboardType="numeric"
        onChangeText={text => handleTextInputChange(text)}
        maxLength={6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    width: 40,
  },
  border: {
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

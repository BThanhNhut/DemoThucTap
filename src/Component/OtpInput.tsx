import React, {useState, useRef, useEffect} from 'react';
import {Text} from 'react-native';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

interface OtpInputProps {
  length: number;
  onOtpChange: (otp: string) => void;
}

export default function OtpInput({length, onOtpChange}: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const [otpstring, setotpstring] = useState<string>('');
  const textInputRef = useRef<TextInput>(null);

  const handdleOTP = (text: string, index: number) => {
    if (text.length <= length) {
      console.log('kq', text + index);
      textInputRef.current?.focus();
      const lastElement = text[text.length - 1];
      const newOtp = [...otp];
      newOtp[index] = lastElement;
      setOtp(newOtp);
    }
  };

  const handleTextInputChange = (text: string) => {
    if (text.length <= length) {
      setotpstring(text);
      text.split('').forEach((char, index) => {
        handdleOTP(char, index);
      });
      if (text.length < otpstring.length) {
        const deletedCount = otpstring.length - text.length;
        const lastKeptIndex = text.length;
        for (let i = lastKeptIndex; i < lastKeptIndex + deletedCount; i++) {
          handdleOTP('', i);
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      {otp.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.border}
          onPress={() => handdleOTP(otpstring, index)}>
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

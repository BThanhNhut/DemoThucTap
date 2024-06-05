import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

interface OtpInputProps {
  length: number;
  onOtpChange: (otp: string) => void;
}

export default function OtpInput({length, onOtpChange}: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
    onOtpChange(newOtp.join(''));
  };

  return (
    <View style={styles.container}>
      {otp.map((_, index) => (
        <TouchableOpacity key={index} style={styles.border}>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChangeText(text, index)}
            value={otp[index]}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => {
              inputs.current[index] = ref;
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginHorizontal: 16,
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

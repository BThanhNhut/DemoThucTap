import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OtpInput from '../Component/OtpInput';
const {height} = Dimensions.get('window');

export default function OtpScreen() {
  const [otp, setOtp] = useState<string>('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xác nhận mã OTP</Text>
      <Text style={styles.ContentText}>
        Chúng tôi vừa gửi otp đến sdt người được bảo hiểm. Vui lòng nhập vào bên
        dưới để các thông tin vừa rồi được xác nhận{' '}
        <Text style={{fontWeight: 'bold'}}>
          được xác nhận chính xác bởi người được bảo hiểm.
        </Text>
      </Text>
      <OtpInput length={6} onOtpChange={setOtp} />
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textbutton}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6efff',
    paddingLeft: 10,
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: height * 0.02,
  },
  otpText: {
    marginTop: 20,
    fontSize: 18,
  },
  ContentText: {
    marginVertical: height * 0.02,
  },
  textbutton: {
    color: 'white',
    fontSize: 12,
  },
  button: {
    alignItems: 'center',
    marginTop: height * 0.55,
    justifyContent: 'center',
    borderRadius: 20,
    height: 40,
    marginHorizontal: 20,
    backgroundColor: '#fb7bbe',
  },
});

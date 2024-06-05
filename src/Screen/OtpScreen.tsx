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
      <View style={styles.boxtext}>
        <Text style={styles.title}>Xác nhận mã OTP</Text>
        <Text style={styles.ContentText}>
          Chúng tôi vừa gửi mã OTP đến SĐT của người {'\n'} được bảo hiểm. Vui
          lòng nhập vào bên dưới để {'\n'} các thông tin vừa rồi{' '}
          <Text style={styles.ChildContentText}>
            được xác nhận là chính {'\n'} xác bởi người được bảo hiểm.
          </Text>
        </Text>
      </View>
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
    alignContent: 'center',
  },
  boxtext: {
    marginLeft: 10,
  },
  title: {
    color: '#095EFB',
    fontFamily: 'Raleway-Bold',
    fontSize: 28,
    marginVertical: height * 0.02,
  },
  otpText: {
    marginTop: 20,
    fontSize: 18,
  },
  ContentText: {
    fontFamily: 'Raleway-Regular',
    marginVertical: height * 0.02,
  },
  ChildContentText: {
    fontFamily: 'Raleway-Bold',
  },
  textbutton: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    marginTop: height * 0.5,
    justifyContent: 'center',
    borderRadius: 16,
    height: 56,
    margin: 10,
    backgroundColor: '#FB7BBE',
  },
});

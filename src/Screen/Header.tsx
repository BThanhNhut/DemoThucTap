import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon5 from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

function Header({navigation}: any) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.8}>
          <Icon5 name="left" size={22} color="blue" onPress={goBack}></Icon5>
        </TouchableOpacity>
        <Text style={styles.title}> Xác Nhận Mã OTP</Text>
        <View></View>
      </View>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  row: {
    marginTop: 17,
    width: width,
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    color: 'blue',
    fontWeight: 'bold',
  },
});

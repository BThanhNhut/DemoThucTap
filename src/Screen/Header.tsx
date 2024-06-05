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
          <Icon5
            style={styles.icon}
            name="left"
            size={24}
            color="blue"
            onPress={goBack}></Icon5>
        </TouchableOpacity>
        <View style={styles.boxtitle}>
          <Text style={styles.title}> Xác Nhận Mã OTP</Text>
        </View>
      </View>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
  },
  row: {
    marginTop: 17,
    width: width,
    height: '80%',
    flexDirection: 'row',
  },
  boxtitle: {
    width: '80%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    color: '#074BC9',
    fontFamily: 'Raleway-Bold',
  },
  icon: {
    marginLeft: 16,
    marginRight: 20,
  },
});

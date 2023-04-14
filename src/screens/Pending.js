import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

const Pending = ({navigation}) => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <HeaderComponent
        icon={require('../images/back.png')}
        title={'Pending Appointment'}
        onClick={() => {
          navigation.navigate('Home');
        }}
      />
      <View>
        <FlatList
          data={[1, 1, 1, 1, 11, 111]}
          renderItem={({index, item}) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require('../images/doctor.png')}
                  style={styles.docImg}
                />
                <View>
                  <Text style={styles.docName}>{'Doctor XYZ'}</Text>
                  <Text style={styles.timing}>{'9:45AM'}</Text>
                </View>
                <Text style={styles.status}>Pending</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pending;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemView: {
    width: '90%',
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3C486B',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  docImg: {
    width: 69,
    height: 69,
    borderRadius: 10,
    marginLeft: 10,
  },
  docName: {
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 20,
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
    color: '#8e8e8e',
  },
  status: {
    marginLeft: 60,
    padding: 5,
    color: '#FED049',
    fontWeight: '900',
    fontSize: 18,
  },
});

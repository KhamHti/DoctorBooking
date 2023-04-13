import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BookButton from '../components/BookButton';

const aptTime = [
  '09:30AM-10:00AM',
  '10:00AM-10:30AM',
  '10:30AM-11:00AM',
  // '11:00AM-11:30AM',
  // '01:30PM-02:00PM',
  '02:00PM-02:30PM',
  '02:30PM-03:00PM',
  '03:00PM-03:30PM',
];

const KyoPoint = ({item, index}) => {
  return (
    <TouchableOpacity>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

const BookAppointment = ({navigation}) => {
  const [selectSlot, setSelectSlot] = useState(0);
  const [selectedGender, setSelectedGender] = useState(0);

  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView style={styles.container}>
        <HeaderComponent
          icon={require('../images/back.png')}
          title={'Book Appointment'}
          onClick={() => navigation.navigate('Home')}
        />
        <Image source={require('../images/doctor.png')} style={styles.docImg} />
        <Text style={styles.docName}>Doctor Kandy Molly</Text>
        <Text style={styles.docSpl}>Skin Doctor</Text>
        <Text style={styles.heading}>Appointment Time</Text>
        <View>
          <FlatList
            numColumns={2}
            data={aptTime}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectSlot(index)}
                  style={[
                    styles.timeSlot,
                    {
                      backgroundColor:
                        selectSlot === index ? '#6ECCAF' : '#3C486B',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.timeText,
                      {
                        color: selectSlot === index ? '#000' : '#fff',
                      },
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput placeholder="Enter Name" style={styles.inputPatientName} />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            onPress={() => {
              setSelectedGender(0);
            }}
            style={[
              styles.gender,
              {borderColor: selectedGender === 0 ? 'blue' : '#3C486B'},
            ]}>
            <Image
              source={require('../images/male.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedGender(1);
            }}
            style={[
              styles.gender,
              {borderColor: selectedGender === 1 ? '#3C486B' : 'blue'},
            ]}>
            <Image
              source={require('../images/female.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
          onPress={() => {
            setSelectedGender(1);
          }}
          style={[
            styles.gender,
            {borderColor: selectedGender === 1 ? 'blue' : '#3C486B'},
          ]}>
          <Image
            source={require('../images/male.png')}
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity> */}
        </View>
        <BookButton
          width={200}
          height={45}
          title={'Book Now'}
          onClick={() => navigation.navigate('BookingSuccess')}
          status={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  docImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    color: '#3C486B',
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    color: 'green',
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 10,
    borderColor: '#3C486B',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
    marginVertical: 15,
    marginLeft: 25,
  },
  timeSlot: {
    width: '45%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 8,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputPatientName: {
    borderWidth: 0.5,
    height: 40,
    width: '95%',
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 20,
    borderColor: '#3C486B',
  },
  genderView: {
    marginTop: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gender: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default BookAppointment;

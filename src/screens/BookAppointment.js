/* eslint-disable react/no-unstable-nested-components */
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
import React, {useEffect, useState} from 'react';
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

// const DaysList = [];

const BookAppointment = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState(-1);
  const [selectSlot, setSelectSlot] = useState(-1);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [days, setDays] = useState([]);

  useEffect(() => {
    let DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push(i);
      // DaysList.push({day: i, selected: false});
    }
    setDays(DaysList);
  }, []);

  const getDays = month => {
    // eslint-disable-next-line no-shadow
    let days = 0;
    if (month === 1) {
      days = 31;
    } else if (month === 2) {
      days = 28;
    } else if (month === 3) {
      days = 31;
    } else if (month === 4) {
      days = 30;
    } else if (month === 5) {
      days = 31;
    } else if (month === 6) {
      days = 30;
    } else if (month === 7) {
      days = 31;
    } else if (month === 8) {
      days = 31;
    } else if (month === 9) {
      days = 30;
    } else if (month === 10) {
      days = 31;
    } else if (month === 11) {
      days = 30;
    } else if (month === 12) {
      days = 31;
    }
    return days;
  };

  function KyoPoint({item, index}) {
    return (
      <TouchableOpacity
        onPress={() => setSelectSlot(index)}
        style={[
          styles.timeSlot,
          {
            backgroundColor: selectSlot === index ? '#6ECCAF' : '#3C486B',
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
  }

  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent
          icon={require('../images/back.png')}
          title={'Book Appointment'}
          onClick={() => navigation.navigate('Home')}
        />
        <Image source={require('../images/doctor.png')} style={styles.docImg} />
        <Text style={styles.docName}>Doctor Kandy Molly</Text>
        <Text style={styles.docSpl}>Skin Doctor</Text>
        <Text style={styles.heading}>Select Date</Text>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      selectedDay === index ? '#6ECCAF' : '#3C486B',
                    marginLeft: 10,
                  }}
                  onPress={() => {
                    // console.log(new Date().getDate());
                    if (item.day < new Date().getDate()) {
                    } else {
                      setSelectedDay(index);
                    }
                  }}>
                  <Text
                    style={{
                      color: selectedDay === index ? '#000' : '#fff',
                      fontSize: 16,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Available Slot</Text>
        <View>
          <FlatList
            numColumns={2}
            data={aptTime}
            renderItem={({item, index}) => KyoPoint({item, index})}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput placeholder="Enter Name" style={styles.inputPatientName} />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          {/* male gender  */}

          <TouchableOpacity
            onPress={() => {
              setSelectedGender(1);
            }}
            style={[
              styles.gender,
              {backgroundColor: selectedGender === 1 ? '#6ECCAF' : '#3C486B'},
            ]}>
            <Image
              source={require('../images/male.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
          {/* other gender  */}

          <TouchableOpacity
            onPress={() => {
              setSelectedGender(2);
            }}
            style={[
              styles.gender,
              {backgroundColor: selectedGender === 2 ? '#6ECCAF' : '#3C486B'},
            ]}>
            <Image
              source={require('../images/equality.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>

          {/* female gender  */}

          <TouchableOpacity
            style={[
              styles.gender,
              {backgroundColor: selectedGender === 0 ? '#6ECCAF' : '#3c486b'},
            ]}
            onPress={() => {
              setSelectedGender(0);
            }}>
            <Image
              source={require('../images/female.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <BookButton
            width={300}
            height={45}
            title={'Book Now'}
            onClick={() => navigation.navigate('BookingSuccess')}
            status={true}
          />
        </View>
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
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gender: {
    width: 70,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  btnView: {
    marginVertical: 40,
  },
});

export default BookAppointment;

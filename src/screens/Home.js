import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import LinearGradient from 'react-native-linear-gradient';
import BookButton from '../components/BookButton';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            title={'Doctor App'}
            icon={require('../images/logo.png')}
          />
          <Image
            source={require('../images/banner.jpg')}
            style={styles.banner}
          />
          <Text style={styles.heading}>Select Categoary</Text>
          <View style={{marginLeft: 5}}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1]}
              horizontal={true}
              renderItem={({item, index}) => (
                <TouchableOpacity>
                  <LinearGradient
                    colors={['#BFCCB5', '#7C96AB', '#3C486B']}
                    style={styles.linearGradient}>
                    <Text style={styles.catName}>
                      {'Category' + (index + 1)}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            />
          </View>
          <Text style={styles.heading}>Top Rated Doctors</Text>
          <View style={{marginTop: 10, alignSelf: 'center'}}>
            <FlatList
              numColumns={2}
              data={[1, 1, 1, 1, 1, 1]}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.docItem}>
                    <Image
                      source={require('../images/doctor.png')}
                      style={styles.docImg}
                    />
                    <Text style={styles.docName}>Doctor {index + 1}</Text>
                    <Text style={styles.docSpl}>Skin Specialist</Text>
                    <Text
                      style={[
                        styles.status,
                        {
                          color: index / 2 === 0 ? 'green' : 'red',
                          opacity: index / 2 === 0 ? 1 : 0.3,
                        },
                      ]}>
                      {index / 2 === 0 ? 'Avaibale' : 'Busy'}
                    </Text>
                    <BookButton
                      width={150}
                      height={35}
                      status={index / 2 === 0 ? true : false}
                      title={'Book Appointment'}
                      onClick={() => {
                        if (index / 2 === 0) {
                          navigation.navigate('BookAppointment');
                        }
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottonTabView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Completed');
          }}>
          <Image
            source={require('../images/completed.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pending');
          }}>
          <Image
            source={require('../images/pending.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallAmbulance');
          }}>
          <Image
            source={require('../images/ambulance.png')}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 50,
    marginHorizontal: 50,
    backgroundColor: '#3C486B',
  },
  banner: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10,
    marginLeft: 25,
  },
  linearGradient: {
    width: 120,
    height: 90,
    borderRadius: 10,
    marginLeft: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  docItem: {
    width: '45%',
    // height: 200,
    backgroundColor: '#fff',
    // backgroundColor: "#3C486B",
    borderRadius: 15,
    borderWidth: 1,
    margin: 10,
  },
  docImg: {
    width: 69,
    height: 69,
    alignSelf: 'center',
    marginTop: 5,
  },
  docName: {
    fontSize: 18,
    color: '#3C486B',
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 5,
  },
  docSpl: {
    fontSize: 13,
    color: '#3C486B',
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 5,
    borderColor: '#3C486B',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 13,
    color: '#3C486B',
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 5,
  },
  bottonTabView: {
    width: '90%',
    height: 60,
    backgroundColor: '#3C486B',
    borderRadius: 12,
    elevation: 10,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
});

export default Home;

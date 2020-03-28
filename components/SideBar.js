import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

export default Sidebar = props => (
  <ScrollView>
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={{width: undefined, padding: 16, paddingTop: 48}}>
      <Image
        source={{uri: 'https://i.pravatar.cc/300'}}
        style={styles.profile}
      />
      <Text style={styles.name}>Sophie Stewart</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.followers}>734 Followers</Text>
        <FontAwesomeIcon
          icon={faUser}
          size={16}
          color="rgba(255,255,255,0.8)"></FontAwesomeIcon>
      </View>
    </ImageBackground>

    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  name: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 8,
  },
  followers: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginRight: 4,
  },
});

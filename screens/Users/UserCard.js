import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
//redux
import {useSelector} from 'react-redux';
//components
import Text from '../../components/Text';
import AppTopBar from '../../components/AppTopBar';
import Layout from '../../components/Layout';
//assets
import {Colors} from '../../assets/Colors';
//Local
import UsersAlbumsPosts from './UsersAlbumsPosts';

const UserCard = () => {
  const {users} = useSelector(state => state.usersReducer);

  return (
    <Layout>
    <AppTopBar />
    <ScrollView style={styles.scroller}>
      
      {React.Children.toArray(
        users.map(user => (
          <View style={styles.flexContainer}>
            <View style={styles.rowContainer}>
              {/* <Text title={user.name} /> */}
              <Text title={user.username} />
              <Text
                title={`@${user.email}`}
                style={styles.email}
                numberOfLines={1}
                ellipsizeMode="tail"
              />
            </View>
            <UsersAlbumsPosts userId={user.id} />
          </View>
        ))
      )}
    </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    height: 100,
    alignItems: 'center',
    backgroundColor: Colors.Background,
  },
  mainTitle: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  userNameInfos: {
    flexDirection: 'row',
  },
  UserNameText: {
    textAlign: 'center',
  },
  scroller: {
    flexGrow: 1,
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  email: {
    marginLeft: 5,
    color: 'grey',
  },
});
export default UserCard;

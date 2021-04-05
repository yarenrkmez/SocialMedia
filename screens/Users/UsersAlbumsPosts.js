import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
//Icon
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
//api
import {getAllAlbums} from '../../api/Albums';
import {getAllPosts} from '../../api/Posts';
//components
import Text from '../../components/Text';

const UsersAlbumsPosts = ({userId}) => {
  
  const [usersAlbums, setUsersAlbums] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);
  const [isAlbumsLoading, setAlbumsLoad] = useState(false);

  useEffect(() => {
    getAlbumsFromApi();
    getPostsFromApi();
  }, []);

  const getAlbumsFromApi = async () => {
    setAlbumsLoad(true);
    const getUserAlbums = await getAllAlbums();
    if (getUserAlbums.status === 200) {
      setUsersAlbums(getUserAlbums.data);
      setAlbumsLoad(false);
    }
  };

  const getPostsFromApi = async () => {
    const getUserPosts = await getAllPosts();
    if (getUserPosts.status === 200) {
      setUsersPosts(getUserPosts.data);
    }
  };

const filterAlbums=(id)=>{
return (usersAlbums.filter((item) => item.userId === id)).length;
}

const filterPosts=(id)=>{
  return (usersPosts.filter((item) => item.userId === id)).length;
  }

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="albums" size={20} />
        <Text title={filterAlbums(userId)} />
        <IconMaterial name="post" size={20} />
        <Text title={filterPosts(userId)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default UsersAlbumsPosts;

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
//redux
import {useSelector} from 'react-redux';
//Local
import UserCard from './UserCard';
//component
import Layout from '../../components/Layout';

const Index = () => {
  const {usersLoading} = useSelector(state => state.usersReducer);

  return <Layout>{!usersLoading && <UserCard />}</Layout>;
};

const styles = StyleSheet.create({});
export default Index;

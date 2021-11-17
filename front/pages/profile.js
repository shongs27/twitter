import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import Head from 'next/head';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import FollowerList from '../components/FollowerList';

function profile() {
  //더미 데이터
  // const followerList = [
  //   { nickname: "제로초" },
  //   { nickname: "홍쓰" },
  //   { nickname: "노드버드오피셜" },
  // ];
  // const followList = [
  //   { nickname: "제로초" },
  //   { nickname: "홍쓰" },
  //   { nickname: "노드버드오피셜" },
  // ];
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }
  return (
    <>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Follwings} />
        <FollowerList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
}

export default profile;

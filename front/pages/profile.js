import React, { useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import FollowerList from '../components/FollowerList';
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
} from '../reducers/user';

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
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  //팔로워, 팔로잉 목록 불러오기
  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });

    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

  //me정보 없는것 = 로그인 안했으면 메인으로 돌아간다
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
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowerList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
}

export default profile;

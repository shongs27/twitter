import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import FollowerList from "../components/FollowerList";
import { useSelector } from "react-redux";

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

  return (
    <>
      <AppLayout>
        {/* 큼직큼직하게 먼저 가상의 컴포넌트를 만든다
         */}
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Follwings} />
        <FollowerList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
}

export default profile;

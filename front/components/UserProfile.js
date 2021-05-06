import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

//트위터 게시글 Card로 하면 좋을 거 같다
function UserProfile({ setIsLoggedIn }) {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="Hongs" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;

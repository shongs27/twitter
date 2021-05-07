import React, { useState, useMemo } from "react";
import propTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";

//CSS inline은 지양해야 한다 =>

//1번째 방법 - styled-component
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

//2번째 방법 - useMemo 해보기
// const style = useMemo(
//   () => ({
//     marginTop: 10,
//   }),
//   []
// );

function AppLayout({ children }) {
  //1- 백엔드 안만들었으니 더미 데이터로 state만듦
  // const [IsLoggedIn, setIsLoggedIn] = useState(false);

  //2- redux
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* 컬럼사이의 간격 */}
      <Row gutter={8}>
        {/* xs 모바일 / sm 태블릿 / md 작은PC lg,xl 대형화면 24등분을 기준 */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>

        <Col xs={24} md={12}>
          {children}
        </Col>

        <Col xs={24} md={6}>
          <a href="https://naver.com" target="_blank" rel="noreferrer noopener">
            made by Hongs
          </a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  childeren: propTypes.node.isRequired,
};

export default AppLayout;
